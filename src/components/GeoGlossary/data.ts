export interface GlossaryTerm {
  term: string
  definition: string
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'GEO (Generative Engine Optimization)',
    definition:
      'The practice of structuring content and website signals so that generative AI engines surface and cite your brand.',
  },
  {
    term: 'AI Visibility',
    definition:
      'The share of buyer-intent prompts where an AI engine mentions or cites your brand in its answer.',
  },
  {
    term: 'High-intent prompt',
    definition:
      'A prompt phrased the way a real buyer researches a purchase decision; the unit of measurement in GEO.',
  },
  {
    term: 'Entity validation',
    definition:
      'Proving to AI knowledge graphs that your brand is an authoritative entity in its category.',
  },
  {
    term: 'RAG visibility lift',
    definition:
      'The measurable increase in brand mentions across retrieval-augmented generation answers after an SEO/GEO/AEO/AIO engagement.',
  },
  {
    term: 'AEO (Answer Engine Optimization)',
    definition:
      'Optimizing content and structured data so answer engines (Perplexity, Google AI Overviews, Bing Copilot answers) return your brand as the direct answer to buyer questions.',
  },
  {
    term: 'AIO (AI Optimization)',
    definition:
      'The broader practice of making a brand, its entities, and its content legible and trustworthy to AI systems end-to-end, from training-data presence to runtime retrieval.',
  },
]
