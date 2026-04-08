import { Helmet } from 'react-helmet-async'

interface SeoProps {
  title: string
  description: string
  canonical: string
  robots?: string
  jsonLd?: object | object[]
  image?: string
}

const DEFAULT_IMAGE = 'https://asgar.ai/favicon.svg'

export function Seo({
  title,
  description,
  canonical,
  robots = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  jsonLd,
  image = DEFAULT_IMAGE,
}: SeoProps) {
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Asgar.ai" />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Asgar.ai logo" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLdArray.map((node, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(node)}
        </script>
      ))}
    </Helmet>
  )
}
