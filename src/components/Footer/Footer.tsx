import { Link } from 'react-router-dom'
import type { FooterLink } from '../../data/footerLinks'
import styles from './Footer.module.css'

interface FooterProps {
  copyrightHolder: string
  copyrightYear: number
  links: FooterLink[]
  creditText: string
}

export function Footer({ copyrightHolder, copyrightYear, links, creditText }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {copyrightYear} {copyrightHolder}
        </p>

        <nav className={styles.links} aria-label="Footer navigation">
          {links.map((link) =>
            link.isExternal ? (
              <a
                key={link.href}
                href={link.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.href} to={link.href} className={styles.link}>
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <p className={styles.credit}>{creditText}</p>
      </div>
    </footer>
  )
}
