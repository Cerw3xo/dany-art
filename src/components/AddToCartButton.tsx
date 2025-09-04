"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@/data/products";
import AddToCartModal from "./AddToCartModal";
import styles from "./AddToCartModal.module.scss";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  product: Product;
  label?: string;
  className?: string;
};

export default function AddToCartButton({
  product,
  label = "Do košíku",
  className,
}: Props) {
  const { add } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsAdding(true);
    add(product, 1);
    setModalOpen(true);

    setTimeout(() => setIsAdding(false), 500);
  };

  const handleGoToCart = () => {
    router.push("/checkout");
    setModalOpen(false);
  };

  const handleClose = () => setModalOpen(false);

  return (
    <>
      <button
        onClick={handleClick}
        disabled={isAdding}
        className={className}
      >
        {isAdding ? "Přidávám.." : label}
      </button>

      {modalOpen && (
        <AddToCartModal
          onClose={handleClose}
          onGoToCart={handleGoToCart}
          quantity={1}
          product={product}
          aria-model={true}
        />
      )}
    </>
  );
}
