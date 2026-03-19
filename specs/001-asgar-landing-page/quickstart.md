# Quickstart: Asgar.ai Landing Page

**Feature**: 001-asgar-landing-page
**Date**: 2026-03-18

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ or pnpm 8+

## Setup

```bash
# Clone and switch to feature branch
git clone <repo-url>
cd landing-pages
git checkout 001-asgar-landing-page

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server runs at `http://localhost:5173` with hot module replacement.

## Project Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all source files |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run unit tests with Vitest |
| `npm run test:e2e` | Run Playwright e2e tests |
| `npm run test:visual` | Run visual regression tests |
| `npm run test:a11y` | Run accessibility audit with axe-core |

## Key Directories

| Path | Purpose |
|------|---------|
| `src/components/` | React components organized by page section |
| `src/tokens/` | Design tokens (colors, typography, spacing) |
| `src/data/` | Static content data (milestones, service links) |
| `public/fonts/` | Self-hosted font files |
| `public/images/` | Static images and icons |
| `tests/` | Test files (unit, e2e, visual) |

## Design Tokens

Colors, typography, and spacing are defined in `src/tokens/`. These values are exported as CSS custom properties in `src/index.css` and imported in component CSS Modules.

```
src/tokens/
├── colors.ts      # green-900, cream-100, etc.
├── typography.ts   # font families, sizes, weights
└── spacing.ts      # spacing scale, breakpoints
```

## Adding Content

Milestone data lives in `src/data/milestones.ts`. To add or update milestones:

1. Edit the milestones array in `src/data/milestones.ts`
2. Each entry needs: `year`, `title`, `description`, `order`
3. The Timeline component renders them sorted by `order`

## Reference Design

The visual reference is [greencube.space/en](https://greencube.space/en/). All layout, spacing, typography, and color decisions should match this reference with "Asgar.ai" replacing "GreenCube".
