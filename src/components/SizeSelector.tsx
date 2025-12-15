"use client";

import { useState } from "react";
import styles from "./SizeSelector.module.scss";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string | null;
  onSizeChange: (size: string) => void;
  onOpenSizeChart?: () => void;
  hasSizeChart?: boolean;
}

export default function SizeSelector({
  sizes,
  selectedSize,
  onSizeChange,
  onOpenSizeChart,
  hasSizeChart = false,
}: SizeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectSize = (size: string) => {
    onSizeChange(size);
    setIsOpen(false);
  };

  return (
    <div className={styles.sizeSelector}>
      <button
        type="button"
        className={styles.dropdown}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className={styles.selectedValue}>
          {selectedSize || "Zvoliť variantu"}
        </span>
        <span
          className={`${styles.arrow} ${
            isOpen ? styles.arrowUp : ""
          }`}
        >
          ˅
        </span>
      </button>

      {isOpen && (
        <ul className={styles.dropdownMenu} role="listbox">
          {sizes.map((size) => (
            <li
              key={size}
              role="option"
              aria-selected={selectedSize === size}
              className={`${styles.option} ${
                selectedSize === size ? styles.selected : ""
              }`}
              onClick={() => handleSelectSize(size)}
            >
              {size}
            </li>
          ))}
        </ul>
      )}

      {hasSizeChart && (
        <button
          type="button"
          className={styles.sizeChartLink}
          onClick={onOpenSizeChart}
        >
          Tabulka velikostí
        </button>
      )}
    </div>
  );
}
