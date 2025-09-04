export default function Stepper({ step }: { step: number }) {
  const steps = ["Nákupní košík", "Dodací údaje", "Objednáno"];
  return (
    <div
      style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}
    >
      {steps.map((label, i) => (
        <div
          key={i}
          style={{
            fontWeight: step === i + 1 ? "bold" : "normal",
            color: step === i + 1 ? "#955453" : "#425958",
          }}
        >
          <span
            style={{
              borderRadius: "50%",
              border: "2px solid",
              borderColor: step === i + 1 ? "#955453" : "#ccc",
              padding: "0.3em 0.7em",
              marginRight: "0.5em",
              background: step === i + 1 ? "#ecbbb4" : "#f7f4ee",
            }}
          >
            {i + 1}
          </span>
          {label}
        </div>
      ))}
    </div>
  );
}
