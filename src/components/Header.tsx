import Link from "next/link";
import styles from "./Header.module.scss";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { LuShoppingCart } from "react-icons/lu";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <SiTiktok />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>

      <nav className={styles.nav}>
        <div className={styles.center}>
          <Link
            href="/shop"
            className={styles.cartLink}
            aria-label="Košík"
          >
            <LuShoppingCart className={styles.cartIcon} />
          </Link>
        </div>
        <Link href="/" className={styles.navLink}>
          HOME
        </Link>
        <Link href="/portfolio" className={styles.navLink}>
          PORTFOLIO
        </Link>
        <Link href="/shop" className={styles.navLink}>
          E-SHOP
        </Link>

        <Link href="/contact" className={styles.navLink}>
          KONTAKT
        </Link>
      </nav>
    </header>
  );
}
