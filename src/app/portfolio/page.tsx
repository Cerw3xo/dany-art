// src/app/portfolio/page.tsx
import styles from "./Portfolio.module.scss";

const portfolioItems = [
  { id: "p1", src: "/portfolio/1.jpg", alt: "Mikina s potlačou" },
  { id: "p2", src: "/portfolio/2.jpg", alt: "Taška so slnečnicami" },
  { id: "p3", src: "/portfolio/3.jpg", alt: "Tričko s potlačou" },
  {
    id: "p4",
    src: "/portfolio/1.jpg",
    alt: "Karty léčivé rostlinarium",
  },
  { id: "p5", src: "/portfolio/2.jpg", alt: "Taška s jahodami" },
  { id: "p6", src: "/portfolio/3.jpg", alt: "Hrnek s motivem lípy" },
  { id: "p7", src: "/portfolio/1.jpg", alt: "Mikina s potlačou" },
  { id: "p8", src: "/portfolio/2.jpg", alt: "Kniha Srdcevěci" },
];

export default function PortfolioPage() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Portfolio</h1>
          <p className={styles.subtitle}>
            Ukázky mé tvorby, které jsem navrhla a vytvořila pro
            klienty i sebe
          </p>
        </header>

        <div className={styles.grid}>
          {portfolioItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <img
                src={item.src}
                alt={item.alt}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span className={styles.caption}>{item.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
