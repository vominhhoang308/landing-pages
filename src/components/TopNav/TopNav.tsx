import { useEffect, useRef, useState } from 'react'
import MonsteraIcon from '../MonsteraIcon/MonsteraIcon'
import styles from './TopNav.module.css'
import { CALENDLY_URL } from '../../constants/links'

type TopNavProps = {
  onSplashComplete?: () => void
}

export function TopNav({ onSplashComplete }: TopNavProps = {}) {
  const [phase, setPhase] = useState(0)
  const brandRef = useRef<HTMLAnchorElement>(null)
  const [splashOffset, setSplashOffset] = useState({ iconX: 0, y: 0, scale: 2.5 })
  const [ready, setReady] = useState(false)
  const splashFiredRef = useRef(false)

  useEffect(() => {
    if (phase === 3 && !splashFiredRef.current) {
      splashFiredRef.current = true
      onSplashComplete?.()
    }
  }, [phase, onSplashComplete])

  useEffect(() => {
    const measure = () => {
      const brandEl = brandRef.current
      if (!brandEl) return

      const iconRect = brandEl.getBoundingClientRect()

      const originStr = getComputedStyle(brandEl).transformOrigin
      const originParts = originStr.split(' ')
      const originX = parseFloat(originParts[0] ?? '0')
      const originY = parseFloat(originParts[1] ?? '0')

      const iconX = window.innerWidth / 2 - (iconRect.left + originX + 100)
      const y = window.innerHeight / 2 - (iconRect.top + originY)

      const textSpan = brandEl.querySelector(`.${styles.brandText}`) as HTMLElement
      if (textSpan) {
        textSpan.style.transition = 'none'
        textSpan.style.maxWidth = '20.8em'
        textSpan.style.marginLeft = '0.3em'
      }
      const fullRect = brandEl.getBoundingClientRect()
      if (textSpan) {
        textSpan.style.maxWidth = ''
        textSpan.style.marginLeft = ''
        void brandEl.offsetWidth
        textSpan.style.transition = ''
      }

      const isMobile = window.matchMedia('(max-width: 767px)').matches
      const desiredScale = isMobile ? 1.6 : 2.5
      const rightExtent = fullRect.width - originX
      const leftExtent = originX
      const pad = 16
      const maxFromRight = (window.innerWidth / 2 - pad) / rightExtent
      const maxFromLeft = (window.innerWidth / 2 - pad) / leftExtent
      const maxScale = Math.min(maxFromRight, maxFromLeft)
      const scale = Math.min(desiredScale, maxScale)

      setSplashOffset({ iconX, y, scale })
      setReady(true)
    }

    document.fonts.ready.then(measure)
  }, [])

  useEffect(() => {
    if (!ready) return
    const t1 = setTimeout(() => setPhase(1), 50)
    const t2 = setTimeout(() => setPhase(2), 550)
    const t3 = setTimeout(() => setPhase(3), 1800)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [ready])

  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.inner}>
        <a
          ref={brandRef}
          href="#main-content"
          aria-label="Asgar.ai home"
          className={`${styles.brand} ${
            phase >= 3 ? styles.brandVisible : phase >= 1 ? styles.brandSplash : ''
          }`}
          style={{
            '--splash-x': `${splashOffset.iconX}px`,
            '--splash-y': `${splashOffset.y}px`,
            '--splash-scale': splashOffset.scale,
          } as React.CSSProperties}
        >
          <MonsteraIcon className={`${styles.brandIcon} ${phase >= 1 && phase < 3 ? styles.brandIconGlow : ''}`} />
          <span className={`${styles.brandText} ${phase >= 2 ? styles.brandTextVisible : ''}`}>
            Asgar.ai
          </span>
        </a>
        <ul className={styles.links}>
          <li><a href="#expertise">Consultancy</a></li>
          <li><a href="#command">Strategy</a></li>
          <li><a href="#command">Execution</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className={styles.actions}>
          <a className={styles.cta} href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Book Audit</a>
        </div>
      </div>
    </nav>
  )
}
