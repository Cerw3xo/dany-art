import Link from "next/link";
import styles from "./Personal.module.scss";

export const metadata = {
  title: "Zásady ochrany osobních údajů | DanyssArt",
  description:
    "Zásady ochrany osobních údajů (Privacy Policy) a informace o cookies internetového obchodu DanyssArt.",
};

export default function PrivacyPage() {
  return (
    <section className={styles.personal}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Zásady ochrany osobních údajů
          </h1>
          <p className={styles.subtitle}>Privacy Policy</p>
        </header>

        <div className={styles.content}>
          <p>
            Tyto zásady vysvětlují, jak společnost DanyssArt – Daniela
            Konečná nakládá s osobními údaji svých zákazníků a
            návštěvníků webu{" "}
            <a
              href="https://www.danyssart.cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.danyssart.cz
            </a>
            , a jaká práva mají osoby, jejichž údaje jsou
            zpracovávány.
          </p>

          <div className={styles.highlight}>
            <p>
              <strong>Správce osobních údajů:</strong>
            </p>
            <p>Daniela Konečná</p>
            <p>IČO: 21306958</p>
            <p>Sídlo: Tvořihráz 61, 671 34 Tvořihráz</p>
            <p>
              E-mail:{" "}
              <a href="mailto:danyss.art@email.cz">
                danyss.art@email.cz
              </a>
            </p>
          </div>

          <h2>Jaké údaje zpracováváme</h2>
          <p>
            Zpracováváme pouze údaje nezbytné pro uzavření kupní
            smlouvy a doručení zboží:
          </p>
          <ul>
            <li>Jméno a příjmení</li>
            <li>Adresa</li>
            <li>E-mail</li>
            <li>Telefon</li>
          </ul>

          <h2>Právní základ zpracování</h2>
          <p>
            Odesláním objednávky kupující potvrzuje, že byl seznámen
            se zpracováním osobních údajů pro účely uzavření a plnění
            kupní smlouvy.
          </p>

          <h2>Doba uchování údajů</h2>
          <p>
            Osobní údaje uchováváme po dobu trvání smluvního vztahu a
            dále po dobu <strong>5 let</strong> od jeho ukončení, nebo
            po dobu stanovenou právními předpisy (např. zákon o
            účetnictví).
          </p>

          <h2>Předávání údajů třetím stranám</h2>
          <p>
            Osobní údaje mohou být předány pouze třetím stranám, které
            zajišťují:
          </p>
          <ul>
            <li>Doručení zboží (dopravci)</li>
            <li>Zpracování plateb</li>
          </ul>

          <h2>Marketingová komunikace</h2>
          <p>
            Pokud kupující udělí souhlas, může prodávající zpracovávat
            jeho osobní údaje také pro účely zasílání obchodních
            sdělení (newsletter) a cílené reklamy (např.
            prostřednictvím sociálních sítí).
          </p>
          <p>
            Kupující může tento souhlas kdykoliv odvolat zasláním
            požadavku na e-mail{" "}
            <a href="mailto:danyss.art@email.cz">
              danyss.art@email.cz
            </a>
            .
          </p>

          <h2>Vaše práva</h2>
          <p>Jako subjekt údajů máte právo:</p>
          <ul>
            <li>
              <strong>Na přístup k údajům</strong> – můžete požádat o
              informace o tom, jaké údaje o vás zpracováváme.
            </li>
            <li>
              <strong>Na opravu</strong> – máte právo na opravu
              nepřesných údajů.
            </li>
            <li>
              <strong>Na výmaz</strong> – můžete požádat o vymazání
              svých údajů (pokud tomu nebrání zákonné povinnosti).
            </li>
            <li>
              <strong>Na omezení zpracování</strong> – můžete požádat
              o omezení zpracování vašich údajů.
            </li>
            <li>
              <strong>Na přenositelnost</strong> – máte právo na
              přenesení svých údajů k jinému správci.
            </li>
            <li>
              <strong>Vznést námitku</strong> – můžete vznést námitku
              proti zpracování.
            </li>
          </ul>
          <p>
            Pro uplatnění svých práv nás kontaktujte na e-mailu:{" "}
            <a href="mailto:danyss.art@email.cz">
              danyss.art@email.cz
            </a>
          </p>

          <h2>I. Zásady používání cookies</h2>
          <p>
            Aby web DanyssArt fungoval správně a pohodlně, používáme
            soubory cookies. Tyto zásady vysvětlují, jaké druhy
            cookies používáme a jak můžete svůj souhlas s jejich
            ukládáním spravovat.
          </p>

          <h3>Co jsou cookies</h3>
          <p>
            Cookies jsou malé textové soubory, které se ukládají do
            vašeho zařízení a slouží k usnadnění používání webu,
            zajištění funkčnosti e-shopu a analýze návštěvnosti.
          </p>

          <h3>Druhy cookies</h3>
          <ul>
            <li>
              <strong>Nezbytné cookies</strong> – jsou nutné pro
              správné fungování webu a ukládají se vždy.
            </li>
            <li>
              <strong>Analytické a marketingové cookies</strong> –
              slouží k měření návštěvnosti a cílené reklamě (např.
              Google Analytics, Meta Pixel). Tyto cookies ukládáme
              pouze s vaším souhlasem.
            </li>
          </ul>

          <h3>Správa souhlasu</h3>
          <p>
            Při první návštěvě webu je uživateli nabídnuta možnost
            udělit či odmítnout souhlas s ukládáním analytických a
            marketingových cookies prostřednictvím cookies lišty.
          </p>
          <p>
            Souhlas může uživatel kdykoliv změnit nebo odvolat v
            nastavení svého prohlížeče.
          </p>
          <p>
            Odmítnutí cookies může omezit některé funkce webu, ale
            nemá vliv na možnost nakoupit v e-shopu.
          </p>

          <h2>II. Závěrečná ustanovení</h2>
          <p>
            Tyto zásady jsou zveřejněny na webových stránkách
            prodávajícího a jsou platné od{" "}
            <strong>1. září 2025</strong>. Vztahy neupravené těmito
            zásadami se řídí občanským zákoníkem a dalšími právními
            předpisy České republiky.
          </p>

          <h3>Mimosoudní řešení sporů</h3>
          <p>
            Spotřebitel má právo na mimosoudní řešení sporu
            vyplývajícího z kupní smlouvy. Subjektem mimosoudního
            řešení je Česká obchodní inspekce (
            <a
              href="https://www.coi.cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.coi.cz
            </a>
            ).
          </p>
          <p>
            Spotřebitel může využít také platformu pro online řešení
            sporů, kterou provozuje Evropská komise na{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            .
          </p>

          <h3>Dozorový orgán</h3>
          <p>
            Dozorovým orgánem pro oblast ochrany osobních údajů je
            Úřad pro ochranu osobních údajů (
            <a
              href="https://www.uoou.cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.uoou.cz
            </a>
            ). Pokud se domníváte, že došlo k porušení vašich práv,
            můžete se na něj obrátit.
          </p>

          <div className={styles.info}>
            Máte dotazy ohledně zpracování osobních údajů? Kontaktujte
            nás na{" "}
            <a href="mailto:danyss.art@email.cz">
              danyss.art@email.cz
            </a>
            .
          </div>
        </div>

        <Link href="/" className={styles.backLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Zpět na hlavní stránku
        </Link>
      </div>
    </section>
  );
}
