export type Language = "en" | "si";
export type Product = { id: string; name: string; category: string; price: number; image: string; delivery: string; reason: string; tags: string[]; url: string };
export type CartItem = Product & { quantity: number };
export type Message = { id: string; role: "user" | "assistant"; content: string; products?: Product[] };
export type CheckoutDetails = { name: string; phone: string; address: string };
