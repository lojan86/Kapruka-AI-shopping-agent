"use client";
import { create } from "zustand";
import { CartItem, Language, Product } from "@/lib/types";
type State = { language: Language; cart: CartItem[]; setLanguage: (language: Language) => void; addToCart: (product: Product) => void; removeFromCart: (id: string) => void; clearCart: () => void };
export const useCartStore = create<State>((set) => ({ language: "en", cart: [], setLanguage: (language) => set({ language }), addToCart: (product) => set((state) => { const existing = state.cart.find((item) => item.id === product.id); if (existing) return { cart: state.cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) }; return { cart: [...state.cart, { ...product, quantity: 1 }] }; }), removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })), clearCart: () => set({ cart: [] }) }));
