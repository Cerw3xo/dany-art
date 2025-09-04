import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/format";

export default function CheckoutForm({
  onBack,
  onSubmit,
}: {
  onBack: () => void;
  onSubmit: () => void;
}) {
  const { items, total, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    note: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address) {
      setError("Vyplň všechny Povinné polia.");
      return;
    }

    const payload = {
      ...form,
      cart: items,
      total,
    };

    try {
      const res = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        clearCart();
        onSubmit();
      } else {
        setError("Nepodarilo sa odoslať objednávku. Skús neskôr.");
      }
    } catch (err) {
      setError("Chyba pri odosielaní objednávky.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dodacie údaje</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <label>
        Meno a priezvisko*
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        E-mail*
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Telefón
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        Adresa (ulica, mesto, PSČ)*
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Poznámka
        <textarea
          name="note"
          value={form.note}
          onChange={handleChange}
        />
      </label>

      <div>
        <h3>Rekapitulácia</h3>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} × {item.quantity} –{" "}
              {formatPrice(item.price * item.quantity)}
            </li>
          ))}
        </ul>
        <strong>Celkom: {formatPrice(total)}</strong>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button type="button" onClick={onBack}>
          Späť
        </button>
        <button type="submit" style={{ marginLeft: "1rem" }}>
          Odoslať objednávku
        </button>
      </div>
    </form>
  );
}
