"use client";

import styles from "./HeroSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

export default function HeroSection() {
  const [videoPlayed, setVideoPlayed] = useState(false);
  const heroRef = useRef(null);

  const isInView = useInView(heroRef, {
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
        staggerChildren: 0.8,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  } satisfies Variants;

  return (
    <section className={styles.hero} ref={heroRef}>
      {!videoPlayed && (
        <video
          autoPlay
          muted
          playsInline
          onEnded={() => setVideoPlayed(false)}
          className={styles.background}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      )}

      <div className={styles.contentWrapper}>
        <motion.div
          className={styles.imageWrapper}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          variants={fadeUp}
        >
          <Image
            src="/dany.webp"
            alt="Autorka s obrazom"
            width={350}
            height={420}
            className={styles.image}
            priority
            sizes="(max-width: 768px ) 80vw, (max-width: 1200px)  36vw, 420px"
          />
        </motion.div>

        <motion.div
          className={styles.textWrapper}
          initial="hidden"
          animate={isInView ? "show" : "exit"}
          variants={textContainer}
        >
          <motion.div className={styles.logo} variants={fadeUp}>
            <Image
              className={styles.heroLogo}
              src="/logo3.svg"
              alt="Logo danyss Art"
              width={520}
              height={240}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "auto",
              }}
            />
          </motion.div>

          <motion.div className={styles.text} variants={fadeUp}>
            <h1 className={styles.headline}>
              UMĚNÍ, KTERÉ NOSÍŠ A MILUJEŠ
            </h1>
            <div className={styles.description}>
              <p>
                Autorský potisk a ruční malba na textil. Obrazy,
                ilustrace i grafický design a další ručně tvořená
                díla.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link href="/contact" className={styles.cta}>
              CHCI SPOLUPRACOVAT
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
