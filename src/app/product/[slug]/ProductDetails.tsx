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

  // Zistiť, či produkt vyžaduje výber veľkosti
  const requiresSize =
    (product.subcategory === "tricko" ||
      product.subcategory === "mikina") &&
    product.sizes &&
    product.sizes.length > 0;

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    setSizeError(false);
  };

  const handleSizeError = () => {
    setSizeError(true);
    // Scroll k size selectoru
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

        {/* Size Selector - zobrazí sa len pre tričká a mikiny */}
        {requiresSize && (
          <div className={styles.sizeSection}>
            <SizeSelector
              sizes={product.sizes!}
              selectedSize={selectedSize}
              onSizeChange={handleSizeChange}
              onOpenSizeChart={() => setShowSizeChart(true)}
              hasSizeChart={!!product.sizeChart}
            />
            {sizeError && (
              <p className={styles.sizeError}>
                Prosím, zvoľte veľkosť pred pridaním do košíka
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

      {/* Size Chart Modal */}
      {showSizeChart && product.sizeChart && (
        <SizeChartModal
          imageUrl={product.sizeChart}
          onClose={() => setShowSizeChart(false)}
        />
      )}
    </>
  );
}
