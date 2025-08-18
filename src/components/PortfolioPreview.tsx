"use client";
import styles from "./PortfolioPreview.module.scss";
import { useRef } from "react";

const items = [
  { src: "/portfolio/1.jpg", alt: "Mikina s potiskem" },
  { src: "/portfolio/2.jpg", alt: "Etikety na víno" },
  { src: "/portfolio/3.jpg", alt: "Malovaná taška" },
];

export default function PortfolioPreview() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={styles.section}
      aria-labelledby="portfolio-title"
    >
      <div className={styles.inner}>
        <h2 id="portfolio-title" className={styles.title}>
          Portfolio
        </h2>

        <div className={styles.wrapper}>
          <button
            type="button"
            className={`${styles.nav} ${styles.prev}`}
            aria-label="Predchádzajúce"
            onClick={() => scroll("left")}
          >
            ‹
          </button>

          <div className={styles.track} ref={trackRef}>
            {items.map((item, i) => (
              <figure className={styles.card} key={i}>
                <img src={item.src} alt={item.alt} />
              </figure>
            ))}
          </div>

          <button
            type="button"
            className={`${styles.nav} ${styles.next}`}
            aria-label="Ďalšie"
            onClick={() => scroll("right")}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
