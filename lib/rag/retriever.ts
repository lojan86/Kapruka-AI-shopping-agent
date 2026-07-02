import knowledge from "./knowledge_base.json";
import { cosineSimilarity, localEmbedding } from "./embeddings";
export type KnowledgeItem = { id: string; title: string; text: string };
const indexed = (knowledge as KnowledgeItem[]).map((item) => ({ item, embedding: localEmbedding(item.title + " " + item.text) }));
export function retrieveContext(query: string, topK = 4) {
  const q = localEmbedding(query);
  return indexed.map((row) => ({ ...row.item, score: cosineSimilarity(q, row.embedding) })).sort((a, b) => b.score - a.score).slice(0, topK);
}
