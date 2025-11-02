"use client";

import Image from "next/image";
import type { Product } from "@/data/products";
import { useState, useEffect } from "react";
import { categories } from "@/data/categories";
import styles from "./Shop.module.scss";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type StrapiMediaFormat = {
  url: string;
};

type StrapiMedia = {
  url?: string;
  formats?: {
    medium?: StrapiMediaFormat;
  };
};

type StrapiProductData = {
  id: string;
  slug?: string;
  name?: string;
  price?: number;
  currency?: string;
  category?: string;
  subcategory?: string;
  images?: StrapiMedia[];
  thumbnail?: StrapiMedia;
  summary?: string;
  available?: boolean;
  featured?: boolean;
  attributes?: {
    slug?: string;
    name?: string;
    price?: number;
    currency?: string;
    category?: string;
    subcategory?: string;
    images?: StrapiMedia[];
    thumbnail?: StrapiMedia;
    summary?: string;
    available?: boolean;
    featured?: boolean;
  };
};

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

  function getThumbnailUrl(thumbnail: StrapiMedia | null | undefined): string {
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

  function getImages(images: StrapiMedia[] | null | undefined): string[] {
    if (!images || !Array.isArray(images)) return [];
    return images.map((img) => {
      if (img.formats && img.formats.medium && img.formats.medium.url) {
        return API_URL + img.formats.medium.url;
      }
      if (img.url) {
        return API_URL + img.url;
      }
      return "/placeholder.jpg";
    });
  }

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`${API_URL}/api/produkts?populate=thumbnail`)
      .then((res) => {
        if (!res.ok) throw new Error("Chyba při načítání produktů");
        return res.json();
      })
      .then((json: { data: StrapiProductData[] }) => {
        setProducts(
          json.data
            .map((item) => ({
              id: item.id,
              slug: item.slug || item.attributes?.slug || "",
              name: item.name || item.attributes?.name || "",
              price: item.price || item.attributes?.price || 0,
              currency: (item.currency || item.attributes?.currency || "CZK") as "CZK",
              category: item.category || item.attributes?.category || "",
              subcategory:
                item.subcategory || item.attributes?.subcategory,
              images: getImages(item.images || item.attributes?.images),
              thumbnail: getThumbnailUrl(
                item.thumbnail || item.attributes?.thumbnail
              ),
              summary: item.summary || item.attributes?.summary,
              available: item.available ?? item.attributes?.available ?? false,
              featured: item.featured ?? item.attributes?.featured ?? false,
            }))
            .filter((p) => Boolean(p.slug && p.name)) as Product[]
        );
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Nepodařilo se načítat produkty");
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
