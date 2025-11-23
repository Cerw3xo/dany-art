"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./ProductGallery.module.scss";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  console.log("📸 Gallery dostala images:", images);
  console.log("📸 Gallery images length:", images?.length);
  console.log("📸 Gallery prvý obrázok:", images?.[0]);

  const [mainImg, setMainImg] = useState(0);

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
          Zadne obrazky
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
        {images.map((src, i) => (
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
          />
        ))}
        <button
          className={styles.arrow}
          onClick={prevImg}
          disabled={mainImg === 0}
        >
          <FaChevronDown />
        </button>
      </div>
      <div className={styles.mainImg}>
        <Image
          src={images[mainImg]}
          alt={name}
          width={800}
          height={600}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
