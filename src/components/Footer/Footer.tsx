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
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              {...(link.isExternal
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className={styles.credit}>{creditText}</p>
      </div>
    </footer>
  )
}
