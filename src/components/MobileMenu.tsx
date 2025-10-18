// src/components/MobileMenu.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileMenu.module.scss";
import { LuX } from "react-icons/lu";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: Props) {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "HOME" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/shop", label: "E-SHOP" },
    { href: "/contact", label: "KONTAKT" },
  ];

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
      <nav
        className={`${styles.drawer} ${isOpen ? styles.open : ""}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.header}>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Zavřít menu"
          >
            <LuX />
          </button>
        </div>

        <ul className={styles.list}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`${styles.link} ${
                  pathname === l.href ? styles.active : ""
                }`}
                onClick={onClose}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.logo}>
          <Image
            src="/logo2.svg"
            alt="Logo Danyss Art"
            width={290}
            height={135}
            style={{ objectFit: "contain" }}
          />
        </div>
      </nav>
    </>
  );
}
