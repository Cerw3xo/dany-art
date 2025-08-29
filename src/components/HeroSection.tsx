import styles from "./HeroSection.module.scss";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.contentWrapper}>
        {/* Ľavá časť – fotka */}
        <div className={styles.imageWrapper}>
          <Image
            src="/dany.webp" // Nahraď vlastnou cestou k obrázku
            alt="Autorka s obrazom"
            width={350}
            height={420}
            className={styles.image}
            priority
          />
        </div>
        {/* Pravá časť – texty a CTA */}
        <div className={styles.textWrapper}>
          <div className={styles.logo}>
            <span className={styles.logoMain}>Danyss</span>
            <span className={styles.logoArt}>Art</span>
          </div>
          <div className={styles.subtitle}>
            ruční tvorba • grafický design • obrazy
          </div>
          <h1 className={styles.headline}>
            UMĚNÍ, KTERÉ NOSÍŠ A MILUJEŠ
          </h1>
          <div className={styles.description}>
            <p>ORIGINÁLNÍ GRAFIKA NA OBLEČENÍ,</p>
            <p>DESIGN ETIKET NA VÍNO,</p>
            <p>OBRAZY A ILUSTRACE S PŘÍBĚHEM</p>
          </div>
          <button className={styles.cta}>
            CHCI NAVÁZAT SPOLUPRÁCI
          </button>
        </div>
      </div>
    </section>
  );
}
