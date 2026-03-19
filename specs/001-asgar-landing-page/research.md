# Research: Asgar.ai Landing Page

**Feature**: 001-asgar-landing-page
**Date**: 2026-03-18

## R1: Serif Font Selection

**Decision**: Use "DM Serif Display" (Google Fonts) for headings and brand text, with "DM Serif Text" for body serif needs.

**Rationale**: The reference site (greencube.space) uses a high-contrast transitional serif with distinctive letterforms — notably the characteristic "u" with a visible gap/break and elegant swash-like terminals. DM Serif Display is an open-source Google Font that closely matches this aesthetic: high stroke contrast, elegant ball terminals, and a warm editorial feel. It is free, performant (subset-able via Google Fonts API), and widely supported.

**Alternatives considered**:
- **Playfair Display**: Similar high-contrast serif but rounder and less editorial in character. Lacks the distinctive gap details seen in the reference.
- **Cormorant Garamond**: Elegant but thinner weight and less impact at large display sizes.
- **PP Editorial New**: Closest visual match to the reference but is a commercial/premium font requiring a license purchase. Not suitable for an open project without budget confirmation.
- **Libre Caslon Display**: Good alternative but limited weight options.

## R2: Color Palette Identification

**Decision**: Use the following color palette extracted from visual analysis of the reference design:

| Token | Hex | Usage |
|-------|-----|-------|
| `green-900` | `#2B3D2B` | Primary background (hero, sections) |
| `green-800` | `#3A5A3A` | Secondary background / hover states |
| `cream-100` | `#F5F0E8` | Primary text on dark backgrounds |
| `cream-200` | `#E8E0D0` | Secondary text / muted elements |
| `white` | `#FFFFFF` | Light section backgrounds |
| `green-accent` | `#4A7A4A` | Accent elements, borders, icons |

**Rationale**: Colors extracted by visual analysis of the screenshot. The dark green is a muted, warm forest green (not bright or saturated). The text color is a warm cream/off-white, not pure white — this gives the page its editorial, premium feel.

**Alternatives considered**:
- Pure black/white contrast: Too harsh, loses the warm editorial aesthetic.
- Brighter greens: Would diverge from the reference's muted, sophisticated tone.

## R3: Build Tool and Framework Setup

**Decision**: Use Vite 5 with React 18 and TypeScript.

**Rationale**: Vite provides fast HMR during development, optimized production builds with tree-shaking and code-splitting, and native TypeScript support. It's the modern standard for new React projects and easily meets the ≤500KB bundle budget for a landing page. React 18 is specified by the user.

**Alternatives considered**:
- **Create React App (CRA)**: Deprecated/unmaintained; slower builds; larger output.
- **Next.js**: SSR/SSG capabilities are overkill for a single static landing page with no routing or data fetching needs. Adds unnecessary complexity.
- **Parcel**: Simpler zero-config but less ecosystem support and plugin availability than Vite.

## R4: Styling Approach

**Decision**: CSS Modules with design tokens defined in TypeScript.

**Rationale**: CSS Modules provide scoped styles without runtime overhead (unlike CSS-in-JS). Design tokens in TypeScript files ensure type-safe token usage and can be imported directly into CSS Modules via CSS custom properties. This approach meets the constitution's requirement for design tokens as single source of truth while keeping the bundle lean.

**Alternatives considered**:
- **styled-components**: Runtime CSS-in-JS adds ~12KB to bundle and has runtime performance cost. Not justified for a static landing page.
- **Tailwind CSS**: Utility-first approach makes pixel-perfect replication harder — custom values would dominate, negating Tailwind's benefits. Also diverges from the component-scoped styling pattern.
- **Sass/SCSS**: Viable but CSS Modules already provide nesting (via CSS nesting) and scoping without an extra preprocessor dependency.

## R5: Responsive Strategy

**Decision**: Mobile-first responsive design with three breakpoints:
- Mobile: 320px – 767px
- Tablet: 768px – 1023px
- Desktop: 1024px+
- Wide cap: max-width 1440px centered content with 2560px background support

**Rationale**: Matches FR-007 requirements. Mobile-first ensures core content is always accessible. Wide cap at 1440px prevents content from stretching on ultra-wide displays while allowing backgrounds to extend full-width.

**Alternatives considered**:
- Desktop-first: Harder to ensure mobile quality; not recommended for modern web.
- Fluid-only (no breakpoints): Insufficient control for pixel-perfect replication across device classes.

## R6: Animation and Interaction Patterns

**Decision**: CSS-only animations for scroll indicator rotation and hover states. Intersection Observer API for scroll-triggered section reveals.

**Rationale**: The reference site has subtle animations: a rotating/pulsing scroll indicator icon and smooth section transitions on scroll. CSS animations handle the indicator with zero JS overhead. Intersection Observer is a native browser API (no library needed) for triggering fade-in/slide-up effects as sections enter the viewport.

**Alternatives considered**:
- **Framer Motion**: Powerful but adds ~30KB to bundle for animations that CSS can handle natively.
- **GSAP**: Industry-standard animation library but overkill for the subtle effects on this page.
- **No animations**: Would miss the polished feel of the reference design.
