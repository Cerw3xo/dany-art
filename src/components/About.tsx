"use client";

import styles from "./About.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

export default function About() {
  const aboutRef = useRef(null);

  const isInView = useInView(aboutRef, {
    once: true,
    amount: 0.35,
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,

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
    <section className={styles.about} ref={aboutRef}>
      <motion.div
        className={styles.left}
        initial="hidden"
        animate={isInView ? "show" : "exit"}
        variants={fadeUp}
      >
        <div className={styles.logo}>
          <div>
            <Image
              src="/logo1.svg"
              alt="Logo Autora"
              width={0}
              height={0}
              className={styles.image}
            />
          </div>

          <p className={styles.name}>Daniela Konečná</p>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/dany.jpg"
            alt="Daniela Konečná maluje obraz"
            className={styles.photo}
            width={400}
            height={600}
            style={{ objectFit: "cover" }}
          />
        </div>
      </motion.div>

      <motion.div
        className={styles.right}
        initial="hidden"
        animate={isInView ? "show" : "exit"}
        variants={textContainer}
      >
        <motion.div variants={fadeUp}>
          <h2 className={styles.heading}>Kdo jsem?</h2>
        </motion.div>

        <motion.div variants={fadeUp} className={styles.aboutMe}>
          <p>
            Jmenuji se <strong>Daniela Konečná</strong> a pod značkou
            DanyssArt tvořím věci, které mají duši.
          </p>
          <p>
            Moje tvorba je rozmanitá, protože miluji objevovat nové
            techniky, materiály a způsoby vyjádření. Fascinuje mě
            moment, kdy se obyčejná myšlenka začne měnit v něco, co
            může člověka potěšit, zahřát nebo doprovázet v každodenním
            životě.
          </p>
          <p>
            Stejně jako se život nedá nacpat do jedné škatulky, nedá
            se do ní nacpat ani moje tvorba — a právě v tom spočívá
            její krása.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className={styles.subheading}>CO TVOŘÍM?</h3>
        </motion.div>

        <motion.div variants={fadeUp} className={styles.categories}>
          <div className={styles.category}>
            <h4 className={styles.categoryTitle}>
              Textil s autorskými motivy
            </h4>
            <p className={styles.categoryText}>
              Ručně malované kousky i digitální potisk na přání. Každý
              produkt je originál vznikající s péčí a pozorností k
              detailu.
            </p>
          </div>

          <div className={styles.category}>
            <h4 className={styles.categoryTitle}>
              Ilustrace a obrazy
            </h4>
            <p className={styles.categoryText}>
              Jemné, snové, někdy hravé, jindy melancholické. Tvorba,
              ve které se odráží ženskost a cit pro detail.
            </p>
          </div>

          <div className={styles.category}>
            <h4 className={styles.categoryTitle}>
              Etikety a grafické návrhy
            </h4>
            <p className={styles.categoryText}>
              Vizuály na míru pro vinařství, firmy, svatby i osobní
              projekty. Zakládám si na estetice a funkčním designu,
              který má charakter.
            </p>
          </div>

          <div className={styles.category}>
            <h4 className={styles.categoryTitle}>Autorské knihy</h4>
            <p className={styles.categoryText}>
              Dětská kniha <strong>Nalezeneček</strong> a básnická
              sbírka <strong>Kapka v moři</strong> – obě jsem sama
              napsala, ilustrovala i ručně svázala. Každý výtisk je
              malý příběh, který prochází mýma rukama od začátku do
              konce.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Link href="/contact" className={styles.highlight}>
            <span className={styles.ctaTitle}>
              Chceš svůj nápad proměnit v originální vizuál?
            </span>
            <span className={styles.ctaText}>
              👉 Ozvi se mi — ráda s tebou vytvořím něco jedinečného.
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
