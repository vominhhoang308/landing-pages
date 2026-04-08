export type Cell = {
  text?: string
  muted?: boolean
  strong?: boolean
  bullets?: string[]
  bulletHeading?: string
  icon?: 'check'
}

export type Row = {
  label: string
  trials: Cell
  sprout: Cell
  seed: Cell
  fruit: Cell
}

export const tierHeaders = ['Trials', 'Sprout - monthly', 'Seed - monthly', 'Fruit - monthly'] as const

export const rows: Row[] = [
  {
    label: 'Price',
    trials: { text: 'Contact us', strong: true },
    sprout: { text: '699€', strong: true },
    seed: { text: '999€', strong: true },
    fruit: { text: 'Contact us', strong: true },
  },
  {
    label: 'Set up fee',
    trials: { text: 'Included' },
    sprout: { text: 'Included' },
    seed: { text: 'Included' },
    fruit: { text: 'Included' },
  },
  {
    label: 'Kickoff call',
    trials: { text: '30m - Included' },
    sprout: { text: '30m - Included' },
    seed: { text: '30m - Included' },
    fruit: { text: '60m - Included' },
  },
  {
    label: 'SEO/GEO/AEO/AIO Reviews',
    trials: { text: '1 product/ 1 site' },
    sprout: { text: '1 product/ 1 site' },
    seed: { text: '1 product / 1 site' },
    fruit: { text: '3 products/ 3 sites' },
  },
  {
    label: 'SEO/GEO/AEO/AIO Refresher',
    trials: { text: '1 existing page' },
    sprout: { text: '1 existing page' },
    seed: { text: '6 existing pages' },
    fruit: { text: '12 existing pages' },
  },
  {
    label: 'Publish-ready content',
    trials: { text: '1 piece' },
    sprout: { text: '1 piece' },
    seed: { text: '2 pieces', strong: true },
    fruit: { text: '4 pieces' },
  },
  {
    label: 'High intent Prompts <> ICP',
    trials: { text: '5 prompts <> 1 Persona' },
    sprout: { text: '25 prompts <> 1 Persona' },
    seed: { text: '50 prompts <> 2 Personas', strong: true },
    fruit: { text: '100 prompts <> 3 Personas' },
  },
  {
    label: 'Competitor content tracking',
    trials: { text: 'Not included', muted: true },
    sprout: { text: '1 competitor' },
    seed: { text: '2 competitors' },
    fruit: { text: '3+ competitors' },
  },
  {
    label: 'Industry trend tracking',
    trials: { text: 'Not included', muted: true },
    sprout: { text: 'Not included', muted: true },
    seed: { icon: 'check' },
    fruit: { icon: 'check' },
  },
  {
    label: 'Country tracking',
    trials: { text: 'Not included', muted: true },
    sprout: { text: '2 Countries' },
    seed: { text: '2 Countries' },
    fruit: { text: '2+ Countries' },
  },
  {
    label: 'Sync calls',
    trials: { text: 'Not included', muted: true },
    sprout: { text: 'Monthly sync calls' },
    seed: { text: 'Monthly sync calls' },
    fruit: { text: 'Weekly Sync calls' },
  },
  {
    label: 'Report Delivered',
    trials: {
      bulletHeading: 'One-time report includes:',
      bullets: [
        'Current visibility snapshot',
        'Current SEO/GEO/AEO/AIO readiness review',
        'Missing content signals',
      ],
    },
    sprout: {
      bulletHeading: 'Weekly report includes:',
      bullets: [
        'Current visibility snapshot',
        'Current SEO/GEO/AEO/AIO readiness reviews',
        'High-intent prompts tracking',
        'Missing content signals',
      ],
    },
    seed: {
      bulletHeading: 'Weekly report includes:',
      bullets: [
        'Current visibility snapshot',
        'Current SEO/GEO/AEO/AIO readiness reviews',
        'High-intent prompts tracking',
        'Missing content signals',
        'Competitor tracking',
      ],
    },
    fruit: {
      bulletHeading: 'Weekly report includes:',
      bullets: [
        'Current visibility snapshot',
        'Current SEO/GEO/AEO/AIO readiness reviews',
        'High-intent prompts tracking',
        'Missing content signals',
        'Competitor tracking',
      ],
    },
  },
]
