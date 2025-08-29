"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { useCartStore, type CartItem } from "@/store/cart";

export function useCart() {
    const items = useCartStore((s) => s.items)
    const addItem = useCartStore((s) => s.addItem)
    const removeItem = useCartStore((s) => s.removeItem)
    const changeQuantity = useCartStore((s) => s.changeQuantity)
    const clearCart = useCartStore((s) => s.clearCart)

    const [hasHydrated, setHasHydrated] = useState(false);

    useEffect(() => setHasHydrated(true), [])

    const count = useMemo(
        () => items.reduce((sum, i) => sum + i.quantity, 0),
        [items]
    );

    const total = useMemo(
        () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
        [items]
    )

    const add = useCallback(
        (item: Omit<CartItem, "quantity">, quantity = 1) => {
            addItem({ ...item, quantity });
        },
        [addItem]
    );

    return {
        items,
        add,
        removeItem,
        changeQuantity,
        clearCart,
        count,
        total,
        hasHydrated,
    }
}