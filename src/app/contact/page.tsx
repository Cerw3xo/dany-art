"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./Contact.module.scss";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Chyba při odesílání");
      setIsSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError("Nepodařilo se odeslat formulář: " + err.message);
        console.error(err);
      } else {
        setError("Nepodařilo se odeslat formuář z neznámeho důvodu.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted, router]);

  if (isSubmitted) {
    return (
      <section className={styles.thankYou}>
        <div className={styles.container}>
          <h1 className={styles.thankYouTitle}>
            Děkuji! Tvoje zpráva byla odeslána
          </h1>
          <p className={styles.text}>
            Ozvu se ti co nejdříve.
            <br />
            Těším se na spolupráci!
          </p>
          <p className={styles.redirect}>
            Za 5 sekund budeš přesměrován na hlavní stránku...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Děkuji, že máš zájem o spolupráci!
          </h1>
          <p className={styles.subtitle}>
            Napiš mi, s čím ti mohu pomoci – ozvu se co nejdříve a
            společně vytvoříme něco jedinečného.
          </p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Jméno
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>
              Zpráva
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className={styles.textarea}
            />
          </div>

          <button
            type="submit"
            className={styles.submit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Odesílám..." : "Odeslat"}
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </section>
  );
}
