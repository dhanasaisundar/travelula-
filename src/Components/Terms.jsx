import styles from './Terms.module.css';

function TermsConditions() {
  const terms = [
    {
      text: 'Costs are based on 4 passengers per vehicle for game drives.',
      important: false
    },
    {
      text: 'Valid passports with at least 6 months validity are required.',
      important: true
    },
    {
      text: 'Yellow Fever and Oral Polio vaccinations are mandatory.',
      important: true
    },
    {
      text: 'International travel insurance is required 15 days prior to travel.',
      important: true
    },
    {
      text: 'Last date to confirm booking: August 14, 2023.',
      important: false
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Terms & Conditions</h2>
        <ul className={styles.termsList}>
          {terms.map((term, index) => (
            <li 
              key={index} 
              className={`${styles.termItem} ${term.important ? styles.important : ''}`}
            >
              {term.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TermsConditions;