import { faqItems } from '../../data/faq'
import styles from './FaqSection.module.css'

export function FaqSection() {
  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="faq-title" className={styles.title}>
            Frequently asked questions about SEO, GEO, AEO &amp; AIO
          </h2>
          <div className={styles.bar} />
        </header>
        <ul className={styles.list}>
          {faqItems.map((item) => (
            <li key={item.question} className={styles.card}>
              <details>
                <summary className={styles.summary}>{item.question}</summary>
                <p className={styles.answer}>{item.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
