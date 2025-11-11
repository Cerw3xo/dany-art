"use client";

import Image from "next/image";
import type { Product } from "@/data/products";
import { useState, useEffect } from "react";
import { categories } from "@/data/categories";
import styles from "./Shop.module.scss";
import Link from "next/link";
import { fetchProducts, convertStrapiProduct } from "@/lib/strapi";

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    string | null
  >(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<
    string | null
  >(null);
  const [expandedCategories, setExpadedCategories] = useState<
    string[]
  >([]);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchProducts()
      .then((strapiProducts) => {
        const converted = strapiProducts
          .map(convertStrapiProduct)
          .filter(Boolean) as Product[];

        setProducts(converted);
        converted.forEach((p, i) => {});
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Chyba pri fetchovaní:", err);

        setError(err.message || "Nepodařilo se načítat produkty");
        setLoading(false);
      });
  }, []);

  const toggleCategory = (slug: string) => {
    setExpadedCategories((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug]
    );
  };

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
      {error ? (
        <div
          style={{
            color: "red",
            textAlign: "center",
            margin: "2rem",
          }}
        >
          {error}
        </div>
      ) : loading ? (
        <div>Načítám produkty</div>
      ) : (
        <>
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
                <h3>KATEGORIE</h3>
                <ul>
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <div
                        className={styles.cat}
                        onClick={() => {
                          toggleCategory(cat.slug);
                          setSelectedCategory(cat.slug);
                          setSelectedSubcategory(null);
                        }}
                      >
                        {cat.label}
                      </div>
                      {cat.subcategories &&
                        expandedCategories.includes(cat.slug) && (
                          <ul>
                            {cat.subcategories.map((sub) => (
                              <li
                                className={styles.sub}
                                key={sub.slug}
                                onClick={() => {
                                  setSelectedSubcategory(sub.slug);
                                  setSelectedCategory(cat.slug);
                                }}
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
                {filteredProducts.map((p) => (
                  <article key={p.slug} className={styles.card}>
                    <Link
                      className={styles.link}
                      href={`/product/${p.slug}`}
                    >
                      <Image
                        className={styles.thumb}
                        src={p.thumbnail || "/placeholder.jpg"}
                        alt={p.name}
                        width={300}
                        height={300}
                        style={{ objectFit: "cover" }}
                      />
                      <div className={styles.name}>{p.name}</div>
                      <div className={styles.price}>{p.price} Kč</div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
