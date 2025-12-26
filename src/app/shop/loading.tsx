import Spinner from "@/components/Spinner";

export default function LoadingShop() {
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
        Přicházejí kousky s duší...
      </p>
    </div>
  );
}
