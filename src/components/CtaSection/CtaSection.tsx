import { FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import styles from './CtaSection.module.css'

interface CtaSectionProps {
  backendUrl: string
  pdfPath: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

function triggerDownload(pdfPath: string) {
  const link = document.createElement('a')
  link.href = pdfPath
  link.download = ''
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function CtaSection({ backendUrl, pdfPath }: CtaSectionProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      if (!email || status === 'submitting') return

      setStatus('submitting')
      setErrorMessage('')

      try {
        const res = await fetch(backendUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        })

        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error(data.error || 'Something went wrong. Please try again.')
        }

        setStatus('success')
        triggerDownload(pdfPath)
      } catch (err) {
        setStatus('error')
        setErrorMessage(
          err instanceof Error ? err.message : 'Something went wrong. Please try again.'
        )
        // Graceful degradation: still allow download on error
        triggerDownload(pdfPath)
      }
    },
    [email, status, backendUrl, pdfPath]
  )

  return (
    <section id="cta-section" ref={sectionRef} className={styles.section}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 className={styles.heading}>
          Asgar.ai is in <span className={styles.headingHighlight}>Beta</span>
        </h2>
        <p className={styles.subheading}>
          Get our free GEO Strategy Guide - a practical playbook to make your brand visible in AI
          engines like ChatGPT, Gemini, and Perplexity.
        </p>

        {status === 'success' ? (
          <p className={styles.successMessage}>
            &#10003; You're in! Your guide is downloading now.
          </p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              className={styles.emailInput}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button
              type="submit"
              className={styles.submitButton}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : 'Get the Free Guide'}
            </button>
          </form>
        )}

        {status === 'error' && <p className={styles.errorMessage}>{errorMessage}</p>}

        <p className={styles.finePrint}>
          We'll also sign you up for early beta access. You can opt-out at any time!
        </p>
      </div>
    </section>
  )
}
