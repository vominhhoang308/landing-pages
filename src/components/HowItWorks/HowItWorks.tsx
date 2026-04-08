import { howItWorksSteps } from './data'
import styles from './HowItWorks.module.css'

export function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works" aria-labelledby="how-it-works-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="how-it-works-title" className={styles.title}>
            How we work
          </h2>
          <div className={styles.bar} />
        </header>
        <ol className={styles.grid}>
          {howItWorksSteps.map((step, idx) => (
            <li key={step.title} className={styles.card}>
              <span className={styles.number} aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.desc}>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
