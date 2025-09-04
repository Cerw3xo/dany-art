"use client";

import { useCart } from "@/hooks/useCart";
import { useState } from "react";
import { useRouter } from "next/router";
import { formatPrice } from "@/lib/format";
import Stepper from "@/components/checkout/Stepper";
import CartSummary from "../../components/checkout/CartSummary";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSucces from "@/components/checkout/CheckoutSucces";
import styles from "./Checkout.module.scss";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);

  return (
    <section className={styles.checkout}>
      <Stepper step={step} />
      {step === 1 && <CartSummary onNext={() => setStep(2)} />}
      {step === 2 && (
        <CheckoutForm
          onBack={() => setStep(1)}
          onSubmit={() => setStep(3)}
        />
      )}
      {step === 3 && <CheckoutSucces />}
    </section>
  );
}
