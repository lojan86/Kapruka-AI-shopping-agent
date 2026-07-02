import { demoProducts, findProducts } from "@/lib/agent/products";
import { CartItem, CheckoutDetails } from "@/lib/types";
const MCP_ENDPOINT = "https://mcp.kapruka.com/mcp";
export async function searchProducts(query: string, filters?: Record<string, unknown>) { void filters; return findProducts(query); }
export async function getProductDetails(id: string) { return demoProducts.find((product) => product.id === id) ?? null; }
export async function getDeliveryQuote(address: string) { const colombo = /colombo|dehiwala|mount|kotte|rajagiriya|nugegoda/i.test(address); return { fee: colombo ? 450 : 950, eta: colombo ? "Same-day or next-day" : "2-4 days after confirmation", endpoint: MCP_ENDPOINT }; }
export async function createCart(items: CartItem[]) { return { id: "cart_" + Date.now(), items, total: items.reduce((sum, item) => sum + item.price * item.quantity, 0) }; }
export async function createCheckout(cart: Awaited<ReturnType<typeof createCart>>, details?: CheckoutDetails) { const params = new URLSearchParams({ cart: cart.id, total: String(cart.total), name: details?.name ?? "guest" }); return { url: "https://www.kapruka.com/checkout?" + params.toString(), status: "ready" as const }; }
