import { Product } from "@/lib/types";

export const demoProducts: Product[] = [
  { id: "cake-velvet", name: "Chocolate Bliss Gateau Cake", category: "Cake Shop", price: 4850, image: "CAKE", delivery: "Colombo same-day", reason: "A polished birthday or romantic pick that feels premium without becoming too formal.", tags: ["birthday", "girlfriend", "cake", "romantic", "under 5000"], url: "https://www.kapruka.com/buyonline/chocolate-bliss-gateau-cake/kid/cake00ka001514" },
  { id: "rose-box", name: "Purple Petals Birthday Surprise Combo", category: "Flower Shop", price: 6900, image: "ROSE", delivery: "Colombo and suburbs", reason: "Strong emotional signal: flowers for the moment, chocolates for sharing.", tags: ["romantic", "anniversary", "girlfriend", "surprise"], url: "https://www.kapruka.com/buyonline/purple-petals-birthday-surpris/kid/combockfl64" },
  { id: "grocery-family", name: "Family Grocery Essentials Bundle", category: "Grocery Items", price: 7450, image: "BASKET", delivery: "Islandwide by quote", reason: "Practical for parents, families, and urgent daily needs when usefulness matters more than ceremony.", tags: ["grocery", "family", "parents", "daily"], url: "https://www.kapruka.com/shops/deliveryGrocery.jsp" },
  { id: "newyear-hamper", name: "Lassana Wasilissa", category: "Made in Sri Lanka", price: 5600, image: "GIFT", delivery: "Seasonal delivery", reason: "Culturally aligned for Sinhala and Tamil New Year visits, offices, and relatives.", tags: ["new year", "avurudu", "family", "culture"], url: "https://www.kapruka.com/buyonline/lassana-wasilissa/kid/food00a859" },
  { id: "baby-care", name: "Garfield Plush Soft Toy - 16 Inches", category: "Mother & Baby", price: 8250, image: "TOY", delivery: "Next-day delivery", reason: "Warm and useful for new parents, with less guesswork than clothing sizes.", tags: ["baby", "newborn", "mother", "family"], url: "https://www.kapruka.com/buyonline/garfield-plush-soft-toy-16-inch/kid/toy00a1210" },
  { id: "wireless-earbuds", name: "5-in-1 Wireless Charging Color Speaker", category: "Electronics", price: 11900, image: "TECH", delivery: "Colombo 1-2 days", reason: "A safe tech gift for students and commuters who use phones daily.", tags: ["electronics", "student", "premium", "personal"], url: "https://www.kapruka.com/buyonline/5-in-1-wireless-charging-color/kid/elec00a6032" },
  { id: "perfume-set", name: "DKNY Be Tempted Perfume For Women 30ml", category: "Perfumes / Fragrances", price: 9900, image: "SCENT", delivery: "Colombo same-day", reason: "Feels personal and elegant, best when the relationship is close.", tags: ["perfume", "romantic", "premium", "birthday"], url: "https://www.kapruka.com/buyonline/dkny-be-tempted-donna-karan-pe/kid/perfume00727" },
  { id: "voucher", name: "Kapruka Gift Voucher", category: "Gift Vouchers / Tickets", price: 5000, image: "VOUCHER", delivery: "Instant digital", reason: "Best when you know the occasion but not the exact preference.", tags: ["voucher", "safe", "urgent", "office"], url: "https://www.kapruka.com/shops/sendGiftVouchers.jsp" }
];

export function findProducts(query: string) {
  const q = query.toLowerCase();
  const budget = q.match(/(?:under|below|less than|rs\.?|lkr)\s*(\d+)/)?.[1];
  const max = budget ? Number(budget) : Infinity;
  const scored = demoProducts.map((product) => ({ product, score: product.tags.reduce((s, tag) => s + (q.includes(tag) ? 3 : 0), 0) + (q.includes(product.category.toLowerCase().split(" ")[0]) ? 2 : 0) }));
  return scored.filter(({ product, score }) => product.price <= max && (score > 0 || q.length < 12)).sort((a, b) => b.score - a.score).slice(0, 5).map(({ product }) => product);
}
