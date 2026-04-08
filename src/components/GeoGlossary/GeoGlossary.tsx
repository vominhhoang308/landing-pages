import { glossaryTerms } from './data'
import styles from './GeoGlossary.module.css'

export function GeoGlossary() {
  return (
    <section className={styles.section} id="glossary" aria-labelledby="glossary-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="glossary-title" className={styles.title}>
            SEO, GEO, AEO &amp; AIO glossary
          </h2>
          <div className={styles.bar} />
        </header>
        <dl className={styles.list}>
          {glossaryTerms.map((entry) => (
            <div key={entry.term} className={styles.card}>
              <dt className={styles.term}>{entry.term}</dt>
              <dd className={styles.definition}>{entry.definition}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
