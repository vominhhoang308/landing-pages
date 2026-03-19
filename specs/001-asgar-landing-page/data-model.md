# Data Model: Asgar.ai Landing Page

**Feature**: 001-asgar-landing-page
**Date**: 2026-03-18

## Overview

This is a static landing page with no backend or database. All data is defined as static TypeScript constants. The data model describes the shape of content that populates each page section.

## Entities

### Milestone

Represents a single entry in the timeline section.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| year | number | Yes | The year of the milestone (e.g., 2020) |
| title | string | Yes | Short headline for the milestone |
| description | string | Yes | Narrative text explaining the milestone's significance |
| order | number | Yes | Display order in the timeline (ascending) |

**Validation Rules**:
- `year` must be a positive 4-digit integer (1900–2099)
- `title` must be 1–100 characters
- `description` must be 1–500 characters
- `order` must be unique across all milestones

**Relationships**: None (standalone entity)

---

### ServiceLink

Represents a navigation link to an Asgar.ai service area.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| label | string | Yes | Display text for the link |
| href | string | Yes | URL or anchor the link points to |
| description | string | No | Optional short description shown on hover or below the link |
| order | number | Yes | Display order in the services section |

**Validation Rules**:
- `label` must be 1–60 characters
- `href` must be a valid URL or anchor reference (starting with `/` or `#`)
- `order` must be unique across all service links

**Relationships**: None (standalone entity)

---

### FooterLink

Represents a link in the footer section.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| label | string | Yes | Display text for the link |
| href | string | Yes | URL the link points to |
| isExternal | boolean | Yes | Whether the link opens in a new tab |

**Validation Rules**:
- `label` must be 1–60 characters
- `href` must be a valid URL

**Relationships**: None (standalone entity)

---

### DesignToken

Represents a design system token used across all components.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | Token name (e.g., `green-900`, `font-serif`) |
| value | string | Yes | CSS value (e.g., `#2B3D2B`, `"DM Serif Display"`) |
| category | enum | Yes | One of: `color`, `typography`, `spacing`, `breakpoint` |

**Validation Rules**:
- `name` must be unique within its category
- `value` must be a valid CSS value for the token category

**Relationships**: Used by all page section components

## State Transitions

No state transitions apply — this is a static content page with no user-mutable state. The only dynamic behavior is scroll-triggered visual transitions (CSS-driven, not data-driven).
