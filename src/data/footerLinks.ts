export interface FooterLink {
  label: string
  href: string
  isExternal: boolean
}

export const footerLinks: FooterLink[] = [
  {
    label: 'Privacy Policy',
    href: '/privacy',
    isExternal: false,
  },
]
