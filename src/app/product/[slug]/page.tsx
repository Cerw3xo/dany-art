import type { Product } from "@/data/products";
import styles from "./Product.module.scss";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "@/components/AddToCartButton";
import ProductGallery from "../ProductGallery";

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

function getThumbnailUrl(
  thumbnail: StrapiMedia | null | undefined
): string {
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

function getImages(
  images: StrapiMedia[] | null | undefined
): string[] {
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

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let product: Product | null = null;
  let error: string | null = null;

  try {
    const res = await fetch(
      `${API_URL}/api/produkts?filters[slug][$eq]=${slug}&populate=*`
    );
    if (!res.ok) throw new Error("Chyba při načítaní produktu");
    const json = await res.json();
    if (!json.data || !json.data.length) {
      error = "Produkt nenalezen";
    } else {
      const item = json.data[0];
      product = {
        id: item.id,
        slug: item.slug || item.attributes?.slug,
        name: item.name || item.attributes?.name,
        price: item.price || item.attributes?.price,
        currency: item.currency || item.attributes?.currency,
        category: item.category || item.attributes?.category,
        subcategory: item.subcategory || item.attributes?.subcategory,
        images: getImages(item.images || item.attributes?.images),
        thumbnail: getThumbnailUrl(
          item.thumbnail || item.attributes?.thumbnail
        ),
        summary: item.summary || item.attributes?.summary,
        available: item.available ?? item.attributes?.available,
        featured: item.featured ?? item.attributes?.featured,
      };
    }
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error
        ? err.message === "Failed to fetch"
          ? "Nepodařilo sae připojiť k serveru. Zkontroluj, či beží Strapi alebo síť."
          : err.message
        : "Nepodařilo se načíst produkt";
    error = errorMessage;
  }

  if (error)
    return (
      <section className={styles.product} style={{ color: "red" }}>
        {error}
      </section>
    );
  if (!product)
    return (
      <section className={styles.product}>Produkt nenalezen</section>
    );

  return (
    <section className={styles.product}>
      <div className={styles.info}>
        <div className={styles.right}>
          <h1 className={styles.heading}>{product.name}</h1>

          <p className={styles.description}>{product.summary}</p>
          <p className={styles.price}>{formatPrice(product.price)}</p>

          {product.available ? (
            <span className={styles.inStock}>Skladem</span>
          ) : (
            <span className={styles.outOfStock}>
              Dostupné do měsíce
            </span>
          )}
          <AddToCartButton
            product={product}
            className={styles.addToCart}
          />
        </div>

        <div className={styles.gallery}>
          <ProductGallery
            images={product.images}
            name={product.name}
          />
        </div>
      </div>

      <p className={styles.productInfo}>{product.summary}</p>
    </section>
  );
}
