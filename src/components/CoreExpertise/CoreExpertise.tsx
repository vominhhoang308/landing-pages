import styles from './CoreExpertise.module.css'
import { expertiseCards, type ExpertiseCard } from './data'

function Icon({ name }: { name: ExpertiseCard['icon'] }) {
  const common = {
    width: 40,
    height: 40,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  if (name === 'psychology') {
    return (
      <svg {...common}>
        <path d="M9 21h6v-2a3 3 0 0 0-1-2 5 5 0 1 0-4 0 3 3 0 0 0-1 2v2Z" />
        <path d="M12 8v3M10 10h4" />
      </svg>
    )
  }
  if (name === 'map') {
    return (
      <svg {...common}>
        <path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z" />
        <path d="M9 4v16M15 6v16" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M5 19c1.5-3 3-4.5 6-6l8-8-2 9c-1.5 3-3 4.5-6 6l-6-1Z" />
      <path d="m14 5 5 5" />
      <circle cx="13.5" cy="10.5" r="1.5" />
    </svg>
  )
}

function Check() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m8 12 3 3 5-6" />
    </svg>
  )
}

export function CoreExpertise() {
  return (
    <section id="expertise" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Our Core Expertise</h2>
          <div className={styles.bar} />
        </header>
        <div className={styles.grid}>
          {expertiseCards.map((card) => (
            <article key={card.title} className={styles.card}>
              <div className={styles.icon}>
                <Icon name={card.icon} />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.desc}>{card.description}</p>
              <ul className={styles.bullets}>
                {card.bullets.map((b) => (
                  <li key={b}>
                    <span className={styles.check}><Check /></span>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
