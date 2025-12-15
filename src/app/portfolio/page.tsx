"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import styles from "./Portfolio.module.scss";

const portfolioItems = [
  {
    id: "batuv-domek",
    src: "/portfolio/Batuv-domek-olejomalba.jpg",
    alt: "Baťův domek - olejomalba",
  },
  {
    id: "tricko-dame-kafe",
    src: "/portfolio/Digitalni-potisk-na-tricko.jpg",
    alt: "Digitální potisk na tričko",
  },
  {
    id: "dyne-keramicka-broz",
    src: "/portfolio/Dyne-keramicka-broz.jpg",
    alt: "Dýně - keramická brož",
  },
  {
    id: "elinka-malba",
    src: "/portfolio/Elinka-malba-akrylem-na-drevo.png",
    alt: "Elinka - malba akrylem na dřevo",
  },
  {
    id: "etikety-na-mezi",
    src: "/portfolio/Etikety-Na-Mezi.jpg",
    alt: "Etikety Na Mezi",
  },
  {
    id: "etikety-vymyslicky",
    src: "/portfolio/Etikety-Vymyslicky.jpg",
    alt: "Etikety Vymyslický",
  },
  {
    id: "kapka-v-mori",
    src: "/portfolio/Kapka-v-mori-autorska-publikace.jpg",
    alt: "Kapka v moři - autorská publikace",
  },
  {
    id: "kapr-olejomalba",
    src: "/portfolio/Kapr-ojelomalba.jpg",
    alt: "Kapr - olejomalba",
  },
  {
    id: "keramicke-broze",
    src: "/portfolio/Keramicke-broze.jpg",
    alt: "Keramické brože",
  },
  {
    id: "les-divozynek",
    src: "/portfolio/Les-divozynek-olejomalba.jpg",
    alt: "Les divoženek - olejomalba",
  },
  {
    id: "malba-batika-platenka",
    src: "/portfolio/Malba-a-batika-na-platenku.jpg",
    alt: "Malba a batika na plátěnku",
  },
  {
    id: "malba-digitalni-potisk",
    src: "/portfolio/Malba-a-digitalni-potisk-na-platenku.jpg",
    alt: "Malba a digitální potisk na plátěnku",
  },
  {
    id: "malba-na-tricko",
    src: "/portfolio/Malba-na-tricko.jpg",
    alt: "Malba na tričko",
  },
  {
    id: "matka-zeme",
    src: "/portfolio/Matka-Zeme-olejomalba-a-prirodniny.jpg",
    alt: "Matka Země - olejomalba a přírodniny",
  },
  {
    id: "nalezenecek",
    src: "/portfolio/Nalezenecek-autorska-publikace.jpg",
    alt: "Nalezeneček - autorská publikace",
  },
  {
    id: "obaly-kapesniky",
    src: "/portfolio/Obaly-na-kapesniky-graficky-design.jpg",
    alt: "Obaly na kapesníky - grafický design",
  },
  {
    id: "poznavaci-karty",
    src: "/portfolio/Poznavaci-karty-Lecive-Rostlinkarium.jpg",
    alt: "Poznávací karty - Léčivé Rostlinkárium",
  },
  {
    id: "svatebni-oznameni",
    src: "/portfolio/Svatebni-oznameni.jpg",
    alt: "Svatební oznámení",
  },
  {
    id: "svadlencin-pomocnik",
    src: "/portfolio/Svadlencin-pomocnik-rucne-vyrabeny-skicak.jpg",
    alt: "Švadlenčin pomocník - ručně vyráběný skicák",
  },
  {
    id: "tricko-dame-kafe-malba",
    src: "/portfolio/Tricko-Dame-Kafe.jpg",
    alt: "Tričko Dáme Kafe",
  },
];

export default function PortfolioPage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(
    new Set()
  );

  const handleImageLoad = (id: string) => {
    setTimeout(() => {
      setLoadedImages((prev) => new Set(prev).add(id));
    }, 700);
  };

  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <h1 className={styles.title}>Portfolio</h1>

        <div className={styles.grid}>
          {portfolioItems.map((item, i) => (
            <div
              key={item.id}
              className={`${styles.item} ${
                loadedImages.has(item.id)
                  ? styles.loaded
                  : styles.loading
              }`}
              style={{
                animationDelay: `${i * 0.05}s`,
              }}
              onClick={() => {
                setOpen(true);
                setIndex(i);
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                className={styles.image}
                width={800}
                height={600}
                style={{ objectFit: "cover" }}
                loading="lazy"
                onLoad={() => handleImageLoad(item.id)}
              />
              <div className={styles.overlay}>
                <span className={styles.caption}>{item.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={portfolioItems.map((item) => ({
          src: item.src,
          alt: item.alt,
        }))}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </section>
  );
}
