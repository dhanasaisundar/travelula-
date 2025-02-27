import styles from "./Payment.module.css";

function PaymentPolicy() {
  const policies = [
    {
      text: "100% of the tour cost at the time of booking.",
      type: "payment",
    },
    {
      text: "50% refund if canceled 60 days before travel.",
      type: "partial-refund",
    },
    {
      text: "No refund if canceled within 30 days of travel.",
      type: "no-refund",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Payment & Cancellation Policy</h2>
        <div className={styles.policyContainer}>
          {policies.map((policy, index) => (
            <div
              key={index}
              className={`${styles.policyCard} ${styles[policy.type]}`}
            >
              <p className={styles.policyText}>{policy.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PaymentPolicy;
