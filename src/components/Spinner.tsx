import styles from "./Spinner.module.scss";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Spinner({
  size = "md",
  className,
}: SpinnerProps) {
  return (
    <div
      className={`${styles.spinner} ${className || ""}`}
      data-size={size}
    >
      <div className={styles.circle}></div>
    </div>
  );
}
