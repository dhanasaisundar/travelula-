import styles from './Overview.module.css';

function Overview() {
  return (
    <section className={styles.overview}>
      <h2 className={styles.title}>Overview</h2>
      <p className={styles.description}>
        November is one of the best times to visit Kenya, especially to explore the Maasai Mara. The large migratory herds have returned to Tanzania, making it a prime season for spotting big cats as they venture long distances to hunt.
      </p>
      <p className={styles.description}>
        November also brings short rains, making the Mara lush green with breathtaking sunrise and sunsets. This curated itinerary offers a perfect holiday getaway at an affordable cost while maintaining top-notch services, celebrating our first anniversary in Nairobi.
      </p>
    </section>
  );
}

export default Overview;