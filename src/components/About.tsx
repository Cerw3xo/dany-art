"use client";

import styles from "./About.module.scss";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

export default function About() {
  const aboutRef = useRef(null);

  const isInView = useInView(aboutRef, {
    once: false,
    amount: 0.35,
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
    <section className={styles.about} ref={aboutRef}>
      {/* Ľavá strana: obrázok */}
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
          <img
            src="/dany.webp"
            alt="Daniela Konečná maluje obraz"
            className={styles.photo}
          />
        </div>
      </motion.div>

      {/* Pravá strana: text s postupným zobrazením */}
      <motion.div
        className={styles.right}
        initial="hidden"
        animate={isInView ? "show" : "exit"}
        variants={textContainer}
      >
        <motion.div variants={fadeUp}>
          <h2 className={styles.heading}>Kdo jsem?</h2>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p>
            Jmenuji se <strong>Daniela Konečná</strong> – grafická
            designérka a umělkyně, která propojuje kreativitu, funkční
            design a osobitost. Už více než 4 roky se věnuji tvorbě{" "}
            <strong>grafiky na míru</strong>, pracuji v reklamní
            agentuře a zároveň buduji vlastní značku{" "}
            <strong>DanyssArt</strong>.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h3 className={styles.subheading}>Co tvořím?</h3>
        </motion.div>

        <motion.div variants={fadeUp}>
          <ul className={styles.list}>
            <li>Etikety na víno – od návrhu až po tisk</li>
            <li>
              Originální malba a digitální potisk na trička, mikiny a
              tašky
            </li>
            <li>
              Obrazy, autorské ilustrace, keramické výrobky a další
              ruční tvorba
            </li>
            <li>Ručně vázané knihy a autorské publikace</li>
          </ul>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p>
            Jsem také autorkou dvou knih, které jsem napsala,
            ilustrovala a svázala – pohádky{" "}
            <strong>Nalezeneček</strong> a básnické sbírky{" "}
            <strong>Kapka v moři</strong>.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p className={styles.highlight}>
            👉 Hledáš někoho, kdo vytvoří vizuál, co má duši? <br />
            <span>
              Ozvi se mi – ráda ti pomůžu přenést tvůj nápad do
              jedinečné podoby.
            </span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
