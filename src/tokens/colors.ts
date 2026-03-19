export const colors = {
  green900: '#2B3D2B',
  green800: '#3A5A3A',
  greenAccent: '#4A7A4A',
  cream100: '#F5F0E8',
  cream200: '#E8E0D0',
  white: '#FFFFFF',
} as const

export type ColorToken = keyof typeof colors
