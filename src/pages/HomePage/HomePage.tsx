import { useState } from 'react'
import { Hero } from '../../components/Hero/Hero'
import { CtaSection } from '../../components/CtaSection/CtaSection'
import { Footer } from '../../components/Footer/Footer'
import { TopNav } from '../../components/TopNav/TopNav'
import { CoreExpertise } from '../../components/CoreExpertise/CoreExpertise'
import { StrategyCommand } from '../../components/StrategyCommand/StrategyCommand'
import { PricingTiers } from '../../components/PricingTiers/PricingTiers'
import { FinalCta } from '../../components/FinalCta/FinalCta'
import { HowItWorks } from '../../components/HowItWorks/HowItWorks'
import { FaqSection } from '../../components/FaqSection/FaqSection'
import { GeoGlossary } from '../../components/GeoGlossary/GeoGlossary'
import { Seo } from '../../components/Seo/Seo'
import { footerLinks } from '../../data/footerLinks'
import { faqItems } from '../../data/faq'
import { howItWorksSteps } from '../../components/HowItWorks/data'
import { glossaryTerms } from '../../components/GeoGlossary/data'
import styles from '../../App.module.css'

const ORG_ID = 'https://asgar.ai/#organization'

const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://asgar.ai/#service',
    name: 'SEO, GEO, AEO & AIO Services',
    serviceType: ['SEO', 'GEO', 'AEO', 'AIO'],
    description:
      'Full-service SEO, GEO, AEO, and AIO agency that partners with marketing teams to win visibility across Google, ChatGPT, Gemini, Perplexity, Claude, and Copilot, covering traditional search, generative engines, and answer engines.',
    provider: { '@id': ORG_ID },
    areaServed: 'Global',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Asgar.ai SEO/GEO/AEO/AIO Pricing Tiers',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Trials',
          description:
            'One-time SEO/GEO/AEO/AIO visibility snapshot with readiness review and missing content signals.',
        },
        {
          '@type': 'Offer',
          name: 'Sprout',
          description:
            'Monthly SEO/GEO/AEO/AIO engagement: 1 publish-ready piece, 25 high-intent prompts, competitor tracking, weekly reports.',
        },
        {
          '@type': 'Offer',
          name: 'Seed',
          description:
            'Monthly SEO/GEO/AEO/AIO engagement: 2 publish-ready pieces, 50 high-intent prompts across 2 personas, industry trend tracking, weekly reports.',
        },
        {
          '@type': 'Offer',
          name: 'Fruit',
          description:
            'Monthly SEO/GEO/AEO/AIO engagement: 4 publish-ready pieces, 100 high-intent prompts across 3 personas, weekly sync calls, weekly reports.',
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How an Asgar.ai SEO/GEO/AEO/AIO engagement works',
    description:
      'The four-step process Asgar.ai uses to take a brand from invisible to cited across generative AI engines.',
    step: howItWorksSteps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.title,
      text: step.description,
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Asgar.ai SEO, GEO, AEO & AIO glossary',
    hasDefinedTerm: glossaryTerms.map((entry) => ({
      '@type': 'DefinedTerm',
      name: entry.term,
      description: entry.definition,
      inDefinedTermSet: 'https://asgar.ai/#glossary',
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://asgar.ai/',
      },
    ],
  },
]

export function HomePage() {
  const [siteReady, setSiteReady] = useState(false)
  return (
    <>
      <Seo
        title="Asgar.ai: SEO, GEO, AEO & AIO Agency for AI Visibility"
        description="Asgar.ai is a full-service SEO, GEO, AEO, and AIO agency helping marketers win visibility across Google, ChatGPT, Gemini, Perplexity, Claude, and Copilot."
        canonical="https://asgar.ai/"
        jsonLd={homeJsonLd}
      />
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>
      <TopNav onSplashComplete={() => setSiteReady(true)} />
      <div className={`${styles.siteBody} ${siteReady ? styles.siteBodyVisible : ''}`}>
        {siteReady && (
          <>
            <Hero
              tagline="Your SEO, GEO, AEO & AIO partner for winning AI Visibility."
              subtext="Buyer behavior is shifting fast. More people research products, compare vendors, and make purchase decisions through AI engines. Asgar.ai is a full-service SEO, GEO, AEO, and AIO agency that partners with marketing teams to turn customer insights and market signals into content and website recommendations that win visibility across search, generative, and answer engines."
              ctaLabel="Claim your free SEO/GEO/AEO/AIO Strategy Guide."
            />
            <main className={styles.main} id="main-content">
              <CoreExpertise />
              <StrategyCommand />
              <HowItWorks />
              <PricingTiers />
              <FaqSection />
              <GeoGlossary />
              <FinalCta />
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
        )}
      </div>
    </>
  )
}
