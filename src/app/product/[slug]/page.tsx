import type { Product } from "@/data/products";
import styles from "./Product.module.scss";
import ProductGallery from "../ProductGallery";
import ProductDetails from "./ProductDetails";
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
          ? "Nepodařilo se připojit k serveru. Zkontrolujte, zda běží Strapi nebo síť."
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
        <ProductDetails product={product} />

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
