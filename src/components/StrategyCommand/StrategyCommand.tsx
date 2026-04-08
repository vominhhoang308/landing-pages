import styles from './StrategyCommand.module.css'
import { CALENDLY_URL } from '../../constants/links'

function MonitorIcon() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="m8 21 4-4 4 4M7 11l3 3 3-3 4 4" />
    </svg>
  )
}

function TrendIcon() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 17 6-6 4 4 8-8" /><path d="M14 7h7v7" />
    </svg>
  )
}

function HandshakeIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 17 7 13l4-4 3 3 5-5 3 3-8 8-3-1Z" />
    </svg>
  )
}

function ReceiptIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2V3Z" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  )
}

export function StrategyCommand() {
  return (
    <section id="command" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Strategy &amp; Execution Command</h2>
          <p className={styles.subtitle}>
            How our agency leverages data to drive your SEO, GEO, AEO, and AIO growth.
          </p>
        </header>
        <div className={styles.grid}>
          <div className={`${styles.dashboard} ${styles.glass}`}>
            <div className={styles.dashHeader}>
              <div className={styles.dashHeaderLeft}>
                <div className={styles.iconTile}><MonitorIcon /></div>
                <div>
                  <h4 className={styles.dashTitle}>Execution Dashboard</h4>
                  <p className={styles.dashSubtitle}>Current Strategy: Authority Injection Phase II</p>
                </div>
              </div>
              <div className={styles.managedPill}>AGENCY MANAGED</div>
            </div>

            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <h5 className={styles.metricLabel}>Campaign Insights</h5>
                <ul className={styles.metricList}>
                  <li>
                    <span>RAG Visibility Lift</span>
                    <span className={styles.pill}>+31%</span>
                  </li>
                  <li>
                    <span>Geo Search Rank</span>
                    <span className={styles.trendIcon}><TrendIcon /></span>
                  </li>
                </ul>
              </div>
              <div className={styles.metricCard}>
                <h5 className={styles.metricLabel}>Content Delivery</h5>
                <div className={styles.chart} aria-hidden="true">
                  <div style={{ height: '30%', background: 'rgba(201,242,75,0.2)' }} />
                  <div style={{ height: '60%', background: 'rgba(201,242,75,0.4)' }} />
                  <div style={{ height: '90%', background: 'rgba(201,242,75,1)' }} />
                  <div style={{ height: '40%', background: 'rgba(201,242,75,0.6)' }} />
                </div>
              </div>
            </div>

            <div className={styles.callouts}>
              <div className={styles.callout}>
                <div className={styles.calloutTitle}>GEO Optimization</div>
                <div className={styles.calloutDesc}>Structuring data for Generative Engine results.</div>
              </div>
              <div className={styles.callout}>
                <div className={styles.calloutTitle}>Entity Validation</div>
                <div className={styles.calloutDesc}>Securing authority in specific knowledge graphs.</div>
              </div>
            </div>
          </div>

          <div className={`${styles.alignment} ${styles.glass}`}>
            <h4 className={styles.alignTitle}>Agency Alignment</h4>
            <div className={styles.alignRows}>
              <div className={styles.alignRow}>
                <div className={styles.alignIcon}><HandshakeIcon /></div>
                <div>
                  <p className={styles.alignLabel}>Weekly Strategy Syncs</p>
                  <p className={styles.alignSub}>Continuous roadmap refinement</p>
                </div>
              </div>
              <div className={styles.alignRow}>
                <div className={styles.alignIcon}><ReceiptIcon /></div>
                <div>
                  <p className={styles.alignLabel}>Monthly ROI Reports</p>
                  <p className={styles.alignSub}>Transparency in every deliverable</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.scalable}>
            <div>
              <h4 className={styles.scalableTitle}>Scalable Growth</h4>
              <p className={styles.scalableBody}>
                Outsource your SEO/GEO/AEO/AIO strategy to the specialists. We scale your influence across the entire LLM ecosystem.
              </p>
            </div>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={styles.scalableCta}>Start Your Engagement</a>
          </div>
        </div>
      </div>
    </section>
  )
}
