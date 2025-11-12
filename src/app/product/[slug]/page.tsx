import type { Product } from "@/data/products";
import styles from "./Product.module.scss";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "@/components/AddToCartButton";
import ProductGallery from "../ProductGallery";
import {
  fetchProductBySlug,
  convertStrapiProduct,
} from "@/lib/strapi";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let product: Product | null = null;
  let error: string | null = null;

  try {
    const strapiProducts = await fetchProductBySlug(slug);

    if (!strapiProducts) {
      error = "Produkt nenalezen";
    } else {
      const converted = convertStrapiProduct(strapiProducts);
      product = converted ? (converted as Product) : null;

      if (!product) {
        error = "Chyba při zpracování produktu";
      }
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

  console.log("🎨 Product pred gallery:", product);
  console.log("🖼️ Images pred gallery:", product.images);
  console.log("🖼️ Images length:", product.images?.length);

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
