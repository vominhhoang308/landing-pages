import { Link } from 'react-router-dom'
import styles from './PageHeader.module.css'

export function PageHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.homeLink}>
          Asgar.ai
        </Link>
      </div>
    </header>
  )
}
