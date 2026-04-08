import { PageHeader } from '../../components/PageHeader/PageHeader'
import { Footer } from '../../components/Footer/Footer'
import { Seo } from '../../components/Seo/Seo'
import { footerLinks } from '../../data/footerLinks'
import styles from './PrivacyPolicy.module.css'

export function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy: Asgar.ai"
        description="Privacy Policy for Asgar.ai: how we collect, use, and protect your information when you visit asgar.ai or use our SEO/GEO/AEO/AIO agency services."
        canonical="https://asgar.ai/privacy"
        robots="noindex,follow"
      />
      <PageHeader />
      <main className={styles.main}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: March 21, 2026</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Introduction</h2>
          <p>
            Asgar.ai (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the
            asgar.ai website and provides SEO, GEO, AEO, and AIO agency
            services. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website or use our
            agency services.
          </p>
          <p>
            By accessing or using our website, you agree to the terms of this
            Privacy Policy. If you do not agree, please do not use our website.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Contact information:</strong> Email address provided when
              subscribing to updates or downloading our SEO/GEO/AEO/AIO Strategy Guide.
            </li>
            <li>
              <strong>Company information:</strong> Company name or role, if
              voluntarily provided.
            </li>
            <li>
              <strong>Usage data:</strong> Pages visited, time spent on pages,
              referring URLs, and other interaction data.
            </li>
            <li>
              <strong>Device information:</strong> Browser type, operating
              system, screen resolution, and IP address.
            </li>
            <li>
              <strong>Cookies:</strong> Small data files stored on your device to
              improve your experience. See Section 8 for details.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide updates on our agency services and industry insights.</li>
            <li>Deliver the SEO/GEO/AEO/AIO Strategy Guide and related resources.</li>
            <li>
              Send service updates, new offering announcements, and relevant
              communications (with your consent).
            </li>
            <li>Improve and optimize our website and services.</li>
            <li>Analyze usage trends and measure the effectiveness of our content.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            4. Legal Basis for Processing (GDPR)
          </h2>
          <p>
            If you are located in the European Economic Area (EEA), we process
            your personal data based on the following legal grounds:
          </p>
          <ul>
            <li>
              <strong>Consent:</strong> When you subscribe to communications or
              request services.
            </li>
            <li>
              <strong>Legitimate interest:</strong> For analytics and improving
              our services, where your rights do not override our interests.
            </li>
            <li>
              <strong>Contract performance:</strong> To deliver services you have
              requested, such as the SEO/GEO/AEO/AIO Strategy Guide.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Data Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information. We may
            share data with trusted third-party service providers who assist us
            in operating our website and services, including:
          </p>
          <ul>
            <li>
              <strong>Hosting providers:</strong> For website infrastructure and
              data storage.
            </li>
            <li>
              <strong>Email service providers:</strong> To deliver communications
              and the SEO/GEO/AEO/AIO Strategy Guide.
            </li>
            <li>
              <strong>Analytics providers:</strong> To understand how our website
              is used.
            </li>
          </ul>
          <p>
            These providers are contractually obligated to protect your data and
            may only use it to perform services on our behalf.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill
            the purposes described in this policy, or as required by law.
            Specifically:
          </p>
          <ul>
            <li>
              Newsletter and inquiry data is retained for the duration of your
              relationship with us.
            </li>
            <li>
              Analytics data is retained in aggregated, anonymized form
              indefinitely.
            </li>
            <li>
              You may request deletion of your personal data at any time by
              contacting us (see Section 12).
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Your Rights (GDPR)</h2>
          <p>
            If you are located in the EEA, you have the following rights
            regarding your personal data:
          </p>
          <ul>
            <li>
              <strong>Right of access:</strong> Request a copy of the data we
              hold about you.
            </li>
            <li>
              <strong>Right to rectification:</strong> Request correction of
              inaccurate data.
            </li>
            <li>
              <strong>Right to erasure:</strong> Request deletion of your data
              (&quot;right to be forgotten&quot;).
            </li>
            <li>
              <strong>Right to data portability:</strong> Receive your data in a
              structured, machine-readable format.
            </li>
            <li>
              <strong>Right to object:</strong> Object to the processing of your
              data for certain purposes.
            </li>
            <li>
              <strong>Right to withdraw consent:</strong> Withdraw consent at any
              time where processing is based on consent.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at the address
            provided in Section 12.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Cookies &amp; Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience. These include:
          </p>
          <ul>
            <li>
              <strong>Essential cookies:</strong> Required for the website to
              function properly.
            </li>
            <li>
              <strong>Analytics cookies:</strong> Help us understand how visitors
              interact with our website.
            </li>
          </ul>
          <p>
            We do not use marketing or advertising trackers. You can manage
            cookie preferences through your browser settings.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. International Data Transfers</h2>
          <p>
            Your data may be transferred to and processed in countries outside
            your country of residence, including countries that may not provide
            the same level of data protection. Where such transfers occur, we
            ensure appropriate safeguards are in place, such as Standard
            Contractual Clauses approved by the European Commission.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Children&apos;s Privacy</h2>
          <p>
            Our website and services are not directed to individuals under the
            age of 16. We do not knowingly collect personal data from children.
            If we become aware that we have collected data from a child under 16,
            we will take steps to delete that information promptly.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or applicable law. When we make material
            changes, we will update the &quot;Last updated&quot; date at the top
            of this page. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>12. Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy or wish to
            exercise your data protection rights, please contact us at:
          </p>
          <p>
            <a href="mailto:hoang.vo@asgar.ai" className={styles.contactLink}>
              hoang.vo@asgar.ai
            </a>
          </p>
        </section>
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
