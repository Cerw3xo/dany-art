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
   removeItem: (id: string, size?: string) => void;
   clearCart: () => void;
   changeQuantity: (id: string, quantity: number, size?: string) => void;
}

export const useCartStore = create<CartState>()(
   persist(
      (set) => ({
         items: [],
         addItem: (item) =>
            set((state) => {
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
         removeItem: (id, size) =>
            set((state) => ({
               items: state.items.filter((i) => {
                  if (i.id !== id) return true;
                  if (typeof size === "undefined") return false;
                  return i.size !== size;
               }),
            })),
         clearCart: () => set({ items: [] }),
         changeQuantity: (id, quantity, size) =>
            set((state) => ({
               items: state.items.map((i) =>
                  i.id === id &&
                     (typeof size === "undefined" || i.size === size)
                     ? { ...i, quantity }
                     : i
               )
            }))
      }),
      {
         name: "cart-storage",
         partialize: (state) => ({ items: state.items }),
      }
   )
)
