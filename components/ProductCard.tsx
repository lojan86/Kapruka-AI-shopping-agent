"use client";
import { motion } from "framer-motion";
import { ExternalLink, ShoppingCart } from "lucide-react";
import { Product } from "@/lib/types";
import { useCartStore } from "@/lib/store/useCartStore";
export function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const openProduct = () => window.open(product.url, "_blank", "noopener,noreferrer");
  return <motion.article role="link" tabIndex={0} onClick={openProduct} onKeyDown={(event) => { if (event.key === "Enter") openProduct(); }} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} className="min-w-[245px] cursor-pointer rounded-[8px] border border-white/15 bg-white p-4 text-kapruka-ink shadow-xl">
    <div className="flex items-start gap-3"><div className="grid h-14 w-14 place-items-center rounded-[8px] bg-kapruka-yellow text-xs font-black text-kapruka-purple">{product.image}</div><div><p className="text-xs font-semibold uppercase text-kapruka-plum">{product.category}</p><h3 className="text-base font-bold leading-tight">{product.name}</h3></div></div>
    <p className="mt-3 text-sm leading-relaxed text-slate-600">{product.reason}</p>
    <div className="mt-3 flex items-center justify-between"><div><p className="text-lg font-black">Rs {product.price.toLocaleString()}</p><p className="text-xs text-slate-500">{product.delivery}</p><p className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-kapruka-plum">View on Kapruka <ExternalLink size={12}/></p></div><button aria-label="Add to cart" onClick={(event) => { event.stopPropagation(); addToCart(product); }} className="grid h-10 w-10 place-items-center rounded-[8px] bg-kapruka-purple text-white hover:bg-kapruka-plum"><ShoppingCart size={18}/></button></div>
  </motion.article>;
}
