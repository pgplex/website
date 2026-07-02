---
version: alpha
name: pgplex
description: >
  Dark, developer-focused design system for the pgplex site — a grayscale
  triangle brand mark over a near-black surface, four product accent colors
  used sparingly, mono body type, and a neon conic backlight as the single
  decorative flourish.
colors:
  bg: "#08090b"
  card: "#0e1013"
  border: "#1e2127"
  border-bright: "#2d323a"
  ink: "#e9eaec"
  ink-dim: "#878d97"
  accent: "#29b3dd"
  brand:
    gray-hi: "#ededed"
    gray-mid: "#a3a3a3"
    gray-lo: "#636363"
    silver-hi: "#f7f7f7"
    silver-lo: "#b0b4b9"
  product:
    pgconsole: "#2f63f0"
    pgschema: "#df372d"
    pgtui: "#2fa85d"
    pgparser: "#d98324"
# Icon gradient triads: light tint / vivid base / dark-safe deep shade.
palettes:
  cobalt-blue:    { light: "#8fb4ff", mid: "#2f63f0", deep: "#1e44c8" }   # pgconsole
  signal-red:     { light: "#ffb1a6", mid: "#f4473c", deep: "#cf2f2a" }   # pgschema
  terminal-green: { light: "#c0f7cf", mid: "#3ad673", deep: "#2fa85d" }   # pgtui
  solar-amber:    { light: "#ffe6b0", mid: "#ffb938", deep: "#e89327" }   # pgparser
  umbrella-gray:  { light: "{colors.brand.gray-hi}", mid: "{colors.brand.gray-mid}", deep: "{colors.brand.gray-lo}" }   # pgplex
typography:
  display:
    fontFamily: APK Protocol
    fontWeight: 600
    letterSpacing: -0.025em
  display-md:
    fontFamily: APK Protocol
    fontWeight: 500
    letterSpacing: -0.025em
  body:
    fontFamily: Modern Era Mono
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  label-caps:
    fontFamily: Modern Era Mono
    fontSize: 0.625rem
    fontWeight: 500
    letterSpacing: 0.08em
  wordmark:
    fontFamily: Space Grotesk
    fontWeight: 600
    letterSpacing: -0.025em
rounded:
  none: 0px
  pill: 9999px
spacing:
  frame: 12px
  frame-sm: 16px
  tile: 24px
  tile-sm: 40px
  container: 1080px
components:
  tile:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.tile}"
  star-badge:
    backgroundColor: transparent
    textColor: "{colors.ink-dim}"
    rounded: "{rounded.pill}"
    padding: 6px 14px
  tag-chip:
    backgroundColor: transparent
    textColor: "{colors.ink-dim}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: 2px 8px
---

# pgplex Design System

## Overview

pgplex is Bytebase's umbrella brand for a family of four Postgres developer
tools (pgconsole, pgschema, pgtui, pgparser). The visual language is a dark,
terminal-adjacent aesthetic: one near-black surface, thin hairline borders,
monospace body text, and color reserved for the four product identities. The
umbrella brand itself is strictly grayscale so the colored product marks read
as its children.

Two ideas anchor everything:

1. **Triangles only.** Every mark in the system — the pgplex logo and all four
   product icons — is composed purely of triangles, with negative space doing
   the storytelling (a hollow center, an ✕, a prompt-chevron notch).
2. **One gradient per mark.** Each mark uses a single 3-stop gradient of one
   hue (`light → mid → deep`) running along the `0,0 → 120,120` diagonal of
   its viewBox, `gradientUnits="userSpaceOnUse"`. No second color, no strokes,
   no effects.

## Colors

