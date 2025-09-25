"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./PortfolioPreview.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const items = [
  { src: "/portfolio/etikety/vino.jpg", alt: "Etiketa na vino" },
  {
    src: "/portfolio/knihy/kniha-vazba.JPG",
    alt: "Etiketa na vino",
  },
  { src: "/portfolio/textil/dany.jpg", alt: "Trika s potiskem" },
  {
    src: "/portfolio/textil/taska-demoni1.jpg",
    alt: "Etikety na víno",
  },
  {
    src: "/portfolio/grafika/grafika-rozmarin.jpg",
    alt: "Etikety na víno",
  },
  { src: "/portfolio/malba/obraz-dany.jpg", alt: "Malovaná taška" },
];

export default function PortfolioPreview() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  });

  return (
    <section
      className={styles.section}
      aria-labelledby="portfolio-title"
    >
      <div className={styles.heading}>
        <h3>Chceš něco originálniho co má duši?</h3>

        <Link href="/shop" className={styles.cta}>
          mrkni do e-shopu
        </Link>
      </div>
      <div className={styles.inner}>
        <h2 id="portfolio-title" className={styles.title}>
          Portfolio
        </h2>

        <div className={styles.wrapper}>
          <button
            ref={prevRef}
            type="button"
            className={`${styles.nav} ${styles.prev}`}
            aria-label="Predchádzajúce"
          ></button>

          <Swiper
            loop={true}
            spaceBetween={24}
            slidesPerView={3}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Autoplay, Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <img src={item.src} alt={item.alt} loading="lazy" />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={nextRef}
            type="button"
            className={`${styles.nav} ${styles.next}`}
            aria-label="Ďalšie"
          ></button>
        </div>
      </div>
    </section>
  );
}
