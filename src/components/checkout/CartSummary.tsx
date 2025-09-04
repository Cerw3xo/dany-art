import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/format";

export default function CartSummary({
  onNext,
}: {
  onNext: () => void;
}) {
  const { items } = useCartStore();
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return <p>Košík je prazdny.</p>;
  }

  return (
    <div>
      <h2>Rekapitulace košíku</h2>
      <table>
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Množství</th>
            <th>Cena za kus</th>
            <th>Celkem</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{formatPrice(item.price)}</td>
              <td>{formatPrice(item.price * item.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <strong>Celková cena: {formatPrice(total)}</strong>
      </div>

      <div>
        <h3>DŮLEŽITÉ INFORMACE</h3>
        <ol>
          <li>
            Zboží lze uhradit pouze bezhotovostně převodem na účet
            prodávajícího č. 3018883028/3030, vedený u společnosti Air
            Bank.
          </li>
          <li>
            Kupní cena je splatná do 7 dnů od potvrzení objednávky.
            Pokud nebude částka uhrazena v této lhůtě, bude objednávka
            zrušena.
          </li>
          <li>
            Dodací lhůta se liší podle typu zboží:
            <ul>
              <li>
                • Standardní produkty – doručení zpravidla do 5–7
                pracovních dní od připsání platby.
              </li>
              <li>
                • Ručně vyráběné knihy – vzhledem k individuální
                výrobě může doručení trvat až 1 měsíc.
              </li>
              <li>
                • Ručně malované textilie na zakázku – dodací lhůta se
                liší podle náročnosti motivu, obvykle 14 dní až
                několik týdnů.
              </li>
              <li>
                • Etikety na zakázku – dodací lhůta se liší podle toho
                zda se jedná i o zpracování návrhu (zaleží na
                požadavku do finálního odsouhlasení), výroba a dodání
                od odsouhlasení návrhu a cenové nabídky obvykle 14 dní
                až několik týdnů
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <button onClick={onNext}>Pokračovat v objednávce</button>
    </div>
  );
}
