import Spinner from "@/components/Spinner";

export default function LoadingProduct() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "1rem",
      }}
    >
      <Spinner size="lg" />
      <p style={{ color: "var(--color-text)", fontSize: "1rem" }}>
        Načítám originální tvorbu...
      </p>
    </div>
  );
}
