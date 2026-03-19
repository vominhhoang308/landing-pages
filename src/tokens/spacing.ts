export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
  xxxl: '4rem',
  section: '6rem',
} as const

export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
  maxBg: '2560px',
} as const

export type SpacingToken = keyof typeof spacing
export type BreakpointToken = keyof typeof breakpoints
