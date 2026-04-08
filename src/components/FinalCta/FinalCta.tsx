import styles from './FinalCta.module.css'
import { CALENDLY_URL } from '../../constants/links'

export function FinalCta() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.content}>
          <h2 className={styles.title}>
            Your brand visibility,<br />
            <span className={styles.highlight}>Amplified.</span>
          </h2>
          <p className={styles.body}>
            Partner with a full-service SEO, GEO, AEO &amp; AIO agency built for the generative era. Let's secure your brand's future.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Claim Your Audit
            </a>
            <a className={styles.ghost} href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Consult with Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
