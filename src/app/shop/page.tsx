"use client";

import type { Product } from "@/data/products";
import { useState, useEffect } from "react";
import { categories } from "@/data/categories";
import styles from "./Shop.module.scss";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

  function getThumbnailUrl(thumbnail: any) {
    if (!thumbnail) return "/placeholder.jpg";
    if (
      thumbnail.formats &&
      thumbnail.formats.medium &&
      thumbnail.formats.medium.url
    ) {
      return API_URL + thumbnail.formats.medium.url;
    }
    if (thumbnail.url) {
      return API_URL + thumbnail.url;
    }
    return "/placeholder.jpg";
  }

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`${API_URL}/api/produkts?populate=thumbnail`)
      .then((res) => {
        if (!res.ok) throw new Error("Chyba pri načítaní produktov");
        return res.json();
      })
      .then((json) => {
        setProducts(
          json.data.map((item: any) => ({
            id: item.id,
            slug: item.slug || item.attributes?.slug,
            name: item.name || item.attributes?.name,
            price: item.price || item.attributes?.price,
            currency: item.currency || item.attributes?.currency,
            category: item.category || item.attributes?.category,
            subcategory:
              item.subcategory || item.attributes?.subcategory,
            images: item.images || item.attributes?.images,
            thumbnail: getThumbnailUrl(
              item.thumbnail || item.attributes?.thumbnail
            ),
            summary: item.summary || item.attributes?.summary,
            available: item.available || item.attributes?.available,
            featured: item.featured || item.attributes?.featured,
          }))
        );
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Nepodarilo sa načítat produkty");
        setLoading(false);
      });
  }, []);

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
        <div>Načítam produkty</div>
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
                {filteredProducts.map((p) => (
                  <article key={p.slug} className={styles.card}>
                    <Link
                      className={styles.link}
                      href={`/product/${p.slug}`}
                    >
                      <img
                        className={styles.thumb}
                        src={p.thumbnail || "/placeholder.jpg"}
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
