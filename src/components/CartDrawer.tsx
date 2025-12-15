"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cart";
import styles from "./CartDrawer.module.scss";
import { formatPrice } from "@/lib/format";
import { useRouter } from "next/navigation";
import { LuX } from "react-icons/lu";

export default function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { items, removeItem, changeQuantity } = useCartStore();

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

          <LuX onClick={onClose} className={styles.closeBtn} />
        </div>

        <div className={styles.content}>
          {items.length === 0 ? (
            <p>Košík je prázdný</p>
          ) : (
            <>
              {items.map((item) => {
                const imgSrc =
                  item.thumbnail ||
                  (item.images && item.images[0]) ||
                  "placeholder.png";

                // Jedinečný kľúč kombinuje id a veľkosť
                const itemKey = item.size
                  ? `${item.id}-${item.size}`
                  : item.id;

                return (
                  <div key={itemKey} className={styles.cartItem}>
                    <Image
                      src={imgSrc}
                      alt={item.name}
                      width={80}
                      height={80}
                      style={{ objectFit: "cover" }}
                    />
                    <div className={styles.itemInfo}>
                      <h4>
                        {item.name}
                        {item.size && (
                          <span className={styles.itemSize}>
                            {" "}
                            • {item.size}
                          </span>
                        )}
                      </h4>
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
                Pokračovat v objednávce
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
