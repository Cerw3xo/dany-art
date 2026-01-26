import Link from "next/link";
import styles from "./Terms.module.scss";

export const metadata = {
  title: "Obchodní podmínky | DanyssArt",
  description:
    "Obchodní podmínky internetového obchodu DanyssArt – informace o objednávkách, platbách, dodání a reklamacích.",
};

export default function TermsPage() {
  return (
    <section className={styles.terms}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Obchodní podmínky</h1>
          <p className={styles.subtitle}>
            platné od 1. září 2025
          </p>
        </header>

        <div className={styles.content}>
          <h2>I. Základní ustanovení</h2>
          <p>
            Tyto obchodní podmínky upravují práva a povinnosti mezi
            prodávajícím a kupujícím při nákupu prostřednictvím
            internetového obchodu DanyssArt, dostupného na adrese{" "}
            <a
              href="https://www.danyssart.cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.danyssart.cz
            </a>
            .
          </p>
          <p>
            Pro zjednodušení jsou v textu používány pojmy &bdquo;prodávající&ldquo;
            a &bdquo;kupující&ldquo;. Tyto pojmy zahrnují všechny osoby bez ohledu
            na pohlaví a používají se jednotně pro každého, kdo na webu
            nakupuje nebo jinak uzavírá smlouvu s prodávajícím.
          </p>

          <div className={styles.highlight}>
            <p>
              <strong>Prodávající:</strong>
            </p>
            <p>DanyssArt – Daniela Konečná</p>
            <p>Adresa sídla: Tvořihráz 61, 671 34 Tvořihráz</p>
            <p>
              Adresa pro korespondenci a reklamace: Dolní 167, 691 03
              Rakvice
            </p>
            <p>IČO: 21306958</p>
            <p>Nejsem plátce DPH</p>
            <p>
              Zapsáno v živnostenském rejstříku vedeném Městským úřadem
              Znojmo
            </p>
            <p>
              E-mail:{" "}
              <a href="mailto:danyss.art@email.cz">
                danyss.art@email.cz
              </a>
            </p>
            <p>
              Telefon: <a href="tel:+420775350613">+420 775 350 613</a>
            </p>
          </div>

          <p>
            Vážíme si vaší důvěry a chceme, abyste přesně věděli, jak
            nákup u DanyssArt probíhá. Tyto obchodní podmínky jsou
            nedílnou součástí každé kupní smlouvy – přehledně popisují
            vaše práva i naše povinnosti. Jsou psány srozumitelně,
            férově a s respektem k oběma stranám, aby byl nákup pro vás
            vždy příjemným zážitkem.
          </p>

          <h2>II. Objednávka a uzavření smlouvy</h2>
          <ol>
            <li>
              Objednávku může kupující učinit prostřednictvím webového
              rozhraní e-shopu.
            </li>
            <li>
              Smlouva je uzavřena v okamžiku potvrzení objednávky
              prodávajícím na e-mail kupujícího.
            </li>
            <li>
              Prodávající si vyhrazuje právo odmítnout objednávku,
              zejména pokud údaje kupujícího nejsou úplné či pokud
              došlo k chybě v ceně.
            </li>
          </ol>

          <h3>II.i. Objednávky etiket a grafických návrhů</h3>
          <ol>
            <li>
              Prodávající v rámci zakázky zpracovává grafický návrh
              etiket podle požadavků kupujícího.
            </li>
            <li>
              Před finální realizací a výrobou etiket je kupujícímu
              zaslán náhled k odsouhlasení.
            </li>
            <li>
              Kupující je povinen pečlivě zkontrolovat zejména veškeré
              textové části, názvy, kontaktní údaje a jiné obsahové
              informace.
            </li>
            <li>
              Odsouhlasením náhledu kupující potvrzuje, že veškeré
              texty a údaje jsou správné.
            </li>
            <li>
              Prodávající nenese odpovědnost za chyby, překlepy nebo
              jiné nesrovnalosti, které kupující ve schváleném návrhu
              přehlédl.
            </li>
            <li>
              V případě chyb způsobených nesprávnou kontrolou ze strany
              kupujícího nemá kupující nárok na finanční náhradu ani
              bezplatnou opravu či nový tisk.
            </li>
            <li>
              Doporučované množství etiket je od 1.000 ks a výše.
            </li>
            <li>
              Cena etiket se odvíjí podle náročnosti grafického návrhu
              (pokud je požadovaný), vytvoření loga (pokud je
              požadovaný), podle počtu kusů, rozměru a materiálu.
            </li>
            <li>
              Pokud kupující požaduje pouze dotisk již mnou vytvořených
              etiket – kupující platí pouze částku za tisk.
            </li>
            <li>
              Při textových změnách kupující do třetí korektury nic
              neplatí, po třetí korektuře se účtuje 200 Kč za každou
              další korekturu.
            </li>
            <li>
              Pokud zákazník požaduje rozsáhlejší grafické úpravy a
              bude se jednat do zásahu původního designu již platí
              hodinovou sazbu 400 Kč/hod (vztahuje se na etikety
              vytvořených mnou jako autorkou pod značkou DanyssArt –
              Daniela Konečná).
            </li>
            <li>
              Pokud zákazník požaduje dotisk již vzniklých etiket od
              jiného grafika a požaduje textové změny či úprava rozměru
              nebo designu již platí hodinovou sazbu 400 Kč/hod.
            </li>
          </ol>

          <h3>II.ii. Textil s autorským potiskem</h3>
          <ol>
            <li>
              Veškeré motivy, ilustrace a grafické návrhy použité na
              produktech DanyssArt jsou autorskými díly ve smyslu
              zákona č. 121/2000 Sb., autorský zákon.
            </li>
            <li>
              Kupující není oprávněn tyto motivy jakkoli kopírovat,
              reprodukovat či využívat pro komerční účely bez písemného
              souhlasu prodávajícího.
            </li>
            <li>
              U produktů s individuálním potiskem nebo zakázkovou
              úpravou dle přání kupujícího není možné uplatnit právo na
              odstoupení od smlouvy do 14 dnů, jelikož se jedná o zboží
              upravené podle požadavků kupujícího.
            </li>
            <li>
              Kupující odpovídá za to, že motivy, obrázky nebo texty,
              které poskytne prodávajícímu pro účely potisku, neporušují
              autorská práva ani práva třetích osob.
            </li>
            <li>
              V případě porušení nese veškerou odpovědnost kupující.
              Prodávající není povinen kontrolovat oprávnění kupujícího
              k užití takových motivů.
            </li>
            <li>
              Prodávající poskytuje základní pokyny k péči o textil s
              potiskem (např. praní naruby při nižších teplotách,
              nežehlit přes potisk apod.). Kupující je povinen se
              těmito pokyny řídit.
            </li>
            <li>
              V případě poškození z důvodu nedodržení pokynů k údržbě
              nevzniká kupujícímu nárok na reklamaci.
            </li>
            <li>
              Prodávající odpovídá za vady výrobku způsobené vadným
              zpracováním nebo tiskem.
            </li>
            <li>
              Prodávající však nenese odpovědnost za nespokojenost
              kupujícího s motivem, který si sám zvolil nebo
              odsouhlasil.
            </li>
          </ol>

          <h2>III. Cena a platební podmínky</h2>
          <ol>
            <li>
              Všechny ceny uvedené na webu jsou konečné a v českých
              korunách.
            </li>
            <li>
              Platba je možná pouze převodem na bankovní účet
              prodávajícího. Údaje k platbě obdrží kupující v
              potvrzovacím e-mailu.
            </li>
            <li>
              Cenu zboží a případné náklady spojené s dodáním zboží dle
              kupní smlouvy může kupující uhradit prodávajícímu
              bezhotovostně převodem na účet prodávajícího č.
              3018883028/3030, vedený u společnosti Air Bank.
            </li>
            <li>
              Kupní cena je splatná do 7 dnů od potvrzení objednávky.
              Pokud nebude částka uhrazena v této lhůtě, může být
              objednávka zrušena.
            </li>
            <li>
              Zboží je odesíláno až po připsání platby na účet
              prodávajícího.
            </li>
            <li>
              Společně s kupní cenou je kupující povinen zaplatit
              prodávajícímu také náklady spojené s balením a dodáním
              zboží ve smluvené výši. Není-li uvedeno výslovně jinak,
              rozumí se dále kupní cenou i náklady spojené s dodáním
              zboží.
            </li>
          </ol>

          <h2>IV. Dodání zboží</h2>
          <ol>
            <li>
              Zboží je zasíláno prostřednictvím dopravce Zásilkovna,
              případně jiného poskytovatele dopravy zvoleného
              prodávajícím, nebo osobně po předchozí domluvě.
            </li>
            <li>
              Zboží bude doručeno nejpozději do 30 dnů, avšak dodací
              lhůta se liší podle typu zboží:
              <ul>
                <li>
                  <strong>Standardní produkty</strong> – doručení
                  zpravidla do 5–7 pracovních dní od připsání platby.
                </li>
                <li>
                  <strong>Ručně vyráběné knihy</strong> – vzhledem k
                  individuální výrobě může doručení trvat až 30 dnů.
                </li>
                <li>
                  <strong>Ručně malované textilie na zakázku</strong> –
                  dodací lhůta se liší podle náročnosti motivu, obvykle
                  14 dní až několik týdnů.
                </li>
                <li>
                  <strong>Etikety na zakázku</strong> – dodací lhůta se
                  liší podle toho, zda se jedná i o zpracování návrhu
                  (záleží na požadavku do finálního odsouhlasení),
                  výroba a dodání od odsouhlasení návrhu a cenové
                  nabídky obvykle 14 dní až několik týdnů.
                </li>
              </ul>
            </li>
            <li>
              Při objednávce ručně vyráběného zboží či etiket bude
              kupující vždy informován o předpokládaném termínu dodání
              ještě před odesláním zboží.
            </li>
            <li>
              Náklady na dopravu jsou uvedeny před dokončením
              objednávky a hradí je kupující.
            </li>
          </ol>

          <h2>V. Reklamační řád</h2>
          <ol>
            <li>
              Kupující má právo uplatnit reklamaci do 24 měsíců od
              převzetí zboží.
            </li>
            <li>
              Reklamace se uplatňuje písemně na e-mail{" "}
              <a href="mailto:danyss.art@email.cz">
                danyss.art@email.cz
              </a>{" "}
              nebo zasláním vadného zboží na adresu prodávajícího.
            </li>
            <li>
              Kupující je povinen při reklamaci doložit doklad o koupi
              v podobě faktury, který mu zaslal prodávající pro
              uhrazení zboží.
            </li>
            <li>
              Reklamace bude vyřízena nejpozději do 30 dnů od jejího
              doručení.
            </li>
            <li>
              V případě oprávněné reklamace má kupující právo na
              opravu, výměnu zboží nebo vrácení kupní ceny.
            </li>
            <li>
              V případě dodání digitálního obsahu (např. e-knihy, PDF
              soubory, grafické návrhy) odpovídá prodávající za to, že
              digitální obsah odpovídá ujednané kvalitě a je funkční.
              Kupující má právo na opravu, doplnění nebo přiměřenou
              slevu, případně na odstoupení od smlouvy, pokud vada
              nebude odstraněna bez zbytečného odkladu.
            </li>
          </ol>

          <h2>VI. Odstoupení od smlouvy</h2>
          <ol>
            <li>
              Kupující, který je spotřebitelem, má právo odstoupit od
              smlouvy do 14 dnů od převzetí zboží bez udání důvodu.
            </li>
            <li>
              Kupující je povinen o odstoupení informovat prodávajícího
              e-mailem nebo písemně, a to prostřednictvím{" "}
              <Link href="/returns">formuláře pro odstoupení</Link>.
            </li>
            <li>
              Kupující musí zboží zaslat zpět na adresu prodávajícího
              nejpozději do 14 dnů od odstoupení.
            </li>
            <li>Náklady na vrácení nese kupující.</li>
            <li>
              Prodávající vrátí kupujícímu všechny přijaté platby do 14
              dnů od doručení odstoupení, nejdříve však po vrácení
              zboží.
            </li>
          </ol>

          <div className={styles.info}>
            Podrobné informace o vrácení zboží a formulář pro
            odstoupení od smlouvy najdete na stránce{" "}
            <Link href="/returns">Vrácení zboží</Link>.
          </div>

          <p>
            <strong>
              Děkujeme, že nakupujete u DanyssArt. Každý výrobek vzniká
              s láskou a péčí – vážíme si vaší podpory české ruční
              tvorby.
            </strong>
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
