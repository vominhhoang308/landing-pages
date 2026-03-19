# Implementation Plan: Asgar.ai Landing Page

**Branch**: `001-asgar-landing-page` | **Date**: 2026-03-18 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-asgar-landing-page/spec.md`

## Summary

Build a pixel-perfect React.js landing page for Asgar.ai that replicates the layout, typography, color palette, and visual rhythm of greencube.space/en. All GreenCube branding is replaced with Asgar.ai. The page is English-only (no language toggle) and includes a full-viewport hero section, timeline milestones, services/navigation section, and footer. The project starts from scratch with no existing React setup.

## Technical Context

**Language/Version**: TypeScript 5.x with React 18
**Primary Dependencies**: React 18, React Router v6, Vite 5 (build tool), CSS Modules or styled-components for scoped styling
**Storage**: N/A (static landing page, no backend or database)
**Testing**: Vitest (unit), Playwright (visual regression + e2e), axe-core (accessibility)
**Target Platform**: Web — modern browsers (Chrome, Firefox, Safari, Edge, last 2 versions), mobile and desktop
**Project Type**: Static single-page web application (landing page)
**Performance Goals**: LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms, Lighthouse mobile ≥ 90, initial bundle ≤ 500KB compressed
**Constraints**: Pixel-perfect visual fidelity to reference design; English only; no backend; must meet WCAG 2.1 AA
**Scale/Scope**: Single landing page with 4 major sections (hero, timeline, services, footer)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Evidence |
|-----------|--------|----------|
| I. Code Quality | PASS | TypeScript enforces type safety; Vite + ESLint for linting; component-per-file architecture with single responsibility; design tokens as named constants eliminate magic values |
| II. Testing Standards | PASS | TDD workflow planned; Vitest for unit tests; Playwright for visual regression and e2e; axe-core for accessibility; CI enforces 80%+ coverage |
| III. UX Consistency | PASS | Design tokens (colors, spacing, typography) as single source of truth; responsive breakpoints at 320px/768px/1024px; WCAG 2.1 AA compliance; semantic HTML with ARIA labels |
| IV. Performance | PASS | Vite tree-shaking + code splitting; image optimization (WebP/AVIF, lazy loading below fold); performance budgets enforced in CI; target LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms, bundle ≤ 500KB |

**Gate Result**: PASS — All four principles satisfied. No violations requiring justification.

## Project Structure

### Documentation (this feature)

```text
specs/001-asgar-landing-page/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
│   └── ui-contracts.md
└── tasks.md             # Phase 2 output (via /speckit.tasks)
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Hero.module.css
│   ├── Timeline/
│   │   ├── Timeline.tsx
│   │   └── Timeline.module.css
│   ├── Services/
│   │   ├── Services.tsx
│   │   └── Services.module.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   └── ScrollIndicator/
│       ├── ScrollIndicator.tsx
│       └── ScrollIndicator.module.css
├── tokens/
│   ├── colors.ts
│   ├── typography.ts
│   └── spacing.ts
├── data/
│   └── milestones.ts
├── App.tsx
├── App.module.css
├── main.tsx
└── index.css

public/
├── fonts/
└── images/

tests/
├── unit/
├── e2e/
└── visual/
```

**Structure Decision**: Single-project frontend-only structure. No backend needed — this is a static landing page. Components are organized by page section (Hero, Timeline, Services, Footer) with co-located CSS Modules. Design tokens are centralized in `src/tokens/`. Milestone data is separated into `src/data/` for easy content updates.

## Complexity Tracking

> No violations detected — table not needed.
