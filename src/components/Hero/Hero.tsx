import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import MonsteraIcon from '../MonsteraIcon/MonsteraIcon'
import { ScrollIndicator } from '../ScrollIndicator/ScrollIndicator'
import styles from './Hero.module.css'

interface HeroProps {
  brandName: string
  tagline: string
  subtext: string
  ctaLabel: string
}

const icons = [
  // ChatGPT — pair
  { src: '/floatingicon/vecteezy_chatgpt-icon-green-and-white-icon_42165837.png', alt: 'ChatGPT', position: { top: '5%', left: '5%' } },
  { src: '/floatingicon/vecteezy_chatgpt-icon-green-and-white-icon_42165837.png', alt: 'ChatGPT', position: { bottom: '15%', right: '15%' } },
  // Gemini — pair
  { src: '/floatingicon/vecteezy_gemini-ai-app-icon-with-transparent-background_56850690.png', alt: 'Gemini', position: { top: '10%', right: '8%' } },
  { src: '/floatingicon/vecteezy_gemini-ai-app-icon-with-transparent-background_56850690.png', alt: 'Gemini', position: { bottom: '5%', left: '15%' } },
  // Perplexity — pair
  { src: '/floatingicon/vecteezy_perplexity-ai-transparent-logo_51336393.png', alt: 'Perplexity', position: { bottom: '15%', left: '10%' } },
  { src: '/floatingicon/vecteezy_perplexity-ai-transparent-logo_51336393.png', alt: 'Perplexity', position: { top: '15%', right: '15%' } },
  // Claude — pair
  { src: '/floatingicon/vecteezy_claude-ai-icon-on-a-transparent-background_78109960.png', alt: 'Claude', position: { bottom: '10%', right: '5%' } },
  { src: '/floatingicon/vecteezy_claude-ai-icon-on-a-transparent-background_78109960.png', alt: 'Claude', position: { top: '15%', left: '10%' } },
  // Copilot — pair
  { src: '/floatingicon/vecteezy_microsoft-copilot-icon-on-transparent-background_58072400.png', alt: 'Copilot', position: { top: '50%', left: '0%' } },
  { src: '/floatingicon/vecteezy_microsoft-copilot-icon-on-transparent-background_58072400.png', alt: 'Copilot', position: { top: '35%', right: '2%' } },
]

function renderTypedSegments(
  text: string,
  count: number,
  ranges: { start: number; end: number }[],
  highlightActive: boolean
) {
  const typed = text.slice(0, count)
  const segments: React.ReactNode[] = []
  let cursor = 0

  for (const range of ranges) {
    if (cursor >= typed.length) break

    // Plain text before this range
    if (range.start > cursor) {
      const end = Math.min(range.start, typed.length)
      segments.push(typed.slice(cursor, end))
      cursor = end
    }

    if (cursor >= typed.length) break

    // Highlighted portion (may be partially typed)
    if (cursor >= range.start && cursor < range.end) {
      const end = Math.min(range.end, typed.length)
      const className = highlightActive
        ? `${styles.subtextHighlight} ${styles.subtextHighlightActive}`
        : styles.subtextHighlight
      segments.push(
        <mark key={range.start} className={className}>
          {typed.slice(cursor, end)}
        </mark>
      )
      cursor = end
    }
  }

  // Remaining plain text after last range
  if (cursor < typed.length) {
    segments.push(typed.slice(cursor))
  }

  return segments
}

