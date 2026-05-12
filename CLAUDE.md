# Sree Space — Project Context

Astro 4 + Tailwind CSS + TypeScript static site for Likhitha Sree's yoga and energy-work practice.
Deployed to Vercel from GitHub: https://github.com/mailmeabhishekpaluri/Sree-space.git

## Stack

- **Framework**: Astro 4, `@astrojs/tailwind`, TypeScript strict
- **Styling**: Tailwind CSS v3 with custom palette (see tailwind.config); paper-grain texture via SVG `feTurbulence` on `body::after`
- **Fonts**: Cormorant Garamond (display), Inter (body), Caveat (script), Tiro Devanagari Hindi (devanagari)
- **Deploy**: Vercel, auto-deploys from `main` branch

## Brand Palette

| Token | Hex | Usage |
|---|---|---|
| forest | #2C5F3F | Primary text, CTA fills, dark sections |
| gold | #C99A4B | Accents, ornaments, underlines |
| saffron | #E07B2C | Eyebrows, script labels |
| cream | #FBF8F1 | Page background |
| sage | #C5D3C0 | Borders, muted overlays |
| ink | #1F2A24 | Body text |
| muted | #5C6B62 | Secondary text |

## Shared Components (do not modify without reason)

- `Watercolor.astro` — SVG organic blob washes; props: position, opacity, scale, variant (1–3)
- `Ornament.astro` — 8 hand-drawn SVG ornaments: lotus, leaf, swash, sun, tree, hands, speech, arrow
- `DevanagariMark.astro` — "श्री" watermark; props: size, opacity, color
- `ScrollReveal.astro` — IntersectionObserver fade+slide; props: delay, y, duration; respects `prefers-reduced-motion`
- `TreatedPhoto.astro` — Unified photo treatment: `saturate(0.78) brightness(0.96)` + sage multiply overlay + vignette; props: src, alt, framed, width, height
- `InitialCircle.astro` — Gold avatar circle with Cormorant initials
- `TestimonialCard.astro` — Dual mode: default card + featured editorial two-col layout

## Workflow Rules

- **No dev server, no browser, no screenshots** — edit → build check → commit → push in one pass.
- **Single commit per task** — stage all changed files, push to `main`.
- All images must be in `public/images/<subfolder>/`. Source files live in `site-assets/`.
- Copy from `site-assets/` to `public/images/` if a file isn't already there.
- Never modify `Nav.astro`, `Footer.astro`, or shared components unless the task explicitly targets them.
- Netlify Forms honeypot pattern: `netlify-honeypot="bot-field"` + `data-netlify="true"`.

## Pages Status

| Page | File | Status |
|---|---|---|
| Home | `src/pages/index.astro` | ✅ Redesigned |
| About | `src/pages/about.astro` | ✅ Redesigned |
| Offerings | `src/pages/offerings/index.astro` | ✅ Redesigned |
| Monday | `src/pages/monday.astro` | ✅ Redesigned |
| Testimonials | `src/pages/testimonials.astro` | ✅ Redesigned |
| Contact | `src/pages/contact.astro` | ✅ Redesigned |
