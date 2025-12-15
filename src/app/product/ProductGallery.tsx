"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./ProductGallery.module.scss";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import ImageLightbox from "@/components/ImageLightbox";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [mainImg, setMainImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState<{
    [key: number]: boolean;
  }>({});

  const handleImageError = (index: number) => {
    console.error("Chyba při načítání obrázku:", images[index]);
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  if (!images || images.length === 0) {
    return (
      <div className={styles.galleryWrapper}>
        <div
          style={{
            padding: "2rem",
            color: "#999",
            textAlign: "center",
          }}
        >
          Žádné obrázky
        </div>

        <div />
      </div>
    );
  }

  const prevImg = () => setMainImg((idx) => Math.max(idx - 1, 0));
  const nextImg = () =>
    setMainImg((idx) => Math.min(idx + 1, images.length - 1));

  const handleLightboxPrev = () => {
    setMainImg((idx) => (idx > 0 ? idx - 1 : idx));
  };

  const handleLightboxNext = () => {
    setMainImg((idx) => (idx < images.length - 1 ? idx + 1 : idx));
  };

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.thumbs}>
        <button
          className={styles.arrow}
          onClick={nextImg}
          disabled={mainImg === images.length - 1}
        >
          <FaChevronUp />
        </button>
        {images.map((src, i) =>
          imageErrors[i] ? (
            <div
              key={i}
              className={`${styles.thumb} ${
                mainImg === i ? styles.active : ""
              }`}
              style={{
                width: "80px",
                height: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f0f0f0",
                fontSize: "10px",
                color: "#999",
              }}
            >
              ❌
            </div>
          ) : (
            <Image
              key={i}
              src={src}
              alt={name}
              width={80}
              height={70}
              className={`${styles.thumb} ${
                mainImg === i ? styles.active : ""
              }`}
              onClick={() => setMainImg(i)}
              style={{ objectFit: "cover" }}
              onError={() => handleImageError(i)}
            />
          )
        )}
        <button
          className={styles.arrow}
          onClick={prevImg}
          disabled={mainImg === 0}
        >
          <FaChevronDown />
        </button>
      </div>
      <div
        className={styles.mainImg}
        onClick={() => !imageErrors[mainImg] && setLightboxOpen(true)}
        style={{
          cursor: imageErrors[mainImg] ? "default" : "pointer",
        }}
      >
        {imageErrors[mainImg] ? (
          <div
            style={{
              width: "800px",
              height: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f0f0f0",
              color: "#999",
            }}
          >
            Obrázek se nepodařilo načíst
          </div>
        ) : (
          <Image
            src={images[mainImg]}
            alt={name}
            width={800}
            height={600}
            style={{ objectFit: "contain" }}
            onError={() => handleImageError(mainImg)}
          />
        )}
      </div>

      {lightboxOpen && !imageErrors[mainImg] && (
        <ImageLightbox
          images={images.filter((_, i) => !imageErrors[i])}
          currentIndex={mainImg}
          onClose={() => setLightboxOpen(false)}
          onPrev={handleLightboxPrev}
          onNext={handleLightboxNext}
          productName={name}
        />
      )}
    </div>
  );
}
