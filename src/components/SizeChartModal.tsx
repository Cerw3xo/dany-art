"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Spinner from "./Spinner";
import styles from "./SizeChartModal.module.scss";

interface SizeChartModalProps {
  imageUrl: string;
  onClose: () => void;
}

export default function SizeChartModal({
  imageUrl,
  onClose,
}: SizeChartModalProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
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
          {loading && !error && (
            <div className={styles.loader}>
              <Spinner size="lg" />
            </div>
          )}

          {error ? (
            <div className={styles.error}>
              <div className={styles.errorIcon}>⚠️</div>
              <h3>Nepodarilo sa načítať tabuľku</h3>
              <p>Skúste obnoviť stránku.</p>
            </div>
          ) : (
            <>
              {isPdf ? (
                <iframe
                  src={imageUrl}
                  className={styles.pdfViewer}
                  title="Tabulka velikostí"
                  onLoad={handleLoad}
                  style={{ opacity: loading ? 0 : 1 }}
                />
              ) : (
                <Image
                  src={imageUrl}
                  alt="Tabulka velikostí"
                  width={800}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                  priority
                  onLoad={handleLoad}
                  onError={handleError}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
