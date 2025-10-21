import styles from "./CheckoutSucces.module.scss";

export default function CheckoutSucces() {
  return (
    <section className={styles.checkoutSucces}>
      <h2 className={styles.heading}>
        Objednávka byla úspěšne odeslána!
      </h2>

      <div className={styles.container}>
        <p>Děkuji! Tvou objednávku zpracuji co nejdříve.</p>
        <p className={styles.highlight}>VYČKEJ na email ode mě,</p>
        <p>kam Ti zašlu platební informace.</p>
      </div>
    </section>
  );
}
