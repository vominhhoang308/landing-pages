# Tasks: Asgar.ai Landing Page

**Input**: Design documents from `/specs/001-asgar-landing-page/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/

**Tests**: Not explicitly requested in the feature specification. Test tasks are omitted.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize Vite + React + TypeScript project and configure tooling

- [x] T001 Initialize Vite project with React and TypeScript template, configure in package.json and vite.config.ts
- [x] T002 Install dependencies: react, react-dom, @types/react, @types/react-dom, vitest, eslint, prettier
- [x] T003 [P] Configure ESLint with TypeScript and React rules in eslint.config.js
- [x] T004 [P] Configure Prettier for consistent formatting in .prettierrc
- [x] T005 [P] Create TypeScript configuration in tsconfig.json and tsconfig.app.json
- [x] T006 Create directory structure: src/components/, src/tokens/, src/data/, public/fonts/, public/images/, tests/

---

## Phase 2: Foundational (Design Tokens & Shared Assets)

**Purpose**: Establish the design system tokens and global styles that ALL components depend on

**CRITICAL**: No component work can begin until design tokens and global styles are in place

- [x] T007 Define color tokens (green-900: #2B3D2B, green-800: #3A5A3A, cream-100: #F5F0E8, cream-200: #E8E0D0, white: #FFFFFF, green-accent: #4A7A4A) in src/tokens/colors.ts
- [x] T008 [P] Define typography tokens (DM Serif Display for headings, system sans-serif for body, font sizes, line heights) in src/tokens/typography.ts
- [x] T009 [P] Define spacing tokens (spacing scale, breakpoints: 320px, 768px, 1024px, 1440px max-width) in src/tokens/spacing.ts
- [x] T010 Create global CSS with CSS custom properties from all tokens, font-face declarations for DM Serif Display, and CSS reset in src/index.css
- [x] T011 Create base App component with semantic HTML structure (header, main, footer) in src/App.tsx and src/App.module.css
- [x] T012 Create entry point that renders App to DOM in src/main.tsx

**Checkpoint**: Foundation ready — design tokens loaded, global styles applied, app renders empty shell with correct background color

---

## Phase 3: User Story 1 - View Hero Section (Priority: P1) MVP

**Goal**: Full-viewport hero section with Asgar.ai branding, tagline, vertical CTA, and scroll indicator

**Independent Test**: Load the page and verify hero displays with correct dark green background, "Asgar.ai" brand name, "Innovation through change" tagline, vertical "Explore the Asgar.ai" label on right edge, and circular scroll indicator at bottom-right

### Implementation for User Story 1

- [x] T013 [US1] Create ScrollIndicator component with circular icon, cross/plus SVG symbol, CSS rotation animation, hover scale-up effect, click handler, and ARIA label in src/components/ScrollIndicator/ScrollIndicator.tsx and src/components/ScrollIndicator/ScrollIndicator.module.css
- [x] T014 [US1] Create Hero component with full-viewport layout, dark green background, centered brand name and tagline, vertical "Explore the Asgar.ai" label on right edge, ScrollIndicator at bottom-right, and smooth scroll-to-content click handler in src/components/Hero/Hero.tsx and src/components/Hero/Hero.module.css
- [x] T015 [US1] Add responsive styles for Hero: mobile (stacked layout, reduced font sizes, CTA repositioned), tablet (intermediate sizing), desktop (full reference layout) in src/components/Hero/Hero.module.css
- [x] T016 [US1] Add reduced-motion media query support for ScrollIndicator animation in src/components/ScrollIndicator/ScrollIndicator.module.css
- [x] T017 [US1] Integrate Hero component into App as first section in src/App.tsx

**Checkpoint**: Hero section fully functional — page loads with pixel-perfect hero matching reference design, scroll indicator animates, click scrolls down

---

## Phase 4: Footer

**Goal**: Footer with copyright, legal links, and creator credits

**Independent Test**: Scroll to bottom and verify footer displays copyright for Asgar.ai, functional legal links, and creator credits

### Implementation

- [x] T018 [US2] Define FooterLink TypeScript interface and create footer link data (imprint, credits) in src/data/footerLinks.ts
- [x] T019 [US2] Create Footer component with copyright holder (Asgar.ai), current year, legal links, creator credit text, hover/focus states on links, and layout matching reference design in src/components/Footer/Footer.tsx and src/components/Footer/Footer.module.css
- [x] T020 [US2] Add responsive styles for Footer in src/components/Footer/Footer.module.css
- [x] T021 [US2] Integrate Footer component into App as final section in src/App.tsx

**Checkpoint**: Footer fully functional — complete page now renders hero and footer

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Accessibility, performance, and final pixel-perfect adjustments

- [x] T022 Add skip-to-content link as first focusable element in src/App.tsx
- [x] T023 [P] Verify and fix color contrast ratios (≥4.5:1 body, ≥3:1 large text) across all components
- [x] T024 [P] Verify keyboard navigability for all interactive elements (scroll indicator, footer links)
- [x] T025 [P] Add proper semantic HTML landmarks (header, main, footer) and ARIA labels across all components
- [x] T026 Optimize font loading: preload DM Serif Display, add font-display: swap, configure subset in src/index.css and index.html
- [x] T027 [P] Add meta tags (viewport, description, Open Graph) in index.html
- [x] T028 Verify responsive behavior at edge cases: 320px minimum, 2560px maximum, max-width 1440px content cap
- [x] T029 Final pixel-perfect review: compare each section against reference design and adjust spacing, typography, and proportions

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational — delivers MVP
- **Footer (Phase 4)**: Depends on Foundational + App shell from US1 integration
- **Polish (Phase 5)**: Depends on all previous phases being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational — No dependencies on other stories
- **Footer**: Can start after US1 integration (needs App shell) — independently testable

### Within Each User Story

- Data/types before components
- Component implementation before responsive styles
- Responsive styles before App integration
- Story complete before moving to next priority

### Parallel Opportunities

- T003, T004, T005 can run in parallel (different config files)
- T008, T009 can run in parallel (different token files)
- T023, T024, T025, T027 can run in parallel (different concerns, different files)

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001–T006)
2. Complete Phase 2: Foundational (T007–T012)
3. Complete Phase 3: User Story 1 (T013–T017)
4. **STOP and VALIDATE**: Page loads with pixel-perfect hero section
5. Deploy/demo if ready

### Incremental Delivery

1. Setup + Foundational → Project scaffolded with design tokens
2. Add User Story 1 → Hero section live (MVP!)
3. Add Footer → Footer completes the page
4. Polish → Accessibility, performance, pixel-perfect final review

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- No test tasks included (not requested in spec) — add via /speckit.tasks with TDD flag if needed
