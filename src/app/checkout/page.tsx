"use client";

import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/router";
import { formatPrice } from "@/lib/format";
import { div } from "framer-motion/client";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();

  return (
    <div>
      <h1>Dokončit objednávku</h1>
    </div>
  );
}
