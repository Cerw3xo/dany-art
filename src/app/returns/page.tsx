import Link from "next/link";
import styles from "./Returns.module.scss";

export const metadata = {
  title: "Vrácení zboží | DanyssArt",
  description:
    "Informace o vrácení zboží, odstoupení od smlouvy a formulář pro vrácení zboží v e-shopu DanyssArt.",
};

export default function ReturnsPage() {
  return (
    <section className={styles.returns}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Vrácení zboží</h1>
          <p className={styles.subtitle}>
            Informace o odstoupení od smlouvy a vrácení zboží
          </p>
        </header>

        <div className={styles.content}>
          <h2>Obecné podmínky odstoupení od smlouvy</h2>
          <ol>
            <li>
              Kupující, který uzavřel smlouvu prostřednictvím
              internetového obchodu DanyssArt jako spotřebitel, má
              právo odstoupit od smlouvy do{" "}
              <strong>14 dnů ode dne převzetí zboží</strong>, a to bez
              udání důvodu.
            </li>
            <li>
              Pro odstoupení od smlouvy je nutné, aby kupující
              prodávajícího o svém rozhodnutí informoval v uvedené
              lhůtě e-mailem na adresu{" "}
              <a href="mailto:danyss.art@email.cz">
                danyss.art@email.cz
              </a>{" "}
              a zboží následně vrátil nepoškozené a nepoužité se všemi
              dalšími produkty a dárky, které byly spolu s objednaným
              produktem doručeny.
            </li>
            <li>
              Kupující bere na vědomí, že v případě vrácení zboží hradí
              náklady na jeho zaslání zpět prodávajícímu.
            </li>
            <li>
              Zboží, které kupující vrací, nesmí jevit známky používání
              a musí být kompletní.
            </li>
            <li>
              V případě odstoupení od smlouvy vrátí prodávající
              kupujícímu veškeré přijaté platby, včetně nákladů na
              doručení zboží ke kupujícímu, a to ve výši odpovídající
              nejlevnějšímu nabízenému způsobu doručení.
            </li>
            <li>
              Platby budou vráceny stejným způsobem, jakým je
              prodávající přijal, pokud se strany nedohodnou jinak.
            </li>
          </ol>

          <div className={styles.highlight}>
            <p>
              <strong>Adresa pro vrácení zboží:</strong>
            </p>
            <p>Daniela Konečná</p>
            <p>Dolní 167</p>
            <p>691 03 Rakvice</p>
          </div>

          <h2>Zboží vyrobené na zakázku</h2>
          <p>
            U produktů, které byly vyrobeny nebo upraveny podle přání
            kupujícího, <strong>není možné</strong> uplatnit právo na
            odstoupení od smlouvy do 14 dnů. Jedná se zejména o:
          </p>
          <ul>
            <li>Textil s autorským potiskem</li>
            <li>Ručně malované produkty</li>
            <li>Knihy na zakázku</li>
            <li>Etikety s individuálním textem či grafikou</li>
            <li>Grafické práce na míru kupujícího</li>
          </ul>
          <p>
            Tyto výrobky nelze vrátit ani vyměnit, jelikož jsou
            vytvořeny individuálně pro konkrétního zákazníka a není je
            možné dále nabídnout jiným zákazníkům.
          </p>

          <h3>Reklamace zakázkového zboží</h3>
          <p>
            Reklamaci lze uplatnit pouze v případě, že je zboží vadné,
            například z důvodu vadného zpracování, chybného potisku či
            jiné výrobní vady. V takovém případě je kupující povinen
            zaslat vadný produkt na adresu: Dolní 167, 691 03 Rakvice.
            Po posouzení reklamace bude kupujícímu zaslán nový produkt.
          </p>
          <p>
            Pokud kupující nebude požadovat nový výrobek, budou mu
            vráceny veškeré uhrazené finanční prostředky včetně nákladů
            na dopravu.
          </p>

          <h2>Formulář pro odstoupení od smlouvy</h2>
          <p>
            Pro usnadnění odstoupení od smlouvy si můžete stáhnout a
            vyplnit vzorový formulář. Vyplněný formulář zašlete spolu
            s vráceným zbožím na adresu prodávajícího.
          </p>

          <div className={styles.downloadSection}>
            <p>
              <strong>Stáhněte si formulář pro odstoupení:</strong>
            </p>
            <a
              href="/formular-odstoupeni.pdf"
              download
              className={styles.downloadButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Formulář pro odstoupení (PDF)
            </a>
          </div>

          <h2>Jak postupovat při vrácení zboží</h2>
          <ol>
            <li>
              <strong>Kontaktujte nás</strong> – napište e-mail na{" "}
              <a href="mailto:danyss.art@email.cz">
                danyss.art@email.cz
              </a>{" "}
              s informací o odstoupení od smlouvy.
            </li>
            <li>
              <strong>Vyplňte formulář</strong> – stáhněte si a vyplňte
              formulář pro odstoupení od smlouvy.
            </li>
            <li>
              <strong>Zabalte zboží</strong> – zboží musí být
              nepoškozené, nepoužité a v původním obalu (pokud je to
              možné).
            </li>
            <li>
              <strong>Odešlete zásilku</strong> – zboží spolu s
              vyplněným formulářem zašlete na adresu: Dolní 167, 691 03
              Rakvice.
            </li>
            <li>
              <strong>Vyčkejte na vrácení peněz</strong> – platby vám
              vrátíme do 14 dnů od obdržení vráceného zboží.
            </li>
          </ol>

          <div className={styles.info}>
            Máte dotazy ohledně vrácení zboží? Neváhejte nás
            kontaktovat na{" "}
            <a href="mailto:danyss.art@email.cz">danyss.art@email.cz</a>{" "}
            nebo na tel.{" "}
            <a href="tel:+420775350613">+420 775 350 613</a>.
          </div>

          <p>
            Kompletní obchodní podmínky najdete na stránce{" "}
            <Link href="/terms">Obchodní podmínky</Link>.
          </p>
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
