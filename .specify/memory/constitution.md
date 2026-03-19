<!--
SYNC IMPACT REPORT
==================
Version change: [template] → 1.0.0 (MAJOR — first ratification; all content new)

Modified principles: N/A (all principles newly established)

Added sections:
  - Core Principles (4 principles: Code Quality, Testing Standards, UX Consistency, Performance)
  - Performance & Quality Gates
  - Development Workflow
  - Governance

Removed sections: N/A

Templates reviewed:
  - .specify/templates/plan-template.md         ✅ Constitution Check section aligns with gates below
  - .specify/templates/spec-template.md         ✅ Success Criteria / Measurable Outcomes consistent with perf + UX principles
  - .specify/templates/tasks-template.md        ✅ Test task categories and Polish phase align with testing + quality principles
  - .specify/templates/agent-file-template.md   ✅ No outdated references

Deferred TODOs: None
-->

# Asgar Landing Pages Constitution

## Core Principles

### I. Code Quality

All code MUST be clean, purposeful, and maintainable. Every file, function, and component
MUST have a single, clear responsibility. Complexity MUST be justified — if a simpler
solution exists, it MUST be used instead.

- Code MUST pass linting and formatting checks before merge (no lint errors, no warnings suppressed without comment).
- Functions MUST be kept short and focused; any function exceeding 40 lines MUST be reviewed for decomposition.
- Magic numbers and strings MUST be replaced with named constants.
- Dead code, commented-out blocks, and unused imports MUST NOT be committed.
- Dependencies MUST be evaluated for necessity before introduction; unused packages MUST be removed.

**Rationale**: Landing pages have a long maintenance life and are frequently handed off.
Readable, purposeful code reduces onboarding cost and prevents accumulation of technical debt.

### II. Testing Standards

Every user-facing feature MUST have acceptance tests before the implementation is considered
complete. Test-Driven Development (TDD) is the default workflow — tests MUST be written
and confirmed to fail before implementation begins.

- Each user story MUST have at least one independently executable acceptance test.
- Visual regression tests MUST cover all primary page layouts.
- Unit tests MUST cover all utility functions and data-transformation logic.
- Tests MUST NOT be mocked at the integration boundary unless the external service is
  unavailable in CI; document all mocks explicitly.
- CI MUST enforce a minimum 80% statement coverage threshold; coverage MAY NOT drop
  between merges without explicit team approval.
- Flaky tests MUST be quarantined and fixed within the same sprint they are detected.

**Rationale**: Landing pages drive conversion; untested changes risk regressions that
directly impact business outcomes. Automated tests provide the safety net for rapid iteration.

### III. User Experience Consistency

All UI components MUST adhere to the project design system. No one-off styles, colors,
spacings, or typographic choices are permitted outside the design token definitions.

- Design tokens (colors, spacing scale, typography, border radii) MUST be the single source
  of truth; hardcoded CSS values are forbidden.
- Interactive elements (buttons, links, forms) MUST follow the established interaction
  patterns: hover states, focus indicators, loading states, error states.
- All pages MUST be responsive across the defined breakpoints (mobile, tablet, desktop).
- Accessibility MUST meet WCAG 2.1 AA as a minimum: semantic HTML, keyboard navigability,
  sufficient color contrast (≥ 4.5:1 for body text), and ARIA labels where required.
- New components MUST be reviewed against the design system before implementation.

**Rationale**: Inconsistent UX erodes user trust and brand perception.
Design system enforcement ensures visual coherence as the product scales across
multiple landing pages.

### IV. Performance Requirements

Every landing page MUST meet Core Web Vitals thresholds measured in the production
environment on a mid-range mobile device (4G connection baseline).

- **LCP** (Largest Contentful Paint): MUST be ≤ 2.5 s.
- **CLS** (Cumulative Layout Shift): MUST be ≤ 0.1.
- **INP** (Interaction to Next Paint): MUST be ≤ 200 ms.
- **Total page weight**: MUST NOT exceed 500 KB (compressed) for the initial load.
- Images MUST be served in modern formats (WebP/AVIF), sized appropriately, and
  lazily loaded below the fold.
- Third-party scripts MUST be audited before inclusion; each script MUST justify its
  performance cost against its business value.
- Performance budgets MUST be enforced in CI; a build that exceeds any threshold MUST
  fail and MUST NOT be deployed.

**Rationale**: Page speed is a direct driver of conversion rates and SEO ranking.
Strict, automated performance gates prevent gradual regression across the portfolio.

## Performance & Quality Gates

These gates MUST pass before any feature branch is merged:

| Gate | Tool / Command | Threshold |
|------|---------------|-----------|
| Lint | project lint script | Zero errors |
| Unit & integration tests | project test script | All passing, ≥ 80% coverage |
| Visual regression | project visual-test script | Zero unapproved diffs |
| Bundle size | build output analysis | ≤ 500 KB initial load |
| Core Web Vitals (LCP) | Lighthouse CI | ≤ 2.5 s |
| Core Web Vitals (CLS) | Lighthouse CI | ≤ 0.1 |
| Core Web Vitals (INP) | Lighthouse CI | ≤ 200 ms |
| Accessibility | axe / Lighthouse | WCAG 2.1 AA — zero critical violations |

All gates MUST be automated in CI. Manual overrides require team lead approval and
MUST be logged with a justification comment on the PR.

## Development Workflow

- Features MUST be developed on dedicated branches; direct commits to `main` are forbidden.
- Pull requests MUST include: a summary of changes, test evidence, and a Constitution
  Check confirming all four Core Principles are satisfied.
- Code review MUST be completed by at least one peer before merge.
- The TDD cycle MUST be followed: write failing tests → get approval → implement → refactor.
- Performance budgets and visual regression baselines MUST be updated as part of the
  feature PR, not in a follow-up.

## Governance

This Constitution supersedes all other written or verbal development practices for the
Asgar Landing Pages project. Where a conflict exists between this document and any other
guideline, this Constitution takes precedence.

**Amendment procedure**:

1. Author a written proposal describing the change and the rationale.
2. Obtain approval from at least one additional team member.
3. Update this file, increment the version, and set `Last Amended` to the amendment date.
4. Propagate any impacts to dependent templates (see Sync Impact Report header).
5. Announce the change in the team channel.

**Versioning policy**: Follow semantic versioning.
- MAJOR: Removal or redefinition of a Core Principle.
- MINOR: New principle or section added; material guidance expansion.
- PATCH: Clarifications, wording, or non-semantic refinements.

**Compliance review**: Constitution compliance MUST be verified on every PR via the
Constitution Check section of `plan.md`. Any violation MUST be justified in the
Complexity Tracking table or resolved before merge.

**Version**: 1.0.0 | **Ratified**: 2026-03-04 | **Last Amended**: 2026-03-04
