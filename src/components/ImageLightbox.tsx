"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./ImageLightbox.module.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  productName: string;
}

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  productName,
}: ImageLightboxProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={styles.lightboxBackdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${productName} - obrázek ${currentIndex + 1} z ${
        images.length
      }`}
    >
      <button
        type="button"
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Zavřít"
      >
        ✕
      </button>

      {currentIndex > 0 && (
        <button
          type="button"
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={onPrev}
          aria-label="Předchozí obrázek"
        >
          <FaChevronLeft />
        </button>
      )}

      <div className={styles.imageContainer}>
        <Image
          src={images[currentIndex]}
          alt={`${productName} - obrázek ${currentIndex + 1}`}
          width={1200}
          height={900}
          style={{ objectFit: "contain" }}
          priority
        />
        <div className={styles.imageCounter}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {currentIndex < images.length - 1 && (
        <button
          type="button"
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={onNext}
          aria-label="Další obrázek"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
}
