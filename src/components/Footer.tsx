// src/components/Footer.tsx
import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="Logo Danyss Art"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className={styles.col}>
          <h4>INFORMACE</h4>
          <ul>
            <li>Daniela Konečná</li>
            <li>Tvořihráz, Jihomoravský kraj</li>
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
              <a href="mailto:danyss.art@email.cz">
                danyss.art@email.cz
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/danyss_art/?hl=cs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                Instagram: danyss_art
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@danyss_art"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                TikTok: Danyss_Art
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/p/Danyss_Art-61551925113012/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                Facebook: DanyssArt
              </a>
            </li>
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
            <li>
              <Link href="/personal">
                Zásady ochrany osobních údajů
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <Image
          className={styles.image}
          src="/danyArt.webp"
          alt="abstraktne pozadi"
          width={730}
          height={200}
        />
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
