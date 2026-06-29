---
name: pgplex Logo System
colors:
  # Active brand mark — "Quantum Indigo". These three stops are the ONLY
  # values that change when generating a sibling product logo.
  logo-light: "#bcc8ff"
  logo-mid: "#6a70ff"
  logo-deep: "#5b54ec"
  # Page surfaces the mark must sit on (must read on both).
  surface-light: "#fafafa"
  surface-dark: "#0a0d14"
logo:
  viewBox: "0 0 120 120"
  size: 120
  center: [60, 60]
  # The empty centre square, as [x0, y0, x1, y1]. Stays transparent.
  square: [46, 46, 74, 74]
  # One blade. Drawn once, then rotated by each angle below.
  blade-path: "M46 46 L74 46 C84 50 100 58 114 60 Q95 26 60 6 C58 20 50 36 46 46 Z"
  rotations: [0, 90, 180, 270]
  # 90deg rotation about centre used to derive the cut edges: f(x,y) = (120 - y, x)
  rotation-fn: "(x, y) => [120 - y, x]"
  gradient:
    type: linear
    direction: "(0,0) -> (1,1)"   # objectBoundingBox, so each blade shades on its own
    stops:
      - { offset: 0,   color: "{colors.logo-light}" }
      - { offset: 0.5, color: "{colors.logo-mid}" }
      - { offset: 1,   color: "{colors.logo-deep}" }
  export:
    raster: 512                    # favicon / apple-touch PNG size
    background: transparent
# Curated base palettes for the product family. mid = vivid base; light = pale
# tint; deep = darker shade with enough lightness to survive a dark background.
palettes:
  quantum-indigo: { light: "#bcc8ff", mid: "#6a70ff", deep: "#5b54ec" }   # pgplex (umbrella)
  cobalt-blue:    { light: "#8fb4ff", mid: "#2f63f0", deep: "#1e44c8" }   # pgconsole
  terminal-green: { light: "#c0f7cf", mid: "#3ad673", deep: "#2fa85d" }   # pgtui
  signal-red:     { light: "#ffb1a6", mid: "#f4473c", deep: "#cf2f2a" }   # pgschema
  solar-amber:    { light: "#ffe6b0", mid: "#ffb938", deep: "#e89327" }   # pgparser
# Product icons are function-specific glyphs (NOT the pinwheel) drawn in the
# shared gradient style: one userSpaceOnUse gradient (0,0)->(120,120) over a
# 120x120 canvas, transparent background, transparent negative space.
product-icons:
  pgconsole: { glyph: "window (header bar)", palette: "{palettes.cobalt-blue}", files: ["public/icons/pgconsole.svg", "public/icons/pgconsole.png"] }
  pgtui:     { glyph: "terminal prompt >_", palette: "{palettes.terminal-green}", files: ["public/icons/pgtui.svg", "public/icons/pgtui.png"] }
  pgschema:  { glyph: "2x2 grid", palette: "{palettes.signal-red}",          files: ["public/icons/pgschema.svg", "public/icons/pgschema.png"] }
  pgparser:  { glyph: "syntax tree (root + 2)", palette: "{palettes.solar-amber}", files: ["public/icons/pgparser.svg", "public/icons/pgparser.png"] }
components:
  logo:
    format: svg
    fill: "gradient (see logo.gradient)"
    centre: transparent
    files: ["public/logo.svg", "public/logo.png"]
---

# pgplex Logo System

Reusable spec for the pgplex brand mark and the sibling product icons. Tokens
give exact geometry and colour; the prose explains the invariants. There are two
tiers:

1. **`pgplex` umbrella mark** — the aperture/pinwheel. A new tint of *this* mark
   is **a colour swap, not a redraw** (change the three gradient stops only).
