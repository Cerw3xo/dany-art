"use client";

import { formatPrice } from "@/lib/format";
import { Product } from "@/data/products";
import styles from "./AddToCartModal.module.scss";

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
      <div className={styles.layout} onClick={onClose} />
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-added-title"
      >
        <h2 id="cart-added-title">Zboží bylo přidáno do košíku</h2>
        <span onClick={onClose} className={styles.closeX}>
          x
        </span>

        <div className={styles.product}>
          <div className={styles.productName}>
            <img
              src={product.thumbnail}
              alt={product.name}
              className={styles.productImg}
            />
            <strong>{product.name}</strong>
          </div>
          Počet produktů: {quantity}
          <strong>{formatPrice(product.price * quantity)}</strong>
        </div>

        <div className={styles.btnContainer}>
          <button className={styles.onClose} onClick={onClose}>
            <span className={styles.toBack}>◀︎</span> Zpět do obchodu
          </button>
          <button onClick={onGoToCart} className={styles.goToCart}>
            Pokračovat do košíku
          </button>
        </div>
      </div>
    </>
  );
}
