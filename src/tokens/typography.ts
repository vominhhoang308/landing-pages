export const typography = {
  fontSerif: '"DM Serif Display", Georgia, "Times New Roman", serif',
  fontSerifText: '"DM Serif Text", Georgia, "Times New Roman", serif',
  fontSans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

  heroTitle: 'clamp(3rem, 8vw, 8rem)',
  heroBrand: 'clamp(1.5rem, 3vw, 2.5rem)',
  sectionTitle: 'clamp(2rem, 5vw, 5rem)',
  timelineYear: 'clamp(3rem, 8vw, 7rem)',
  bodyLarge: 'clamp(1rem, 1.5vw, 1.25rem)',
  body: '1rem',
  small: '0.875rem',
  caption: '0.75rem',

  lineHeightTight: '1.1',
  lineHeightNormal: '1.5',
  lineHeightRelaxed: '1.7',

  weightRegular: '400',
} as const

export type TypographyToken = keyof typeof typography
