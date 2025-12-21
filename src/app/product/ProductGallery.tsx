"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "./ProductGallery.module.scss";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

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
  const [loadedImages, setLoadedImages] = useState<Set<number>>(
    new Set()
  );

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const handleImageLoad = (index: number) => {
    setTimeout(() => {
      setLoadedImages((prev) => new Set(prev).add(index));
    }, 300);
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
              className={`${styles.thumb} ${styles.error} ${
                mainImg === i ? styles.active : ""
              }`}
            >
              ❌
            </div>
          ) : (
            <div
              key={i}
              className={`${styles.thumbWrapper} ${
                loadedImages.has(i) ? styles.loaded : styles.loading
              }`}
              style={{
                animationDelay: `${i * 0.05}s`,
              }}
            >
              <Image
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
                onLoad={() => handleImageLoad(i)}
              />
            </div>
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
        className={`${styles.mainImg} ${
          loadedImages.has(mainImg) ? styles.loaded : styles.loading
        }`}
        onClick={() => !imageErrors[mainImg] && setLightboxOpen(true)}
        style={{
          cursor: imageErrors[mainImg] ? "default" : "pointer",
        }}
      >
        {imageErrors[mainImg] ? (
          <div className={styles.errorPlaceholder}>
            Obrázek se nepodařilo načíst
          </div>
        ) : (
          <Image
            src={images[mainImg]}
            alt={name}
            width={800}
            height={600}
            sizes="(max-width: 768px) 90vw, 600px"
            style={{ objectFit: "contain" }}
            onError={() => handleImageError(mainImg)}
            onLoad={() => handleImageLoad(mainImg)}
          />
        )}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={images
          .filter((_, i) => !imageErrors[i])
          .map((src) => ({
            src,
            alt: name,
          }))}
        index={mainImg}
        on={{ view: ({ index }) => setMainImg(index) }}
      />
    </div>
  );
}
