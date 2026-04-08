import { useState } from 'react'
import styles from './PricingTiers.module.css'
import { rows, type Cell, type Row } from './data'
import { CALENDLY_URL } from '../../constants/links'

type TierKey = Exclude<keyof Row, 'label'>

const HIGHLIGHT_KEYS = [
  'Price',
  'Publish-ready content',
  'High intent Prompts <> ICP',
  'SEO/GEO/AEO/AIO Refresher',
  'Sync calls',
] as const

const highlightRows = rows.filter((r) => (HIGHLIGHT_KEYS as readonly string[]).includes(r.label))

type Tier = {
  key: TierKey
  title: string
  cta: string
  highlight?: boolean
  badge?: string
}

const tiers: Tier[] = [
  { key: 'trials', title: 'Trials', cta: 'Select Trial' },
  { key: 'sprout', title: 'Sprout - monthly', cta: 'Select Sprout' },
  { key: 'seed', title: 'Seed - monthly', cta: 'Select Seed', highlight: true, badge: 'Most Popular' },
  { key: 'fruit', title: 'Fruit - monthly', cta: 'Select Fruit' },
]

function CheckCircle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Included">
      <circle cx="12" cy="12" r="10" />
      <path d="m8 12 3 3 5-6" />
    </svg>
  )
}

function renderCell(cell: Cell) {
  if (cell.icon === 'check') {
    return <span className={styles.check}><CheckCircle /></span>
  }
  if (cell.bullets) {
    return (
      <div className={styles.reportCell}>
        {cell.bulletHeading && <div className={styles.reportHeading}>{cell.bulletHeading}</div>}
        {cell.bullets.map((b, i) => (
          <div key={i}>• {b}</div>
        ))}
      </div>
    )
  }
  return <span className={cell.strong ? styles.strong : undefined}>{cell.text}</span>
}

function handleSelect() {
  window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
}

export function PricingTiers() {
  const [expanded, setExpanded] = useState<TierKey | null>(null)
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>From Seed to Fruit</h2>
          <p className={styles.subtitle}>Whether you're just planting the seed or ready to harvest, there's a tier for you.</p>
        </header>

        <div className={styles.desktopOnly}>
          <div className={styles.wrapper}>
            <div className={styles.scroller}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={`${styles.th} ${styles.tiersCol}`}>Tiers</th>
                    <th className={styles.th}>Trials</th>
                    <th className={styles.th}>Sprout - monthly</th>
                    <th className={`${styles.th} ${styles.seedCol}`}>
                      <div className={styles.badge}>Most Popular</div>
                      Seed - monthly
                    </th>
                    <th className={styles.th}>Fruit - monthly</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.label} className={`${styles.row} ${row.label === 'Price' ? styles.priceRow : ''}`}>
                      <td className={styles.rowLabel}>{row.label}</td>
                      <td className={`${styles.cell} ${row.trials.muted ? styles.muted : ''}`}>{renderCell(row.trials)}</td>
                      <td className={`${styles.cell} ${row.sprout.muted ? styles.muted : ''}`}>{renderCell(row.sprout)}</td>
                      <td className={`${styles.cell} ${styles.seedCol} ${row.seed.muted ? styles.muted : ''}`}>{renderCell(row.seed)}</td>
                      <td className={`${styles.cell} ${row.fruit.muted ? styles.muted : ''}`}>{renderCell(row.fruit)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className={styles.rowLabel}></td>
                    <td className={styles.cell}>
                      <button type="button" className={styles.ghostBtn} onClick={handleSelect}>Select Trial</button>
                    </td>
                    <td className={styles.cell}>
                      <button type="button" className={styles.ghostBtn} onClick={handleSelect}>Select Sprout</button>
                    </td>
                    <td className={`${styles.cell} ${styles.seedCol}`}>
                      <button type="button" className={styles.filledBtn} onClick={handleSelect}>Select Seed</button>
                    </td>
                    <td className={styles.cell}>
                      <button type="button" className={styles.ghostBtn} onClick={handleSelect}>Select Fruit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={styles.mobileOnly}>
          {tiers.map((tier) => {
            const isExpanded = expanded === tier.key
            const panelId = `pricing-panel-${tier.key}`
            return (
              <article
                key={tier.key}
                className={`${styles.card} ${tier.highlight ? styles.cardHighlight : ''}`}
              >
                <header className={styles.cardHeader}>
                  {tier.badge && <div className={styles.cardBadge}>{tier.badge}</div>}
                  <h3 className={styles.cardTitle}>{tier.title}</h3>
                </header>
                {isExpanded ? (
                  <dl className={styles.cardList} id={panelId}>
                    {rows.map((row) => {
                      const cell = row[tier.key]
                      return (
                        <div key={row.label} className={`${styles.cardRow} ${row.label === 'Price' ? styles.priceRow : ''} ${cell.muted ? styles.muted : ''}`}>
                          <dt className={styles.cardLabel}>{row.label}</dt>
                          <dd className={styles.cardValue}>{renderCell(cell)}</dd>
                        </div>
                      )
                    })}
                  </dl>
                ) : (
                  <dl className={styles.cardHighlights}>
                    {highlightRows.map((row) => {
                      const cell = row[tier.key]
                      return (
                        <div key={row.label} className={`${styles.cardRow} ${row.label === 'Price' ? styles.priceRow : ''} ${cell.muted ? styles.muted : ''}`}>
                          <dt className={styles.cardLabel}>{row.label}</dt>
                          <dd className={styles.cardValue}>{renderCell(cell)}</dd>
                        </div>
                      )
                    })}
                  </dl>
                )}
                <button
                  type="button"
                  className={styles.cardToggle}
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onClick={() => setExpanded(isExpanded ? null : tier.key)}
                >
                  {isExpanded ? 'Hide details' : 'Show all features'}
                </button>
                <button
                  type="button"
                  className={`${tier.highlight ? styles.filledBtn : styles.ghostBtn} ${styles.cardCta}`}
                  onClick={handleSelect}
                >
                  {tier.cta}
                </button>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
