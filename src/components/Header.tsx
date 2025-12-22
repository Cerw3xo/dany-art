"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { LuShoppingCart } from "react-icons/lu";
import { useCartStore } from "@/store/cart";
import CartDrawer from "./CartDrawer";
import { LuMenu } from "react-icons/lu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const items = useCartStore((state) => state.items);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalCount = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <a
            href="https://www.instagram.com/danyss_art/?hl=cs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className={styles.icon} />
          </a>
          <a
            href="https://www.tiktok.com/@danyss_art"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <SiTiktok className={styles.icon} />
          </a>
          <a
            href="https://www.facebook.com/p/Danyss_Art-61551925113012/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className={styles.icon} />
          </a>
        </div>

        <nav className={styles.nav}>
          <button
            className={styles.hamburgerBtn}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Otevřít menu"
          >
            <LuMenu />
          </button>

          <Link
            href="/"
            className={`${styles.navLink} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            HOME
          </Link>
          <Link
            href="/portfolio"
            className={`${styles.navLink} ${
              pathname === "/portfolio" ? styles.active : ""
            }`}
          >
            PORTFOLIO
          </Link>
          <Link
            href="/shop"
            className={`${styles.navLink} ${
              pathname === "/shop" ? styles.active : ""
            }`}
          >
            E-SHOP
          </Link>

          <Link
            href="/contact"
            className={`${styles.navLink} ${
              pathname === "/contact" ? styles.active : ""
            }`}
          >
            KONTAKT
          </Link>

          <div className={styles.center}>
            <button
              onClick={() => setIsCartOpen(true)}
              className={styles.cartLink}
              aria-label="Košík"
            >
              <div>
                <LuShoppingCart className={styles.cartIcon} />
                {items.length > 0 && (
                  <span className={styles.badge}>{totalCount}</span>
                )}
              </div>
            </button>
          </div>
        </nav>
      </header>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
