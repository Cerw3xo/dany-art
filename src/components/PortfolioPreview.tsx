"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PortfolioPreview.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion, useInView, type Variants } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";
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
  const swiperRef = useRef<SwiperType | null>(null);
  const portfolioRef = useRef(null);

  const isInView = useInView(portfolioRef, {
    once: false,
    amount: 0.5,
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(2px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 2.3,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
    exit: { opacity: 0, y: -40, filter: "blur(2px)" },
  } satisfies Variants;

  const textContainer = {
    hidden: {},
    show: {
      transition: { delayChildren: 0.2, staggerChildren: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  } satisfies Variants;

  return (
    <section
      className={styles.section}
      aria-labelledby="portfolio-title"
      ref={portfolioRef}
    >
      <motion.div
        className={styles.heading}
        initial="hidden"
        animate={isInView ? "show" : "exit"}
        variants={textContainer}
      >
        <motion.div variants={fadeUp}>
          <h3>Chceš něco originálniho co má duši?</h3>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Link href="/shop" className={styles.cta}>
            mrkni do e-shopu
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.inner}
        initial="hidden"
        animate={isInView ? "show" : "exit"}
        variants={textContainer}
      >
        <motion.div variants={fadeUp}>
          <h2 id="portfolio-title" className={styles.title}>
            Portfolio
          </h2>
        </motion.div>

        <motion.div className={styles.wrapper} variants={fadeUp}>
          <button
            ref={prevRef}
            type="button"
            className={`${styles.nav} ${styles.prev}`}
            aria-label="Předchozí"
          ></button>

          <button
            ref={nextRef}
            type="button"
            className={`${styles.nav} ${styles.next}`}
            aria-label="Další"
          ></button>

          <Swiper
            loop={true}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: true,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 24,
              },
            }}
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

              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation?.init();
                swiper.navigation?.update();
              }
            }}
          >
            {items.map((item, i) => {
              const slideIndex = i % 3;
              const delay = [0.3, 0, 0.6];

              return (
                <SwiperSlide key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                              duration: 0.8,
                              delay: delay[slideIndex],
                              ease: [0.16, 1, 0.3, 1],
                            },
                          }
                        : { opacity: 0, y: -40, scale: 0.9 }
                    }
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={400}
                      height={300}
                      loading="lazy"
                      style={{ objectFit: "cover" }}
                    />
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
}
