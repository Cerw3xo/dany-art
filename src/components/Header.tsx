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

export default function Header() {
  const pathname = usePathname();
  const items = useCartStore((state) => state.items);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className={styles.icon} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <SiTiktok className={styles.icon} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className={styles.icon} />
          </a>
        </div>

        <nav className={styles.nav}>
          <div className={styles.center}>
            <button
              onClick={() => setIsCartOpen(true)}
              className={styles.cartLink}
              aria-label="Košík"
            >
              <div>
                <LuShoppingCart className={styles.cartIcon} />
                {items.length > 0 && (
                  <span className={styles.badge}>{items.length}</span>
                )}
              </div>
            </button>
          </div>
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
        </nav>
      </header>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}
