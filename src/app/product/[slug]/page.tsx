import { products } from "@/data/products";
import styles from "./Product.module.scss";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "@/components/AddToCartButton";
import ProductGallery from "../ProductGallery";
import { P } from "node_modules/framer-motion/dist/types.d-Cjd591yU";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return <section>Produkt nenalezen</section>;

  return (
    <section className={styles.product}>
      <div className={styles.info}>
        <div className={styles.right}>
          <h1 className={styles.heading}>{product.name}</h1>

          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            At eos facilis iste perferendis et quaerat.
          </p>
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

      <p className={styles.productInfo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Provident accusantium necessitatibus aperiam eligendi porro
        facilis nobis impedit nostrum voluptate repudiandae, aliquam
        totam vel et minus ad doloremque quasi consectetur voluptatem?
      </p>
    </section>
  );
}
