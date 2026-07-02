"use client";
import { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";
export function ProductCarousel({ products }: { products: Product[] }) {
  if (!products.length) return null;
  return <div className="mt-3 flex gap-3 overflow-x-auto pb-3 pr-2 scrollbar-thin">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>;
}
