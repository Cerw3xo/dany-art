import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
   id: string;
   name: string;
   price: number;
   quantity: number;
   images?: string[];
   thumbnail: string;
   size?: string;
}

type CartState = {
   items: CartItem[];
   addItem: (item: CartItem) => void;
   removeItem: (id: string) => void;
   clearCart: () => void;
   changeQuantity: (id: string, quantity: number) => void;
}

export const useCartStore = create<CartState>()(
   persist(
      (set) => ({
         items: [],
         addItem: (item) =>
            set((state) => {
               // Pre produkty s veľkosťou porovnávame aj veľkosť
               const existing = state.items.find((i) =>
                  i.id === item.id && i.size === item.size
               );
               if (existing) {
                  return {
                     items: state.items.map((i) =>
                        i.id === item.id && i.size === item.size ?
                           { ...i, quantity: i.quantity + item.quantity } : i
                     )
                  }
               }
               return { items: [...state.items, item] }
            }),
         removeItem: (id) =>
            set((state) => ({
               items: state.items.filter((i) => i.id !== id),
            })),
         clearCart: () => set({ items: [] }),
         changeQuantity: (id, quantity) =>
            set((state) => ({
               items: state.items.map((i) =>
                  i.id === id ? { ...i, quantity } : i
               )
            }))
      }),
      {
         name: "cart-storage",
         partialize: (state) => ({ items: state.items }),
      }
   )
)
