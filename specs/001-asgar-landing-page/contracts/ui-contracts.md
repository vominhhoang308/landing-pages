# UI Contracts: Asgar.ai Landing Page

**Feature**: 001-asgar-landing-page
**Date**: 2026-03-18

## Overview

This document defines the UI contracts for each page section component. Since this is a static landing page (no API), the contracts describe the component interfaces — their props, visual states, and responsive behavior.

## Component Contracts

### Hero

**Purpose**: Full-viewport brand introduction with tagline and scroll CTA.

**Props**:
```
brandName: string        // "Asgar.ai"
tagline: string          // "Innovation through change"
ctaLabel: string         // "Explore the Asgar.ai"
onScrollClick: () => void  // Scroll-to-content handler
```

**Visual States**:
| State | Description |
|-------|-------------|
| Default | Full viewport, dark green background, brand name + tagline centered, vertical CTA label on right edge, circular scroll icon bottom-right |
| Scroll indicator hover | Circular icon scales up slightly, cursor changes to pointer |
| Mobile | Typography scales down proportionally, vertical CTA label hidden or repositioned below content |

**Responsive Behavior**:
| Breakpoint | Layout |
|------------|--------|
| Mobile (<768px) | Stacked layout, reduced font sizes, CTA repositioned |
| Tablet (768px–1023px) | Intermediate sizing, vertical CTA visible |
| Desktop (≥1024px) | Full reference layout with vertical right-edge CTA |

---

### Timeline

**Purpose**: Display Asgar.ai milestones in chronological order.

**Props**:
```
milestones: Milestone[]  // Array of milestone data, sorted by order
```

**Visual States**:
| State | Description |
|-------|-------------|
| Default | Milestones displayed with large year numbers and descriptive text |
| Scroll-reveal | Each milestone fades/slides in as it enters the viewport |
| Mobile | Milestones stack vertically with full-width layout |

**Responsive Behavior**:
| Breakpoint | Layout |
|------------|--------|
| Mobile (<768px) | Single column, milestones stacked vertically |
| Tablet (768px–1023px) | Two-column or offset layout |
| Desktop (≥1024px) | Full reference layout with spatial arrangement matching greencube.space |

---

### Services

**Purpose**: Navigation section linking to Asgar.ai service areas.

**Props**:
```
links: ServiceLink[]  // Array of service link data, sorted by order
```

**Visual States**:
| State | Description |
|-------|-------------|
| Default | Service links displayed as styled navigation items |
| Hover | Link text/background transitions to indicate interactivity |
| Focus | Visible focus ring for keyboard navigation (WCAG 2.1 AA) |

**Responsive Behavior**:
| Breakpoint | Layout |
|------------|--------|
| Mobile (<768px) | Stacked list of links |
| Desktop (≥1024px) | Grid or multi-column layout matching reference |

---

### Footer

**Purpose**: Page footer with copyright, legal links, and credits.

**Props**:
```
copyrightHolder: string   // "Asgar.ai"
copyrightYear: number     // Current year
links: FooterLink[]       // Legal/navigation links
creditText: string        // Creator credit line
```

**Visual States**:
| State | Description |
|-------|-------------|
| Default | Copyright, links, and credits displayed in a compact footer layout |
| Link hover | Underline or color transition on footer links |
| Link focus | Visible focus indicator |

---

### ScrollIndicator

**Purpose**: Circular icon with rotation animation, inviting user to scroll down.

**Props**:
```
onClick: () => void  // Triggers smooth scroll to next section
```

**Visual States**:
| State | Description |
|-------|-------------|
| Default | Circular icon with cross/plus symbol, subtle rotation animation |
| Hover | Scale-up effect, pointer cursor |
| Focus | Visible focus ring |

## Accessibility Contract

All components MUST meet:
- Semantic HTML elements (header, main, nav, footer, section)
- Keyboard navigability for all interactive elements
- Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text
- ARIA labels on non-text interactive elements (scroll indicator)
- Skip-to-content link as first focusable element
- Reduced-motion media query support for all animations
