import React, { useEffect, useRef, useState } from "react";
import styles from "./Stepper.module.scss";

export default function Stepper({ step }: { step: number }) {
  const steps = ["Nákupní košík", "Dodací údaje", "Objednáno"];
  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      if (typeof window === "undefined") return;

      if (step === steps.length) {
        setProgressWidth(window.innerWidth);
        return;
      }

      const activeIdx = Math.min(step - 1, steps.length - 1);
      const el = circleRefs.current[activeIdx];
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const clamped = Math.max(
        0,
        Math.min(window.innerWidth, centerX)
      );
      setProgressWidth(clamped);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [step, steps.length]);

  return (
    <div className={styles.stepper}>
      <div className={styles.lineBase} aria-hidden />
      <div
        className={styles.lineProgress}
        aria-hidden
        style={{ width: `${progressWidth}px` }}
      />
      {steps.map((label, i) => {
        const stateClass =
          step === i + 1
            ? styles.active
            : i < step - 1
            ? styles.completed
            : styles.future;

        return (
          <div key={i} className={`${styles.step} ${stateClass}`}>
            <span
              ref={(el) => {
                circleRefs.current[i] = el;
              }}
              className={styles.circle}
            >
              {i + 1}.
            </span>
            <span className={styles.label}>{label}</span>
          </div>
        );
      })}
    </div>
  );
}
