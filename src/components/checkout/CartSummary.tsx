import Image from "next/image";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/format";
import styles from "./CartSummary.module.scss";

export default function CartSummary({
  onNext,
}: {
  onNext: () => void;
}) {
  const { items, removeItem } = useCartStore();
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return <p>Košík je prázdný.</p>;
  }

  return (
    <section className={styles.cartSummary}>
      <h2 className={styles.heading}>Nákupní košík</h2>
      <table>
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Množství</th>
            <th>Cena za kus</th>
            <th>Celkem</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            // Jedinečný kľúč kombinuje id a veľkosť
            const itemKey = item.size
              ? `${item.id}-${item.size}`
              : item.id;

            return (
              <tr key={itemKey}>
                <td>
                  <Image
                    src={item.thumbnail}
                    alt={item.name}
                    className={styles.productImg}
                    width={60}
                    height={60}
                    style={{ objectFit: "cover" }}
                  />{" "}
                  {item.name}
                  {item.size && (
                    <span className={styles.itemSize}>
                      {" "}
                      • {item.size}
                    </span>
                  )}
                </td>
                <td>{item.quantity} ks</td>
                <td>{formatPrice(item.price)}</td>
                <td>{formatPrice(item.price * item.quantity)}</td>
                <td>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeItem(item.id)}
                    aria-label="Odstranit polžku"
                  >
                    x
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.totalPrice}>
        <span>Celková cena:</span>
        <strong> {formatPrice(total)}</strong>
      </div>

      <div className={styles.info}>
        <h3>DŮLEŽITÉ INFORMACE</h3>
        <ol>
          <li>
            Zboží{" "}
            <span className={styles.importantItem}>
              lze uhradit pouze bezhotovostně převodem na účet
            </span>{" "}
            prodávajícího č.{" "}
            <span className={styles.highlighted}>
              3018883028/3030
            </span>{" "}
            , vedený u společnosti Air Bank.
          </li>
          <li>
            Kupní cena je splatná do{" "}
            <span className={styles.highlighted}>7 dnů</span> od
            potvrzení objednávky. Pokud nebude částka uhrazena v této
            lhůtě,{" "}
            <span className={styles.highlighted}>
              bude objednávka zrušena.
            </span>
          </li>
          <li>
            Dodací lhůta se liší podle typu zboží:
            <ul>
              <li>
                <span className={styles.highlighted}>
                  • Standardní produkty
                </span>{" "}
                – doručení zpravidla do{" "}
                <span className={styles.highlighted}>
                  5–7 pracovních dní
                </span>{" "}
                od připsání platby.
              </li>
              <li>
                <span className={styles.highlighted}>
                  • Ručně vyráběné knihy
                </span>{" "}
                – vzhledem k individuální výrobě může doručení trvat
                <span className={styles.highlighted}>
                  až 1 měsíc.
                </span>
              </li>
              <li>
                <span className={styles.highlighted}>
                  • Ručně malované textilie na zakázku
                </span>{" "}
                – dodací lhůta se liší podle náročnosti motivu,
                obvykle{" "}
                <span className={styles.highlighted}>
                  14 dní až několik týdnů.
                </span>
              </li>
              <li>
                <span className={styles.highlighted}>
                  • Etikety na zakázku
                </span>{" "}
                – dodací lhůta se liší podle toho zda se jedná i o
                zpracování návrhu (zaleží na požadavku do finálního
                odsouhlasení), výroba a dodání od odsouhlasení návrhu
                a cenové nabídky obvykle 14 dní až několik týdnů
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <button className={styles.onNext} onClick={onNext}>
        Pokračovat v objednávce
      </button>
    </section>
  );
}
