"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Vypne browser scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Pri prvom renderovaní nescrolluj (už sme na vrchu)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Okamžitý scroll
    window.scrollTo(0, 0);

    // requestAnimationFrame pre prípad, že DOM ešte nie je hotový
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    // Timeout pre prípad, že Next.js scroll restoration prebehne neskôr
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
