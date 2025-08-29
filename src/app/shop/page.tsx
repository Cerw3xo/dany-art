import Link from "next/link";
import { products, type Product } from "@/data/products";
import {
  categories,
  isCategory,
  categoryLabel,
  type Category,
} from "@/data/categories";
import styles from "./Shop.module.scss";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ShopPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const { category } = (await searchParams) ?? {};
  const selected = category ?? "all";
  const list: Product[] =
    selected === "all" || !isCategory(selected as string)
      ? products
      : products.filter((p) => p.category === (selected as Category));

  return (
    <section className={styles.shop}>
      <header className={styles.header}>
        <h1 className={styles.title}>Vítej na mém e‑shopu</h1>
        <p className={styles.subtitle}>
          vyber si svůj originální kousek
        </p>
      </header>

      <nav className={styles.chips} aria-label="Kategorie">
        <Link href="/shop">Vše</Link>
        {categories.map((c) => (
          <Link key={c.slug} href={`/shop?category=${c.slug}`}>
            {c.label}
          </Link>
        ))}
      </nav>

      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <h3>Kategorie</h3>
          <ul>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/shop?category=${c.slug}`}>
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <div>
          <h2 className={styles.sectionTitle}>
            {selected === "all" || !isCategory(selected as string)
              ? "Všechny produkty"
              : categoryLabel(selected as Category)}
          </h2>

          <div className={styles.grid}>
            {list.map((p) => (
              <article key={p.slug} className={styles.card}>
                <Link href={`/product/${p.slug}`}>
                  <img
                    className={styles.thumb}
                    src={p.thumbnail}
                    alt={p.name}
                  />
                  <div className={styles.name}>{p.name}</div>
                  <div className={styles.price}>{p.price} Kč</div>
                </Link>
                <AddToCartButton product={p} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
