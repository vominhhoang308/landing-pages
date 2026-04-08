export type ExpertiseCard = {
  icon: 'psychology' | 'map' | 'rocket'
  title: string
  description: string
  bullets: string[]
}

export const expertiseCards: ExpertiseCard[] = [
  {
    icon: 'psychology',
    title: 'Consultancy',
    description:
      'Expert guidance on navigating the shift from traditional search to AI-native discovery. We audit your technical readiness and identify high-impact opportunities.',
    bullets: [
      'SEO/GEO/AEO/AIO Readiness Audit',
      'Entity Relationship Mapping',
      'Technical LLM Compliance',
    ],
  },
  {
    icon: 'map',
    title: 'Strategy',
    description:
      'Customized roadmaps designed to secure citation dominance. We align your brand narrative with the information-retrieval patterns of modern LLMs.',
    bullets: [
      'Citation Probability Modeling',
      'ICP-Driven Intent Frameworks',
      'Competitor Gap Analysis',
    ],
  },
  {
    icon: 'rocket',
    title: 'Execution',
    description:
      'Hands-on implementation of high-authority content and technical optimizations. We build the assets that LLMs prioritize and cite.',
    bullets: [
      'Publish-Ready Authority Assets',
      'Semantic Content Updates',
      'Real-time Performance Tracking',
    ],
  },
]
