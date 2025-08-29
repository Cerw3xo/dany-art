"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@/data/products";

type Props = {
  product: Product;
  label?: string;
  className?: string;
};

export default function AddToCartButton({
  product,
  label = "Přidat do košíku",
  className,
}: Props) {
  const { add } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setIsAdding(true);
    add(product, 1);

    setShowToast(true), setTimeout(() => setShowToast(false), 3000);

    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={isAdding}
        className={className}
      >
        {isAdding ? "Přidávám.." : label}
      </button>

      <AnimatePresence>
        {showToast && (
          <motion.div
            style={{
              bottom: "10%",
              left: "50%",
              color: "red",
              fontSize: "1rem",
              zIndex: 10,
            }}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 3 }}
          >
            Přidán do košíku
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
