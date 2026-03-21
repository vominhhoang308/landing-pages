import { Hero } from '../../components/Hero/Hero'
import { CtaSection } from '../../components/CtaSection/CtaSection'
import { Footer } from '../../components/Footer/Footer'
import { footerLinks } from '../../data/footerLinks'
import styles from '../../App.module.css'

export function HomePage() {
  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>
      <Hero
        brandName="Asgar.ai"
        tagline="An engine to turn customer intelligence into contents that wins AI Visibility!"
        subtext="We are witnessing a real shift in buyer behavior. More people are using AI engines to research products, compare vendors, and shape purchase decisions. At Asgar.ai, we are helping marketers turn your customer insights and market signals into content and website recommendations that improve AI visibility."
        ctaLabel="Claim your FREE GEO Strategy Guide & Sign up for early access"
      />
      <main className={styles.main} id="main-content">
        <CtaSection
          backendUrl={import.meta.env.VITE_API_URL ?? '/api/subscribe'}
          pdfPath="/geoguide/AsgarAI_GEO_Guide_2026.pdf"
        />
      </main>
      <Footer
        copyrightHolder="Asgar.ai"
        copyrightYear={new Date().getFullYear()}
        links={footerLinks}
        creditText="Made with love by Asgar.ai"
      />
    </>
  )
}
