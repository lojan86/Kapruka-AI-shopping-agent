"use client";
import { Message } from "@/lib/types";
import { ProductCarousel } from "./ProductCarousel";
export function ChatMessage({ message }: { message: Message }) {
  const user = message.role === "user";
  return <div className={user ? "ml-auto max-w-[82%]" : "mr-auto max-w-[92%]"}><div className={user ? "rounded-[8px] bg-kapruka-yellow px-4 py-3 font-medium text-kapruka-ink" : "rounded-[8px] bg-white/10 px-4 py-3 text-white"}><p className="whitespace-pre-wrap text-sm leading-relaxed md:text-base">{message.content}</p></div>{message.products ? <ProductCarousel products={message.products} /> : null}</div>;
}
