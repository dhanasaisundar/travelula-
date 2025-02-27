import styles from "./Itinerary.module.css";

function TourItinerary() {
  const itineraryDays = [
    "Day 1 - Arrival & Game Drive",
    "Day 2 - Sunrise Safari & Bush Breakfast",
    "Day 3 - Full-Day Safari",
    "Day 4 - Return to Nairobi",
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Tour Itinerary</h2>
      <div className={styles.cardGrid}>
        {itineraryDays.map((day, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.dayTitle}>{day}</h3>
              <p className={styles.description}>
                Experience the stunning landscapes, rich wildlife, and
                breathtaking sunsets of Maasai Mara.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TourItinerary;
