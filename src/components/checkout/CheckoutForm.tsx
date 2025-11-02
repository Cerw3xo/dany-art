import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/format";
import styles from "./CheckoutForm.module.scss";

type CheckoutFormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  note: string;
  deliveryMethod: string;
  country: string;
};

type OrderItem = { name: string; quantity: number; price: number };

export default function CheckoutForm({
  onBack,
  onSubmit,
}: {
  onBack: () => void;
  onSubmit: () => void;
}) {
  const { items, total, clearCart } = useCart();
  const [form, setForm] = useState<CheckoutFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    note: "",
    deliveryMethod: "Zásilkovna",
    country: "Česká republika",
  });

  const [error, setError] = useState("");
  const deliveryCost = 89;
  const totalWithDelivery = total + deliveryCost;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      setError("Košík je prázdný");
      return;
    }

    if (
      !form.name ||
      !form.email ||
      !form.address ||
      !form.city ||
      !form.zip
    ) {
      setError("Vyplňte prosím všechna povinná pole");
      return;
    }

    const orderNumber = Date.now().toString().slice(-6);

    const orderData = {
      orderNumber,
      customer: {
        name: form.name,
        email: form.email,
        phone: form.phone,
      },
      items: items.map(
        (i): OrderItem => ({
          name: i.name,
          quantity: i.quantity,
          price: i.price,
        })
      ),
      delivery: {
        method: form.deliveryMethod,
        address: form.address,
        city: form.city,
        zip: form.zip,
        country: form.country,
      },
      note: form.note,
      total: totalWithDelivery,
    };

    try {
      const res = await fetch("/api/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) throw new Error("Chyba při odesílání");

      clearCart();
      onSubmit();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError("Chyba při odesílání objednávky: " + err.message);
        console.error(err);
      } else {
        setError("Chyba při odesílání objednávky (neznámy dôvod)");
      }
    }
  };

  return (
    <div className={styles.checkoutFormContainer}>
      {error && <div className={styles.errorMessage}>{error}</div>}

      <div className={styles.formContent}>
        <div className={styles.formSection}>
          <form
            className={styles.checkoutForm}
            onSubmit={handleSubmit}
          >
            <h2 className={styles.sectionTitle}>Osobní údaje</h2>

            <div className={styles.formFields}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="name">
                  Jméno a příjmení:
                </label>
                <input
                  id="name"
                  className={styles.formInput}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="email">
                  Email:
                </label>
                <input
                  id="email"
                  className={styles.formInput}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="phone">
                  Mobil:
                </label>
                <input
                  id="phone"
                  className={styles.formInput}
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <h2 className={styles.sectionTitle}>
              Dodací a fakturační adresa
            </h2>

            <div className={styles.formFields}>
              <div className={styles.formGroup}>
                <label
                  className={styles.formLabel}
                  htmlFor="deliveryMethod"
                >
                  Možnost dopravy/osobního předání:
                </label>
                <select
                  id="deliveryMethod"
                  className={styles.formInput}
                  name="deliveryMethod"
                  value={form.deliveryMethod || ""}
                  onChange={handleChange}
                >
                  <option value="Zásilkovna">Zásilkovna</option>
                  <option value="Česká pošta">Česká pošta</option>
                  <option value="Zlín">Osobní předání Zlín</option>
                  <option value="Rakvice">
                    Osobní předání Rakvice - okolí
                  </option>
                  <option value="Tvořihráz">
                    Osobní předání Tvořihráz - okolí
                  </option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="address">
                  Ulice a číslo popisné:
                </label>
                <input
                  id="address"
                  className={styles.formInput}
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
                {form.deliveryMethod === "Zásilkovna" && (
                  <span className={styles.formHint}>
                    ( po domluvě)
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="city">
                  Město:
                </label>
                <input
                  id="city"
                  className={styles.formInput}
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="zip">
                  PSČ:
                </label>
                <input
                  id="zip"
                  className={styles.formInput}
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="country">
                  Země:
                </label>
                <input
                  id="country"
                  className={styles.formInput}
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Poznámka */}
            <div className={styles.noteSection}>
              <label className={styles.formLabel} htmlFor="note">
                Zde můžete přidat svou poznámku:
              </label>
              <textarea
                id="note"
                className={styles.formTextarea}
                name="note"
                value={form.note}
                onChange={handleChange}
                rows={4}
              />
            </div>
          </form>
        </div>

        <div className={styles.orderSummary}>
          <div className={styles.summaryItems}>
            <h3 className={styles.summaryTitle}>Souhrn objednávky</h3>

            {items.map((item) => (
              <div key={item.id} className={styles.summaryItem}>
                <div className={styles.item}>
                  {item.thumbnail && (
                    <Image
                      className={styles.itemImage}
                      src={item.thumbnail}
                      alt={item.name}
                      width={60}
                      height={60}
                      style={{ objectFit: "cover" }}
                    />
                  )}
                  <p className={styles.itemName}>{item.name}</p>
                </div>

                <div className={styles.itemQuantity}>
                  <p> {item.quantity}ks</p>
                  <p> {formatPrice(item.price * item.quantity)}</p>
                </div>
              </div>
            ))}

            <div className={styles.deliveryItem}>
              <div className={styles.deliveryInfo}>
                <span>Způsob dopravy:</span>
                <span>{form.deliveryMethod}</span>
              </div>
              <div className={styles.deliveryPrice}>
                {formatPrice(deliveryCost)}
              </div>
            </div>
          </div>

          <div className={styles.summaryTotal}>
            <span>Celková cena:</span>
            <span className={styles.totalAmount}>
              {formatPrice(totalWithDelivery)}
            </span>
          </div>

          <div className={styles.termsAgreement}>
            <p>
              Po odeslání objednávky automaticky souhlasíte s
              obchodními podmínkami.
              <a href="#" className={styles.termsLink}>
                Obchodní podmínky
              </a>
            </p>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className={styles.submitButton}
          >
            Dokončit objednávku zavazující k platbě
          </button>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.backButton}
          onClick={onBack}
        >
          Zpět do košíku
        </button>
      </div>
    </div>
  );
}
