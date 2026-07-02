export function localEmbedding(text: string) {
  const vector = new Array(64).fill(0);
  for (const word of text.toLowerCase().split(/\W+/).filter(Boolean)) {
    let h = 0;
    for (const ch of word) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    vector[h % vector.length] += 1;
  }
  const mag = Math.hypot(...vector) || 1;
  return vector.map((v) => v / mag);
}
export function cosineSimilarity(a: number[], b: number[]) { return a.reduce((sum, v, i) => sum + v * (b[i] ?? 0), 0); }
