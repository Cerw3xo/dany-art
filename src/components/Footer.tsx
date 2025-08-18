// src/components/Footer.tsx
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            Danyss<span>Art</span>
          </div>
          <p className={styles.tagline}>
            ruční tvorba · grafický design · obrazy
          </p>
        </div>

        <div className={styles.col}>
          <h4>INFORMACE</h4>
          <ul>
            <li>Daniela Konečná</li>
            <li>Rakovice, Jihomoravský kraj</li>
            <li>Česká republika</li>
            <li>IČO: 21306958</li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>KONTAKT</h4>
          <ul>
            <li>
              <a href="tel:+420775350613">+420 775 350 613</a>
            </li>
            <li>
              <a href="mailto:dani.konecna@email.cz">
                dani.konecna@email.cz
              </a>
            </li>
            <li>@ danyss_art</li>
            <li>tiktok: Danyss_Art</li>
            <li>facebook: DanyssArt</li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>OSTATNÍ</h4>
          <ul>
            <li>
              <Link href="/terms">Obchodní podmínky</Link>
            </li>
            <li>
              <Link href="/returns">Vrácení zboží</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.wave} aria-hidden="true" />

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Daniela Konečná – danyss_art –
          grafický design a ruční tvorba
        </p>
        <p>
          <a
            href="https://www.danyssart.cz"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.danyssart.cz
          </a>
        </p>
      </div>
    </footer>
  );
}
