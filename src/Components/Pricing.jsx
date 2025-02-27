import styles from './Pricing.module.css';

function Pricing() {
  return (
    <section className={styles.pricing}>
      <h2 className={styles.title}>Exclusive Pricing</h2>
      <p className={styles.priceText}>
        Limited-time Independence Day Offer: 
        <span className={styles.amount}>$1322 per adult</span>
      </p>
      <button className={styles.button}>
        Reserve Your Spot
      </button>
    </section>
  );
}

export default Pricing;