export function Hero({ brandName, tagline, subtext, ctaLabel }: HeroProps) {
  const [phase, setPhase] = useState(0)
  const [typedCount, setTypedCount] = useState(0)
  const isTyping = phase >= 5
  const brandRef = useRef<HTMLParagraphElement>(null)
  const [splashOffset, setSplashOffset] = useState({ x: 0, y: 0 })

  useLayoutEffect(() => {
    if (brandRef.current) {
      const rect = brandRef.current.getBoundingClientRect()
      setSplashOffset({
        x: window.innerWidth / 2 - (rect.left + rect.width / 2),
        y: window.innerHeight / 2 - (rect.top + rect.height / 2),
      })
    }
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setPhase(7)
      setTypedCount(subtext.length)
      return
    }

    const t1 = setTimeout(() => setPhase(1), 50)
    const t2 = setTimeout(() => setPhase(2), 550)
    const t3 = setTimeout(() => setPhase(3), 1800)
    const t4 = setTimeout(() => setPhase(4), 1800)
    const t5 = setTimeout(() => setPhase(5), 3000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
      clearTimeout(t5)
    }
  }, [subtext.length])

  useEffect(() => {
    if (!isTyping || typedCount >= subtext.length) {
      if (typedCount >= subtext.length && phase === 5) {
        setPhase(6)
      }
      return
    }
    const speed = 20
    const timer = setTimeout(() => setTypedCount(c => c + 1), speed)
    return () => clearTimeout(timer)
  }, [isTyping, typedCount, subtext.length, phase])

  // Phase 6 → 7: delay for highlight sweep before showing CTA
  useEffect(() => {
    if (phase === 6) {
      const timer = setTimeout(() => setPhase(7), 600)
      return () => clearTimeout(timer)
    }
  }, [phase])

  // Pre-compute highlight ranges in subtext
  const highlightSubtextPhrases = useMemo(
    () => ['shape purchase decisions', 'content and website recommendations'],
    []
  )

  const highlightRanges = useMemo(() => {
    const ranges: { start: number; end: number }[] = []
    const lower = subtext.toLowerCase()
    for (const phrase of highlightSubtextPhrases) {
      let idx = lower.indexOf(phrase.toLowerCase())
      while (idx !== -1) {
        ranges.push({ start: idx, end: idx + phrase.length })
        idx = lower.indexOf(phrase.toLowerCase(), idx + 1)
      }
    }
    return ranges.sort((a, b) => a.start - b.start)
  }, [subtext, highlightSubtextPhrases])

  const handleScrollClick = useCallback(() => {
    const target = document.getElementById('cta-section')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const highlightPhrases = ['customer intelligence', 'AI Visibility']
  const words = tagline.split(' ')

  const highlightedIndices = new Set<number>()
  for (const phrase of highlightPhrases) {
    const phraseWords = phrase.toLowerCase().split(' ')
    for (let i = 0; i <= words.length - phraseWords.length; i++) {
      const match = phraseWords.every(
        (pw, j) => (words[i + j] ?? '').toLowerCase().replace(/[!.,]/g, '') === pw
      )
      if (match) {
        for (let j = 0; j < phraseWords.length; j++) {
          highlightedIndices.add(i + j)
        }
      }
    }
  }

  return (
    <header className={styles.hero}>
      {/* Top bar — brand left, book-a-call right */}
      <div className={styles.topBar}>
        <p
          ref={brandRef}
          className={`${styles.brand} ${
            phase >= 3 ? styles.brandVisible : phase >= 1 ? styles.brandSplash : ''
          }`}
          style={{
            '--splash-x': `${splashOffset.x}px`,
            '--splash-y': `${splashOffset.y}px`,
          } as React.CSSProperties}
        >
          <MonsteraIcon className={`${styles.brandIcon} ${phase >= 1 && phase < 3 ? styles.brandIconGlow : ''}`} />
          <span className={`${styles.brandText} ${phase >= 2 ? styles.brandTextVisible : ''}`}>
            {brandName}
          </span>
        </p>
        {/* <a href="#book-a-call" className={`${styles.bookCallBtn} ${phase >= 4 ? styles.fadeIn : ''}`}>
          Book a call
        </a> */}
      </div>

      <div className={`${styles.notepad} ${phase >= 4 ? styles.notepadVisible : ''}`}>
        <div className={`${styles.contentArea} ${phase >= 4 ? styles.contentVisible : ''}`}>
          <div className={styles.floatingIcons}>
            {icons.map((icon, i) => (
              <img
                key={i}
                src={icon.src}
                alt={icon.alt}
                className={styles.floatingIcon}
                style={{ ...icon.position, animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </div>
          <h1 className={styles.tagline}>
            {words.map((word, index) => (
              <span
                key={index}
                className={`${styles.word} ${highlightedIndices.has(index) ? styles.highlightedWord : ''}`}
                style={
                  phase >= 4
                    ? { animationDelay: `${index * 0.15}s` }
                    : undefined
                }
              >
                {word}
              </span>
            ))}
          </h1>
        </div>

        <button
          className={`${styles.earlyAccessBtn} ${phase >= 4 ? styles.fadeIn : ''}`}
          onClick={handleScrollClick}
        >
          Sign up for early access
        </button>

        {/* Subtext quote — friendly note from the team */}
        <blockquote className={`${styles.subtext} ${phase >= 5 ? styles.fadeIn : ''}`}>
          <div className={styles.subtextWrapper}>
            {/* Invisible full text — reserves final height */}
            <p className={styles.subtextSpacer}>{subtext}</p>
            {/* Typed text overlaid on top */}
            <p className={styles.subtextTyped}>
              {renderTypedSegments(subtext, typedCount, highlightRanges, phase >= 6)}
              {phase >= 5 && typedCount < subtext.length && (
                <span className={styles.cursor}>|</span>
              )}
            </p>
          </div>
          <cite className={`${styles.subtextAttribution} ${typedCount >= subtext.length ? styles.citeFadeIn : ''}`}>
            — The Asgar Team
          </cite>
        </blockquote>

        <div onClick={handleScrollClick} className={`${styles.navBar} ${phase >= 7 ? styles.fadeIn : ''}`}>
          <div className={styles.navTeaser}>
            <span className={styles.betaBadge}>Beta</span>
            <span className={styles.navLabel}>{ctaLabel}</span>
          </div>
          <ScrollIndicator onClick={handleScrollClick} />
        </div>
      </div>
    </header>
  )
}
