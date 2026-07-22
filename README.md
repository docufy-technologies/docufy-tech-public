# Docufy Tech Public Website

Static marketing site for Docufy Tech, the web development services subsidiary of Docufy.

## Overview

This app is a multi-page, conversion-focused website built to establish business credibility, explain the company’s services, and drive meeting bookings through Calendly. It is intentionally lightweight: no auth, no CMS, no checkout flow, and no backend database.

## Project Goals

- Present Docufy Tech as a professional, reliable delivery partner
- Communicate two core trust pillars across the site
  - Delivery integrity
  - Research-driven execution
- Keep the conversion path simple with a single primary CTA: book a meeting

## Site Structure

The project brief in `docs/docufy-tech.md` defines the intended site map and positioning.

- `Home` in `src/routes/index.tsx`
- `About` in `src/routes/about.tsx`
- `Solutions` in `src/routes/solutions.tsx`
- Legal pages for privacy and terms
- Contact and other supporting pages as the site expands

## Content and Design Analysis

### Home Page

`src/routes/index.tsx` is the main sales page. It uses a dark, high-contrast layout with a strong hero section, clear CTA buttons, trust-focused value cards, a technology stack section, partner logos, and a final conversion block.

Observed strengths:

- Clear business positioning above the fold
- Strong visual hierarchy and repeated CTAs
- Good trust messaging around ownership, security, and process
- Conversion paths via email and Calendly are obvious

### About Page

`src/routes/about.tsx` reinforces company identity with a GMT+6 time display, a concise company story, a research-first execution statement, and a team showcase followed by a meeting CTA.

Observed strengths:

- Adds a human layer to the brand
- Supports credibility through named leadership and visible team members
- Repeats the core trust narrative instead of introducing new claims

### Solutions Page

`src/routes/solutions.tsx` presents the service catalog in a compact card layout.

The page is best understood as a capability overview, not a full services brochure. It covers:

- Project and product overviews
- BRD, PRD, FRD, and SRS documentation
- Web application development

### Team Showcase

`src/components/blocks/team-showcase.tsx` is the most interaction-heavy custom component in the site.

What it does well:

- Gives the company a visible team identity
- Supports both mobile and desktop layouts
- Uses hover states and social links to make the team feel real, not decorative

Implementation notes:

- Desktop and mobile are split into separate render paths
- Hover interaction highlights the active team member
- Team data is embedded as a default member list, so the component is currently content-driven rather than CMS-driven

## Legal Content

The legal documents are aligned with the site’s low-risk, informational nature.

### Privacy Policy

`docs/privacy-policy.md` is written for a lead-generation website with limited data collection. It covers:

- Direct contact details and Calendly submissions
- Third-party service handling
- Cookies, retention, security, international transfers, and user rights
- A clear no-sale-of-data position

### Terms of Service

`docs/terms-of-service.md` sets expectations for a pre-contract marketing site and early-stage service discussions. It covers:

- Scope of services
- Inquiry-only interaction, not a binding commitment
- Acceptable use
- Confidentiality and project material handling
- Liability, indemnity, suspension, and governing law

## Technical Stack

- SolidJS + Vite
- TanStack Solid Router
- Tailwind CSS v4
- Biome for linting and formatting
- Vitest for testing

## Local Development

```bash
pnpm install
pnpm dev
```

## Production Build

```bash
pnpm build
```

## Testing

```bash
pnpm test
```

## Quality Checks

```bash
pnpm lint
pnpm format
pnpm check
```

## Notes

- This project is designed for static hosting.
- The current information architecture is optimized for trust-building and direct inquiry, not deep product browsing.

