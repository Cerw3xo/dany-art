import type { Product } from "@/data/products";
import styles from "./Product.module.scss";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "@/components/AddToCartButton";
import ProductGallery from "../ProductGallery";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // const { slug } = await params;
  // const product = products.find((p) => p.slug === slug);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/produkts`)
      .then((res) => res.json())
      .then((json) => {});
  });

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
