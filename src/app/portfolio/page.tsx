// src/app/portfolio/page.tsx
import styles from "./Portfolio.module.scss";

const portfolioItems = [
  {
    id: "etiketa-vino",
    src: "/portfolio/etikety/vino.jpg",
    alt: "Na Mezi",
  },
  {
    id: "etiketa-vino-lipa",
    src: "/portfolio/etikety/vino-lipa.jpg",
    alt: "Etiketa na víno Lípa",
  },
  {
    id: "grafika-folklor",
    src: "/portfolio/grafika/grafika-folklor.jpg",
    alt: "Folklórni grafika",
  },
  {
    id: "grafika-makky",
    src: "/portfolio/grafika/grafika-makky.jpg",
    alt: "Grafika měkký",
  },
  {
    id: "kniha-vazba",
    src: "/portfolio/knihy/kniha-vazba.jpg",
    alt: "Kniha vázaná ručne",
  },
  {
    id: "malba-kravy",
    src: "/portfolio/malba/obraz-dany.jpg",
    alt: "Maľba kravy",
  },
  {
    id: "kapka-v-mori",
    src: "/portfolio/knihy/svadlencin-pomocnik.JPG",
    alt: "Kapka v moři",
  },
  {
    id: "malba-kapor",
    src: "/portfolio/malba/kapor.jpg",
    alt: "Obraz kapra",
  },
  {
    id: "vino-palava",
    src: "/portfolio/etikety/vino-palava.jpg",
    alt: "Etiketa Pálava",
  },

  {
    id: "textil-dany",
    src: "/portfolio/textil/dany.jpg",
    alt: "Textil Dany",
  },
  {
    id: "textil-tricko",
    src: "/portfolio/textil/tricko.jpg",
    alt: "Tričko s potiskem",
  },
  {
    id: "etiketa-vinko",
    src: "/portfolio/etikety/etiketa-vino.jpg",
    alt: "Etiketa Barič",
  },
];

export default function PortfolioPage() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <h1 className={styles.title}>Portfolio</h1>

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
