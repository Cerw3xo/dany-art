"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./SizeChartModal.module.scss";

interface SizeChartModalProps {
  imageUrl: string;
  onClose: () => void;
}

export default function SizeChartModal({
  imageUrl,
  onClose,
}: SizeChartModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const isPdf = imageUrl.toLowerCase().endsWith(".pdf");

  return (
    <div
      className={styles.modalBackdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="size-chart-title"
    >
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 id="size-chart-title">Tabulka velikostí</h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Zavřít"
          >
            ✕
          </button>
        </div>

        <div className={styles.modalBody}>
          {isPdf ? (
            <iframe
              src={imageUrl}
              className={styles.pdfViewer}
              title="Tabulka velikostí"
            />
          ) : (
            <Image
              src={imageUrl}
              alt="Tabulka velikostí"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}
