import styles from "./Triggers.module.css";

function WhyBookNow() {
  const benefits = [
    { icon: "🔥", text: "Limited Seats Available" },
    { icon: "🎉", text: "Exclusive Discounts Until August 14th" },
    { icon: "✅", text: "Hassle-Free Booking & Cancellation Policy" },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Why Book Now?</h2>
      <ul className={styles.benefitsList}>
        {benefits.map((benefit, index) => (
          <li key={index} className={styles.benefitItem}>
            <span className={styles.icon}>{benefit.icon}</span>
            {benefit.text}
          </li>
        ))}
      </ul>
      <button className={styles.button}>Check Availability</button>
    </section>
  );
}

export default WhyBookNow;
