import styles from "./HeroSection.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/dany.webp"
            alt="Autorka s obrazom"
            width={350}
            height={420}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.textWrapper}>
          <div className={styles.logo}>
            <Image
              className={styles.heroLogo}
              src="/logo.svg"
              alt="Logo danyss Art"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <h1 className={styles.headline}>
            UMĚNÍ, KTERÉ NOSÍŠ A MILUJEŠ
          </h1>
          <div className={styles.description}>
            <p>ORIGINÁLNÍ GRAFIKA NA OBLEČENÍ,</p>
            <p>DESIGN ETIKET NA VÍNO,</p>
            <p>OBRAZY A ILUSTRACE S PŘÍBĚHEM</p>
          </div>

          <Link href="/contact" className={styles.cta}>
            CHCI NAVÁZAT SPOLUPRÁCI
          </Link>
        </div>
      </div>
    </section>
  );
}
