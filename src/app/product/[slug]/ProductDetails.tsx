"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import styles from "./Product.module.scss";
import { formatPrice } from "@/lib/format";
import AddToCartButton from "@/components/AddToCartButton";
import SizeSelector from "@/components/SizeSelector";
import SizeChartModal from "@/components/SizeChartModal";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(
    null
  );
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const requiresSize =
    (product.subcategory === "tricka" ||
      product.subcategory === "mikiny") &&
    product.sizes &&
    product.sizes.length > 0;

  const sizeChartPath =
    product.subcategory === "tricka"
      ? "/size-spec/rozmery produktu tricko.pdf"
      : product.subcategory === "mikiny"
      ? "/size-spec/rozmery produktu mikina.pdf"
      : null;

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    setSizeError(false);
  };

  const handleSizeError = () => {
    setSizeError(true);

    const sizeSelector = document.querySelector(
      `.${styles.sizeSection}`
    );
    if (sizeSelector) {
      sizeSelector.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
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

        {requiresSize && (
          <div className={styles.sizeSection}>
            <SizeSelector
              sizes={product.sizes!}
              selectedSize={selectedSize}
              onSizeChange={handleSizeChange}
              onOpenSizeChart={() => setShowSizeChart(true)}
              hasSizeChart={!!sizeChartPath}
            />
            {sizeError && (
              <p className={styles.sizeError}>
                Prosím, zvolte velikost před přidáním do košíku
              </p>
            )}
          </div>
        )}

        <AddToCartButton
          product={product}
          className={styles.addToCart}
          selectedSize={selectedSize}
          requiresSize={requiresSize}
          onSizeError={handleSizeError}
        />
      </div>

      {showSizeChart && sizeChartPath && (
        <SizeChartModal
          imageUrl={sizeChartPath}
          onClose={() => setShowSizeChart(false)}
        />
      )}
    </>
  );
}