- `bg` (#08090b) is the page; `card` (#0e1013) is every raised surface. The
  step between them is intentionally tiny — separation comes from `border`
  (#1e2127) hairlines, not surface contrast. `border-bright` (#2d323a) marks
  the outer frame and hover emphasis.
- `ink` / `ink-dim` are the only text colors. `accent` (#29b3dd) is reserved
  for interactive hover states on links (e.g. the Bytebase credit).
- The four `product` colors are identity colors, used only on that product's
  tile: hover tint wash at ~5% opacity (`{color}0d`), a 3px top accent bar,
  the CTA text, and the product name on hover. They never color body text or
  shared chrome.
- `palettes.*` are the icon gradient triads; the `mid` stop is at or near the
  product identity color.
- `brand.gray-*` is the pgplex mark's gradient; `brand.silver-*` the
  wordmark's. The umbrella brand never uses a chromatic color.

**Deriving a new palette from a base hue**

1. `mid` = the saturated base color (HSL lightness ≈ 55–65%).
2. `light` = same hue, lightness ≈ 80–88% (mix ~35% toward white).
3. `deep` = same hue, lightness ≈ 35–45% — darker than mid but **never
   near-black**; a deep stop below ~30% lightness disappears on `bg`.

### Neon backlight

The single decorative element is a conic blend of the four product colors
glowing around the page frame, rotated so each color lands on its product's
corner of the 2×2 grid:

```css
conic-gradient(from 45deg at 50% 50%, #df372d, #d98324, #2fa85d, #2f63f0, #df372d)
```

It renders as two absolutely-positioned layers behind the framed card, inset
by `spacing.frame`: a wide bloom (`blur(60px)`) and a tight tube
(`blur(14px)`).

## Typography

- **Display — APK Protocol** (400/500/600, local woff2): headings, product
  names, the header tagline. Always tracking −0.025em. Product tile names are
  600; the header tagline is 500.
- **Body — Modern Era Mono** (400/500, local woff2): everything else —
  descriptions, badges, footer. Line-height 1.6. The mono texture is the
  "developer tool" voice of the site.
- **Wordmark — Space Grotesk 600**: exists only as outlined paths inside
  `public/wordmark-dark.svg` and `public/logo-full-dark.svg`. No wordmark
  webfont is loaded at runtime; never re-typeset "pgplex" as live text.

## Layout

- The homepage is a single full-viewport composition: a `frame` inset (12px,
  16px ≥sm) around a bordered card containing a header bar, a 2×2 product
  grid, and a slim footer bar. Content pages use a `container` of 1080px.
- Grid cells separate with single hairline borders (right border on the left
  column, bottom border on the top row) — no gaps, no double borders.
- Tiles pad with `tile` (24px, 40px ≥sm) and split content vertically:
  icon + star badge on top, name / tagline / CTA pinned to the bottom.

## Elevation & Depth

There are no soft drop shadows. Depth comes from:

- hairline borders on a slightly lighter surface,
- the neon backlight glowing through the frame gap,
- hover motion (200ms): brand-tint wash fades in, top accent bar scales in
  (`scale-x-0 → 1`), icon lifts 2px, CTA rises 4px while fading in.

Legacy pattern (`src/components/product-card.tsx`): hard offset shadow
`4px 4px 0 {colors.border}` growing to `6px 6px 0 {colors.border-bright}` on
hover — reuse this style if reintroducing card grids; never use blurred
box-shadows.

## Shapes

- Corners are square everywhere. The only rounded element is the star-count
  badge, a full pill.
- All brand geometry is triangular, drawn in a `0 0 120 120` viewBox with the
  silhouette inside the 21..99 band (78 units), so all marks carry equal
  visual weight side by side.

## Components

### Logo & lockup

Every logo asset ships as a **dark/light pair** with matching names: the
`*-dark.svg` set uses the light silver/gray ramps tuned for the near-black site
surface, and the `*-light.svg` set swaps in dark graphite→black / near-black
ramps for white and light backgrounds. Use the dark set on the site; reach for
the light set only on light surfaces.

- `public/logo-dark.svg` / `public/logo-light.svg` — the mark: four grayscale
  triangles converging on a hollow center — four products multiplexed into one
  hub; the negative space between the shards forms the ✕ of "plex". Each shard
  is a quadrant triangle of the square shrunk about its own incenter, so all
  three edges retreat equally and the diagonal channels are a uniform 8 units.
  Dark uses `umbrella-gray` on the standard diagonal; light uses
  `#5c5c5c → #333 → #0d0d0d`.
- `public/wordmark-dark.svg` / `public/wordmark-light.svg` — "pgplex" as Space
  Grotesk 600 outlines (HarfBuzz-shaped, tracking −0.025em), filled with a
  **vertical** gradient (dark: `silver-hi → silver-lo`; light:
  `#2b2e34 → #0e1013`) — vertical so every letter shades the same.
- `public/logo-full-dark.svg` / `public/logo-full-light.svg` — the lockup with
  alignment baked in: at font-size 80 (in 120-unit icon space) the word's
  ascender-to-descender band spans 24..96, centered on the mark's 21..99
  silhouette with the x-height midline on the mark's center; the word's ink
  starts 32 units right of the mark's edge. Always use this asset for mark +
  name; never rebuild the lockup in CSS or nudge it with transforms.
- `public/logo-dark.png` / `public/logo-light.png` (512px) are the mark
  rasters (dark is the site favicon). Regenerate after any change, e.g.
  `rsvg-convert -w 512 -h 512 public/logo-dark.svg -o public/logo-dark.png`.

### Product icons

Recipe for a new product icon: `0 0 120 120` viewBox, triangles only,
silhouette within 21..99, one `linearGradient` (`userSpaceOnUse`, `0,0 →
120,120`) with the product's `light / mid / deep` triad, transparent
background, and a negative-space device that encodes the product's function:

| Product | Meaning | Triangle device | Palette |
|:--|:--|:--|:--|
| `pgconsole` | web SQL editor | pinwheel of 4 right-triangle sails, hollow square center | `cobalt-blue` |
| `pgschema` | declarative schema migration | paired up/down deltas = before/after diff | `signal-red` |
| `pgtui` | terminal Postgres client | prompt chevron of 3 shards, middle one hollow | `terminal-green` |
| `pgparser` | Go Postgres parser | tri-force of 3 sub-triangles, hollow center | `solar-amber` |

Sources live in `public/icons/<product>.svg`. To add a product: derive a
palette row, design a triangle-only glyph with a meaningful knockout, keep the
silhouette in the 21..99 band.

### Product wordmarks & lockups

Each product has a single wordmark and lockup (no dark/light split — one
version reads on any surface), in `public/icons/`:

- `<product>-wordmark.svg` — the product name as **APK Protocol 600** outlines
  (tracking −0.025em, no runtime webfont — the umbrella wordmark is Space
  Grotesk, so products use the display face to stay distinct), tinted in the
  product hue.
- `<product>-full.svg` (+ 2× transparent `.png`) — icon + wordmark, icon
  spanning 21..99 with the word's ink box centred on the mark centre and
  starting a fixed gap right of the mark edge (same alignment idea as
  `logo-full`).

The icon keeps its diagonal `light→mid→deep` gradient; the wordmark is a
**vertical `mid→deep`** ramp of the same hue (top→bottom), the darker half of
the icon transition so it stays legible on both dark and light. Regenerate all
four products from the font with the outlining script (fonttools reads the
woff2 in `src/app/fonts/`); never re-typeset a wordmark as live text.

### Product tile

Card in the 2×2 grid: `card` surface, hairline dividers, `tile` padding; the
whole tile is a stretched link. Hover reveals the product color (tint wash,
accent bar, name color, CTA reveal). Star badge: pill, `border` hairline,
GitHub octicon + tabular-nums count, brightens to `ink` on hover.

## Do's and Don'ts

- **Do** keep the umbrella brand grayscale; only product surfaces get color.
- **Do** build any new mark from pure triangles with one 3-stop diagonal
  gradient, and put the meaning in the negative space.
- **Do** keep the deep gradient stop light enough to read on dark
  (lightness ≳ 35%).
- **Do** keep text gradients light and vertical (`silver-hi → silver-lo`);
  text must never fall below mid-gray on the dark background.
- **Don't** load a webfont for the wordmark or typeset "pgplex" as styled
  text — use the SVG assets.
- **Don't** round corners (except the pill badge) or add blurred drop
  shadows.
- **Don't** use product colors for chrome, body text, or other products'
  surfaces; the neon backlight is the only place all four blend.
- **Don't** re-align or re-space the logo lockup with CSS — alignment lives
  in `logo-full-{dark,light}.svg`.
