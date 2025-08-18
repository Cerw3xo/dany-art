import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.left}>
        <img
          src="/images/about-photo.jpg"
          alt="Daniela Konečná maluje obraz"
          className={styles.photo}
        />
      </div>
      <div className={styles.right}>
        <h2 className={styles.heading}>Kdo jsem?</h2>
        <p>
          Jmenuji se <strong>Daniela Konečná</strong> – grafická
          designérka a umělkyně, která propojuje kreativitu, funkční
          design a osobitost.
        </p>
        <p>
          Už více než 4 roky se věnuji tvorbě{" "}
          <strong>grafiky na míru</strong>, pracuji v reklamní
          agentuře a zároveň buduju vlastní značku{" "}
          <strong>DanyssArt</strong>.
        </p>

        <h3 className={styles.subheading}>Co tvořím?</h3>
        <ul className={styles.list}>
          <li>Etikety na víno – od návrhu až po tisk</li>
          <li>
            Originální malba a digitální potisk na trička, mikiny i
            tašky
          </li>
          <li>
            Obrazy, autorské ilustrace, keramické výrobky a další
            ruční tvorba
          </li>
          <li>Ručně vázané knihy a autorské publikace</li>
        </ul>

        <p>
          Jsem také autorkou dvou knih, které jsem napsala,
          ilustrovala i svázala – pohádky <strong>Nalezeneček</strong>{" "}
          a básnické sbírky <strong>Kapka v moři</strong>.
        </p>

        <p className={styles.highlight}>
          👉 Hledáš někoho, kdo vytvoří vizuál, co má duši? <br />
          <span>
            Ozvi se mi – ráda ti pomůžu přenést tvůj nápad do
            jedinečné podoby.
          </span>
        </p>
      </div>
    </section>
  );
}
