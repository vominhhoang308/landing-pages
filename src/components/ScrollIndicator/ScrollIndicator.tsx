import styles from './ScrollIndicator.module.css'

interface ScrollIndicatorProps {
  onClick: () => void
}

export function ScrollIndicator({ onClick }: ScrollIndicatorProps) {
  return (
    <button
      className={styles.indicator}
      onClick={onClick}
      aria-label="Scroll to content"
      type="button"
    >
      <svg className={styles.icon} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="9" />
        <line x1="10" y1="4" x2="10" y2="16" />
        <line x1="4" y1="10" x2="16" y2="10" />
      </svg>
    </button>
  )
}