2. **Product icons** (pgconsole, pgtui, pgschema, pgparser) — **function-specific
   glyphs**, each its own shape. They are tied into one set by a **shared
   colour/shade treatment** (the same `light → mid → deep` gradient ramp), *not*
   by a shared silhouette. See [Product Icons](#product-icons).

## Overview

The mark is an **aperture / pinwheel**: a rounded diamond built from four
identical curved blades that spiral around a perfectly empty centre square. It
reads two ways at once — a *prism* (faceted, gradient depth) and a *plex*
(interwoven, multiplexed blades). The centre is a knockout (transparent), so the
same asset works on light and dark surfaces.

To make a new product logo: copy `public/logo.svg`, change only the three
`colors.logo-*` stops (pick a row from `palettes`), re-export the PNG. Never
touch the geometry.

## Colors

Each mark is a single 3-stop linear gradient applied per blade
(`light → mid → deep`, corner-to-corner):

- **light** `{colors.logo-light}` — pale tint, the lit edge / highlight.
- **mid** `{colors.logo-mid}` — the vivid base hue; this *is* the product colour.
- **deep** `{colors.logo-deep}` — darker shade for the 3D fold / shadow.

**Deriving a palette from a base hue**

1. `mid` = the saturated base colour (HSL lightness ≈ 55–65%).
2. `light` = same hue, lightness ≈ 80–88% (mix ~35% toward white).
3. `deep` = same hue, lightness ≈ **35–45%** — darker than mid but **never
   near-black**. A deep stop below ~30% lightness disappears on the dark surface
   (the original `#15123f` looked black on `{colors.surface-dark}`).

Curated, dark-safe families live in `palettes` in the front matter.

## Shapes

All geometry is in a `120 × 120` viewBox centred at `(60, 60)`.

**Construction**

- One blade (`logo.blade-path`) is drawn once and instantiated four times at
  `logo.rotations` (`0/90/180/270`) about the centre. All four blades are the
  *exact same path* — this is non-negotiable.
- The blade boundary, in order, is:
  1. `M46 46 L74 46` — **straight inner edge = the top side of the centre
     square** (the source of the clean square hole).
  2. `C84 50 100 58 114 60` — outward "cut" edge, square corner → diamond corner.
  3. `Q95 26 60 6` — the convex outer diamond edge.
  4. `C58 20 50 36 46 46` — inner "cut" edge, diamond corner → square corner.
- **The seam invariant:** the two cut edges (steps 2 and 4) are exact 90°
  rotations of one another under `f(x,y) = (120 - y, x)`
  (e.g. `f(46,46)=(74,46)`, `f(58,20)=(100,58)`, `f(50,36)=(84,50)`). Because of
  this, each blade's cut edge coincides with its neighbour's cut edge — the four
  blades tile with **no gaps and no overlaps**, and the remaining hole is a
  mathematically exact square.
- The empty square is `logo.square` = `(46,46)–(74,74)`, i.e. `28 × 28` (~23% of
  the canvas). It is left transparent, never filled.

If you ever retune the swirl, move the control points of edge 4, then regenerate
edge 2 with `f(...)` so the seam invariant holds.

## Components

The complete source mark (`public/logo.svg`) — swap the three `<stop>` colours
to rebrand:

```svg
<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pgplexBlade" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0"   stop-color="#bcc8ff"/>
      <stop offset="0.5" stop-color="#6a70ff"/>
      <stop offset="1"   stop-color="#5b54ec"/>
    </linearGradient>
    <path id="pgplexBladePath" d="M46 46 L74 46 C84 50 100 58 114 60 Q95 26 60 6 C58 20 50 36 46 46 Z"/>
  </defs>
  <use href="#pgplexBladePath" fill="url(#pgplexBlade)"/>
  <use href="#pgplexBladePath" fill="url(#pgplexBlade)" transform="rotate(90 60 60)"/>
  <use href="#pgplexBladePath" fill="url(#pgplexBlade)" transform="rotate(180 60 60)"/>
  <use href="#pgplexBladePath" fill="url(#pgplexBlade)" transform="rotate(270 60 60)"/>
</svg>
```

**Exporting the raster** (favicon / apple-touch, `public/logo.png`): the SVG is
the source of truth; the PNG is generated from it at `logo.export.raster` (512)
with a transparent background. With macOS `qlmanage`:

```sh
sed 's/width="120" height="120"/width="512" height="512"/' logo.svg > _exp.svg
qlmanage -t -s 512 -o . _exp.svg && mv _exp.svg.png logo.png && rm _exp.svg
```

`logo.svg` is consumed directly by `src/components/logo.tsx` (nav) and referenced
as the favicon + apple-touch icon in `src/app/layout.tsx`.

## Product Icons

The product tools do **not** reuse the pinwheel or any shared background shape —
each is a function-specific glyph so it's recognisable on its own. What makes the
set read as a family is the **shared colour/shade treatment**: every icon is the
same `light → mid → deep` gradient ramp, just in a different hue. Cohesion comes
from the shading, not the silhouette.

- **Canvas & export** — same `120 × 120` viewBox, transparent background,
  exported to 512px PNG (same command as the logo).
- **Fill** — a single gradient per icon, `light → mid → deep` along
  `(0,0) → (120,120)` with `gradientUnits="userSpaceOnUse"` so the whole glyph
  shares one diagonal prism sheen (unlike the logo's per-blade gradients).
- **Negative space** — internal detail is transparent (knockout via `mask`),
  the same light/dark-adaptive trick as the logo's centre square.
- **Colour** — each product owns one row of `palettes` (deep stop kept light
  enough to read on dark, lightness ≳ 35%).
- **Weight** — glyphs are sized to similar visual mass (~88px of content,
  ~16px margin) so the set looks even side by side.

| Product | Meaning | Glyph | Palette |
|:--|:--|:--|:--|
| `pgconsole` | SQL GUI editor | window (header bar) | `cobalt-blue` |
| `pgtui` | TUI SQL client | terminal prompt `>_` | `terminal-green` |
| `pgschema` | declarative schema (Terraform-for-pg) | 2×2 grid | `signal-red` |
| `pgparser` | Postgres parser library | syntax tree (root + 2 children) | `solar-amber` |

Sources live in `public/icons/<product>.{svg,png}`. To add a product: pick or
add a `palettes` row, draw a bold gradient glyph on the shared canvas, knock out
detail with a `mask`, and export the PNG.

## Do's and Don'ts

- **Do** keep all four blades the identical path rotated `0/90/180/270`.
- **Do** preserve the seam invariant (cut edges are 90° rotations under
  `f(x,y)=(120-y,x)`) so the centre stays an exact square.
- **Do** keep the centre square transparent — it must adapt to light and dark.
- **Do** keep the deep stop light enough to read on dark (lightness ≳ 35%).
- **Do** re-export the 512px PNG after any colour change.
- **Don't** fill, recolour, or resize the centre square.
- **Don't** change the *umbrella mark's* geometry when retinting it — only swap
  the three gradient stops. (Product icons are the exception: they are their own
  glyphs by design — see [Product Icons](#product-icons).)
- **Do**, for product icons, use one `userSpaceOnUse` gradient across the whole
  glyph and keep margins/visual weight consistent across the set.
- **Don't** flatten the gradient to a single colour; the per-blade gradient is
  what creates the prism/pinwheel depth.
- **Don't** use a near-black deep stop (e.g. `#15123f`) — it vanishes on dark.
