# Exquisite Custom Glass Showers — Design System

## Color Tokens (map to Tailwind config)

| Token | Value | Tailwind utility |
|-------|--------|------------------|
| `--color-navy-deep` | `#0A1628` | `bg-navy-deep`, `text-navy-deep`, etc. |
| `--color-navy-mid` | `#1B2B4B` | `navy-mid` |
| `--color-navy-accent` | `#2E4A7A` | `navy-accent` |
| `--color-gold` | `#C9A84C` | `gold` |
| `--color-gold-light` | `#E8CC7A` | `gold-light` |
| `--color-white-warm` | `#F8F5F0` | `white-warm` |
| `--color-white-pure` | `#FFFFFF` | `white-pure` |
| `--color-charcoal` | `#1A1A1A` | `charcoal` |
| `--color-gray-light` | `#E8E4DE` | `gray-light` |
| `--color-glass` | `rgba(255, 255, 255, 0.08)` | `glass` |

Defined in `src/app/globals.css`: palette values live on `--palette-*`; `--color-*` aliases match this document and feed `@theme inline` (Tailwind v4 utilities like `bg-navy-deep`, `text-gold`).

## Typography

**Display: Cormorant Garamond** — weights 300, 400, 600  
Use for: H1, H2, hero subtitles, pull quotes  
Letter spacing: `tracking-wide` on headlines  
Note: This font elevates the luxury positioning  

**Body: DM Sans** — weights 300, 400, 500  
Use for: body copy, nav, labels, buttons, captions  
Line height: relaxed (1.7)  

Loaded via `next/font/google` in `src/app/layout.tsx`. Utilities: `font-display`, `font-body` / `font-sans` (DM Sans on body via layout).

## Type Scale

- **H1:** `text-6xl` to `text-8xl` — Cormorant Garamond 300
- **H2:** `text-4xl` to `text-5xl` — Cormorant Garamond 400
- **H3:** `text-2xl` to `text-3xl` — Cormorant Garamond 600
- **Body:** `text-base` to `text-lg` — DM Sans 300
- **Label/Tag:** `text-xs tracking-widest uppercase` — DM Sans 500
- **Button:** `text-sm tracking-widest uppercase` — DM Sans 500

## Spacing

- Section padding: `py-24` to `py-32` on desktop
- Container: `max-w-7xl mx-auto px-6`

## Components

- **Primary Button:** Navy background, gold text, no radius or very subtle radius, uppercase `tracking-widest`
- **Secondary Button:** Transparent, gold border, gold text — ghost style
- **Section divider:** thin gold line, `max-w-xs`, centered or left-aligned
- **Nav:** Transparent on hero, navy on scroll, logo left, links right, CTA button far right
- **Cards:** Minimal — image dominant, thin gold border on hover, no heavy shadows

## Animation Guidelines

Shared Framer Motion values live in **`src/lib/motion.ts`** (`scrollViewport`, `fadeUpTransition`, `scrollHeaderContainer`, `scrollFadeUpChild`, `cardScrollTransition`).

- **Page load:** staggered fade-up, 0.6s duration, 0.1s stagger between elements
- **Scroll reveals:** `once: true`, viewport threshold 0.2, translateY 40px → 0
- **Hover on cards:** slight scale (1.02), slow (300ms ease)
- **Nav transition:** smooth background on scroll, 200ms
- **Hero parallax:** background scrolls at 0.5 rate
- **No spring physics** — use easeInOut cubic exclusively (Framer Motion: `[0.42, 0, 0.58, 1]` or `easeInOut`)

## Image Treatment

- **Hero:** Full viewport, dark overlay (navy 60% opacity), text over image
- **Gallery:** Edge-to-edge images, minimal chrome, slight gap grid
- **Service images:** Tall portrait format where possible (glass enclosures read better vertically)

## Section Structure Pattern

Every section follows:

1. Small uppercase gold label ("Our Services" / "The Process" / "Our Work")
2. Cormorant heading — 2 to 3 lines max
3. Optional DM Sans subtext — 1 to 2 sentences
4. Content (cards / grid / list)
5. Optional CTA link
