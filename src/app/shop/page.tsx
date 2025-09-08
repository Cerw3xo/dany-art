"use client";

import { products, type Product } from "@/data/products";
import { categories } from "@/data/categories";
import styles from "./Shop.module.scss";
import { useState } from "react";
import Link from "next/link";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    string | null
  >(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<
    string | null
  >(null);

  const filteredProducts = products.filter((p) => {
    if (selectedCategory && selectedSubcategory) {
      return (
        p.category === selectedCategory &&
        p.subcategory === selectedSubcategory
      );
    }
    if (selectedCategory) {
      return p.category === selectedCategory;
    }
    return true;
  });

  return (
    <section className={styles.shop}>
      <div className={styles.header}>
        <h1 className={styles.title}>Vítej na mém e‑shopu</h1>
        <p className={styles.subtitle}>
          vyber si svůj originální kousek
        </p>
      </div>

      <nav className={styles.chips} aria-label="Kategorie">
        <button
          className={!selectedCategory ? styles.active : ""}
          onClick={() => {
            setSelectedCategory(null);
            setSelectedSubcategory(null);
          }}
        >
          Vše
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            className={
              selectedCategory === cat.slug ? styles.active : ""
            }
            onClick={() => {
              setSelectedCategory(cat.slug);
              setSelectedSubcategory(null);
            }}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>
          {!selectedCategory
            ? "Všechny produkty"
            : categories.find((c) => c.slug === selectedCategory)
                ?.label}
        </h2>

        <div className={styles.categories}>
          <aside className={styles.sidebar}>
            <h3>Kategorie</h3>
            <ul>
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <div
                    className={styles.cat}
                    onClick={() => {
                      setSelectedCategory(cat.slug);
                      setSelectedSubcategory(null);
                    }}
                  >
                    {cat.label}
                  </div>
                  {cat.subcategories &&
                    selectedCategory === cat.slug && (
                      <ul>
                        {cat.subcategories.map((sub) => (
                          <li
                            className={styles.sub}
                            key={sub.slug}
                            onClick={() =>
                              setSelectedSubcategory(sub.slug)
                            }
                          >
                            {sub.label}
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              ))}
            </ul>
          </aside>

          <div className={styles.grid}>
            {filteredProducts.map((p: Product) => (
              <article key={p.slug} className={styles.card}>
                <Link
                  className={styles.link}
                  href={`/product/${p.slug}`}
                >
                  <img className={styles.thumb} src={p.thumbnail} />
                  <div className={styles.name}>{p.name}</div>
                  <div className={styles.price}>{p.price} Kč</div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
