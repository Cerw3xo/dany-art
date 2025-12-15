"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import type { Product } from "@/data/products";
import AddToCartModal from "./AddToCartModal";

type Props = {
  product: Product;
  label?: string;
  className?: string;
  selectedSize?: string | null;
  requiresSize?: boolean;
  onSizeError?: () => void;
};

export default function AddToCartButton({
  product,
  label = "Do košíku",
  className,
  selectedSize,
  requiresSize = false,
  onSizeError,
}: Props) {
  const { add } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    // Validácia veľkosti
    if (requiresSize && !selectedSize) {
      if (onSizeError) {
        onSizeError();
      }
      return;
    }

    setIsAdding(true);

    // Pridať produkt s veľkosťou (ak je vybraná)
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      thumbnail: product.thumbnail,
      images: product.images,
      size: selectedSize || undefined,
    };

    add(cartItem, 1);
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
        {isAdding ? "Přidávám..." : label}
      </button>

      {modalOpen && (
        <AddToCartModal
          onClose={handleClose}
          onGoToCart={handleGoToCart}
          quantity={1}
          product={product}
        />
      )}
    </>
  );
}
