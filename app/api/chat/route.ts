import { NextRequest } from "next/server";
import { retrieveContext } from "@/lib/rag/retriever";
import { searchProducts } from "@/lib/mcp/client";
export const runtime = "nodejs";
const systemPrompt = "You are Kapruka AI, Sri Lanka smartest shopping assistant. You deeply understand Sri Lankan culture, gifting habits, shopping behavior, delivery urgency, and budget sensitivity. Always ask clarifying questions, recommend 2-5 real products from provided results, explain reasoning, guide checkout, and never hallucinate products.";
function fallbackAnswer(message: string, language: string, contexts: ReturnType<typeof retrieveContext>) {
  const sinhala = language === "si";
  const needsOccasion = !/birthday|anniversary|new year|avurudu|wedding|funeral|grocery|baby|urgent/i.test(message);
  if (sinhala) return "Hari, mama Sri Lankan context eka baluwa: " + contexts.map((c) => c.title).join(", ") + ". " + (needsOccasion ? "Occasion eka saha budget eka kiyanna;" : "Me request ekata match wena options tikak balamu;") + " mama reasons, delivery, checkout guidance ekka narrow karannam.";
  return "Lovely, I checked the Sri Lankan shopping context: " + contexts.map((c) => c.title).join(", ") + ". " + (needsOccasion ? "Tell me the occasion, budget, and delivery city;" : "Here are the strongest directions to consider;") + " I will narrow it with reasons, delivery timing, and checkout guidance.";
}
export async function POST(req: NextRequest) {
  const { message, language = "en" } = await req.json();
  const contexts = retrieveContext(message);
  const products = await searchProducts(message);
  const encoder = new TextEncoder();
  const stream = new ReadableStream({ async start(controller) {
    let text = fallbackAnswer(message, language, contexts);
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (apiKey) {
      try {
        const res = await fetch("https://openrouter.ai/api/v1/chat/completions", { method: "POST", headers: { "content-type": "application/json", authorization: "Bearer " + apiKey, "HTTP-Referer": "http://localhost:3000", "X-Title": "KAPRUKA AI AGENT" }, body: JSON.stringify({ model: "meta-llama/llama-3.1-70b-instruct", stream: false, messages: [{ role: "system", content: systemPrompt + "\nContext:\n" + contexts.map((c) => "- " + c.title + ": " + c.text).join("\n") + "\nProducts:\n" + products.map((p) => "- " + p.name + " Rs " + p.price + ": " + p.reason).join("\n") }, { role: "user", content: message }] }) });
        const data = await res.json();
        text = data.choices?.[0]?.message?.content ?? text;
      } catch {}
    }
    for (const token of text.split(/(\s+)/)) { controller.enqueue(encoder.encode("data: " + JSON.stringify({ token }) + "\n\n")); await new Promise((r) => setTimeout(r, 18)); }
    controller.enqueue(encoder.encode("data: " + JSON.stringify({ done: true, products }) + "\n\n"));
    controller.close();
  }});
  return new Response(stream, { headers: { "content-type": "text/event-stream; charset=utf-8", "cache-control": "no-cache" } });
}
