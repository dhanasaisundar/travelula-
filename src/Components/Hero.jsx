// import heroImage from "../assets/hero.jpeg";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.info}>
        <h1 className={styles.title}>
          Big Cats Week at Maasai Mara - Diwali 2023 Special
        </h1>
        <p className={styles.descp}>
          An unforgettable safari experience at the best time of the year!
        </p>
      </div>
    </section>
  );
}

export default Hero;
