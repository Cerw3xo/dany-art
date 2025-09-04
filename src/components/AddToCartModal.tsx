"use client";

import { formatPrice } from "@/lib/format";
import { Product } from "@/data/products";

type AddToCartModalProps = {
  product: Product;
  quantity: number;
  onClose: () => void;
  onGoToCart: () => void;
};

export default function AddToCartModal({
  product,
  quantity,
  onClose,
  onGoToCart,
}: AddToCartModalProps) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.3)",
          zIndex: 1000,
        }}
        onClick={onClose}
      />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          padding: "2rem",
          borderRadius: "1rem",
          zIndex: 1001,
          minWidth: "320px",
          textAlign: "center",
        }}
      >
        <h2>Zboží bylo přidáno do košíku</h2>
        <img
          src={product.thumbnail}
          alt={product.name}
          style={{
            width: 80,
            height: 80,
            objectFit: "cover",
            borderRadius: "0.5rem",
          }}
        />
        <div style={{ margin: "1rem 0" }}>
          <strong>{product.name}</strong>
          <div>
            {quantity} × {formatPrice(product.price)}
          </div>
          <div>
            <strong>
              Celkem: {formatPrice(product.price * quantity)}
            </strong>
          </div>
        </div>
        <button onClick={onGoToCart} style={{ marginRight: "1rem" }}>
          Pokračovat do košíku
        </button>
        <button onClick={onClose}>Pokračovat v nákupu</button>
      </div>
    </>
  );
}
