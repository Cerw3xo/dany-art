"use client";

import { useCartStore } from "@/store/cart";
import styles from "./CartDrawer.module.scss";
import { formatPrice } from "@/lib/format";
import { useRouter } from "next/navigation";
import { image } from "framer-motion/client";

export default function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { items, removeItem, changeQuantity, clearCart } =
    useCartStore();

  const router = useRouter();
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}

      <div
        className={`${styles.drawer} ${isOpen ? styles.open : ""}`}
      >
        <div className={styles.header}>
          <h3>Košík</h3>
          <button onClick={() => clearCart()}>Vyprázdniť</button>
          <button onClick={onClose} className={styles.closeBtn}>
            ✕
          </button>
        </div>

        <div className={styles.content}>
          {items.length === 0 ? (
            <p>Košík je prázdny</p>
          ) : (
            <>
              {items.map((item) => {
                const imgSrc =
                  item.thumbnail ||
                  (item.images && item.images[0]) ||
                  "paceholder.png";

                return (
                  <div key={item.id} className={styles.cartItem}>
                    <img src={imgSrc} alt={item.name} />
                    <div className={styles.itemInfo}>
                      <h4>{item.name}</h4>
                      <p>{formatPrice(item.price)} </p>
                      <div className={styles.quantity}>
                        <button
                          onClick={() =>
                            changeQuantity(
                              item.id,
                              Math.max(0, item.quantity - 1)
                            )
                          }
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            changeQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className={styles.removeBtn}
                    >
                      ✕
                    </button>
                  </div>
                );
              })}

              <div className={styles.total}>
                <strong>
                  Celková cena: {formatPrice(totalPrice)}
                </strong>
              </div>

              <button
                className={styles.checkoutBtn}
                onClick={() => router.push("/checkout")}
              >
                Pokračovať v objednávke
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
