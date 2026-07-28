# Handoff: E-BEACH — institutional + sales site

## Overview

E-BEACH is a Brazilian eyewear brand with beach DNA — sun, sea, sand. This handoff covers the full brand design system plus a scroll-driven, cinematic single-page site: an editorial narrative (hero → manifesto → product anatomy → collections → configurator → lifestyle gallery → social proof → CTA/footer), not a generic e-commerce template.

Everything in this bundle was authored from the brand's own materials: the supplied E BEACH logo files, two real product photographs (front + three-quarter), and a product turntable video plus a beach plate video.

## About the design files

**The files in this bundle are design references written in HTML/JSX — prototypes showing intended look and behavior, not production code to ship.** They run in the browser via inline Babel with no build step, no router, no data layer, and deliberately fake state.

Your job is to **recreate these designs in the target codebase's environment** (Next.js, Astro, Remix, Vue, whatever exists) using its established patterns, component conventions, and libraries. If no codebase exists yet, pick the framework that fits — for a scroll-heavy marketing site, **Next.js (App Router) + Tailwind + Lenis + GSAP ScrollTrigger** is the natural target, and the token layer below maps cleanly onto a Tailwind theme.

Two things you should port literally rather than reinterpret:
1. **`tokens/*.css`** — these are the brand's real values. Copy them as-is (or transpose into `tailwind.config`), don't re-derive them.
2. **`assets/`** — real logo, real product photography, real video. Never redraw the mark.

## Fidelity

**High fidelity.** Colors, type scale, spacing, radii, easing curves and durations are final and specified as tokens. Layout and interaction are final. Recreate pixel-accurately.

Two exceptions, explicitly not final:
- **`assets/placeholders/*.png`** are generated stand-ins for beach/lifestyle photography. Swap in real art direction.
- **`assets/video/turntable.mp4`** is a first pass and is being regenerated (see *Known gaps*).

---

## Design tokens

All tokens live in `tokens/` and are aggregated by `styles.css` (an `@import` list only). Semantic aliases sit on top of a raw palette — **consume the semantic names in product code**, not the raw ones.

### Color — `tokens/colors.css`

| Raw | Hex | Role |
|---|---|---|
| `--sand-050` | `#FDFCF9` | Espuma / foam — text on dark |
| `--sand-100` | `#F5E9D7` | Areia clara — base page surface |
| `--sand-200` | `#EEDCC2` | |
| `--sand-300` | `#E4C9A0` | Areia quente |
| `--sand-400` | `#CFAE7F` | |
| `--sun-300` | `#FFC46B` | |
| `--sun-400` | `#F5A623` | Sol |
| `--sun-500` | `#FF8A3D` | Sol intenso — primary CTA |
| `--sun-600` | `#E0701F` | CTA hover |
| `--sea-200` | `#7FD3CE` | |
| `--sea-300` | `#4CBAB4` | |
| `--sea-400` | `#2AA7A0` | Mar raso — secondary accent, focus ring |
| `--sea-600` | `#147F86` | |
| `--sea-700` | `#0E5C73` | Mar profundo |
| `--sea-900` | `#06222D` | Abissal — dark sections, footer |
| `--ink-900` | `#0A0A0A` | Logo black |
| `--ink-700` | `#2C2E2E` | Body text |
| `--ink-500` | `#5E635F` | Muted text |
| `--ink-300` | `#9A9F98` | |

Semantic aliases: `--surface-base/raised/warm/deep/sea/inverse`, `--text-strong/body/muted/on-dark/on-dark-muted/accent`, `--accent-primary(-hover)`, `--accent-secondary(-hover)`, `--border-hairline`, `--border-hairline-dark`, `--border-strong`, `--focus-ring`.

**Gradients are restricted.** Only four exist, and they are only legal as *section transitions* — never as a button, card, or text fill:
`--grad-sand-to-sea`, `--grad-sea-to-abyss`, `--grad-sunset`, `--grad-noon-sky`.

### Typography — `tokens/typography.css` + `tokens/fonts.css`

- Display: **Clash Display** (Indian Type Foundry / Fontshare), weights 500/600/700
- Body: **General Sans** (same foundry), weights 400/500/600/700
- Mono: system stack

Currently loaded from the **Fontshare CDN**. For production, self-host: download the woff2 files, drop them in `assets/fonts/`, repoint each `src:` in `tokens/fonts.css`, and add `<link rel="preload">` for the two faces used above the fold (Clash Display 700, General Sans 400).

Sizes are fluid — `--fs-display-xl: clamp(3.5rem, 14vw, 9rem)` down through `--fs-label: 0.6875rem`. Line heights: display `0.88`, title `1.12`, body `1.6`. Tracking: display-xl `-0.045em`, display `-0.03em`, title `-0.015em`, body `0`, **label `0.18em` (always uppercase)**.

Composite shorthands exist and are the preferred way to apply type: `--type-display-xl`, `--type-display-l`, `--type-display-m`, `--type-title`, `--type-body`, `--type-body-l`, `--type-label`.

### Spacing — `tokens/spacing.css`

4px rhythm: `--sp-1` 4 · `--sp-2` 8 · `--sp-3` 12 · `--sp-4` 16 · `--sp-5` 24 · `--sp-6` 32 · `--sp-7` 48 · `--sp-8` 64 · `--sp-9` 96 · `--sp-10` 128 · `--sp-11` 176.

Layout: `--gutter: clamp(20px, 5vw, 72px)`, `--section-y: clamp(80px, 12vw, 176px)`, `--maxw-page: 1440px`, `--maxw-prose: 62ch`, `--header-h: 76px`.

### Radii, elevation, texture — `tokens/effects.css`

`--r-none` 0 · `--r-sm` 2 · `--r-md` 6 · `--r-lg` 14 · `--r-xl` 24 · `--r-pill` 999.

**E-BEACH does not use drop-shadow cards.** Depth comes from hairlines, tonal shifts and gradients. The three shadows that exist are rare and always warm/sea-tinted, never grey:
- `--shadow-lift: 0 18px 40px -24px rgba(14,92,115,0.45)`
- `--shadow-float: 0 32px 70px -30px rgba(6,34,45,0.55)`
- `--shadow-inset-sun: inset 0 0 0 1px rgba(245,166,35,0.35)`

Glass: `--blur-glass: saturate(140%) blur(14px)`, `--glass-light: rgba(253,252,249,0.72)`, `--glass-dark: rgba(6,34,45,0.55)`.

**Global grain.** A fixed, pointer-events-none SVG turbulence overlay at `--grain-opacity: 0.045` sits above everything. This is a signature of the brand — do not drop it. See `components/brand/GrainOverlay.jsx`.

### Motion — `tokens/motion.css`

Easings: `--ease-tide: cubic-bezier(0.22,1,0.36,1)` (default), `--ease-swell: cubic-bezier(0.65,0,0.35,1)`, `--ease-drift: cubic-bezier(0.16,1,0.3,1)` (long reveals), `--ease-snap: cubic-bezier(0.4,0,0.2,1)`.

Durations: `--dur-micro` 140ms · `--dur-fast` 240ms · `--dur-base` 420ms · `--dur-slow` 720ms · `--dur-reveal` 1100ms. Stagger `--stagger: 70ms`. Scroll inertia `--scroll-lerp: 0.085`.

`@media (prefers-reduced-motion: reduce)` collapses every duration to `1ms` and stagger to `0` at the token level — honour it, and additionally skip the scrub-driven transforms (the prototype's `useReducedMotion` hook does this).

**Motion character: tide-like. Long, weighted, never bouncy. No spring overshoot anywhere.**

---

## Components (`components/`)

Each is a self-contained `.jsx` with a named PascalCase export, a `.d.ts` props contract, and a `.prompt.md` usage note. They reference styling only through CSS custom properties — no CSS-in-JS, no npm deps beyond React.

**core/** — `Button`, `IconButton`, `Icon`, `Badge`, `Tag`, `SectionLabel`
**forms/** — `Input`, `Select`, `Checkbox`, `Switch`, `SwatchPicker`
**brand/** — `Logo`, `GrainOverlay`, `WaveDivider`, `Marquee`, `ScrollCue`
**commerce/** — `ProductCard`, `CollectionCard`, `SpecRow`

Notes worth carrying over:
- **`Button`** — variants `solid` / `outline` / `ghost`, sizes `sm|md|lg`, `fullWidth`, `magnetic`, `onDark`, `iconAfter`. The solid variant uses a **liquid fill**: a pseudo-element wipes `--accent-primary-hover` from the bottom on hover over `--dur-base`/`--ease-tide`. The `magnetic` prop translates the button toward the cursor within ~8px on pointer move and releases on leave.
- **`Logo`** — `tone="ink" | "foam"`, `height`, `mark` (mark-only lockup). Never tint, never gradient, never distort.
- **`Icon`** — thin-stroke line set (1.5px), inherits `currentColor`, `size` in px.
- **`SwatchPicker`** — the configurator's colour control; options carry `{ value, label, swatch }` where `swatch` may be a hex or a CSS gradient string.

## Screens / sections

One page, eight sections, in `ui_kits/website/`. Entry is `index.html` → `app.jsx`. Shared scroll utilities are in `hooks.jsx` (`useScrollProgress`, `useReducedMotion`, `range`, `BRL` currency formatter).

### 1. Hero — `Hero.jsx`
**Purpose:** brand impact; establish the product as an object before selling it.
**Layout:** a 360vh scroll track with a `position: sticky; top: 0; height: 100vh` stage inside it. Everything is scrubbed off that track's 0→1 progress `t`.
- The product **scales 2.35 → 1.0** and drifts vertically as `t` advances; it starts nearly abstract, filling the viewport, and settles at product size.
- The product is the turntable video, scrubbed frame-by-frame by `t` (`ScrollVideo.jsx`), drawn with `mix-blend-mode: multiply` so the white studio background drops out over the gradient. Rendered in a 4:3 crop window at `zoom 1.34` to clip letterboxing baked into the source file.
- Background transitions **`--grad-noon-sky` → `--sand-100`** across the same progress.
- The wordmark **E BEACH** sits behind the product at `--fs-display-xl`, progressively revealed as the product shrinks.
- `ScrollCue` pinned bottom-centre, a slow looping vertical line.
- The stage declares itself a dark section while `t < 0.55`, which flips the header to its foam lockup.

### 2. Manifesto — `Manifesto.jsx`
Short editorial copy on sand, revealed **word by word** via per-word mask/clip as scroll progresses. Grain texture over. Max width `--maxw-prose`. Copy is about salt, light, horizon.

### 3. Product anatomy — `Anatomy.jsx`
Sticky section: the product locks centre-screen while four labels animate in, each connected to a point on the product by a thin SVG line drawn with a `stroke-dashoffset` animation. Labels: **lente polarizada UV400**, **haste em acetato**, **dobradiça flex**, **ponte**.

### 4. Collections — `Collections.jsx`
**Desktop:** horizontal pinning — a sticky viewport whose inner track translates `translateX(calc(-p * 62vw))` off vertical scroll progress. Cards `30vw`, min 300px.
**Mobile:** pinning is replaced by native `overflow-x: auto` + `scroll-snap-type: x mandatory`, cards at `flex: 0 0 76%`.
Four collections, exact copy:
- **Maré** — "Acetato translúcido e lente verde-mar. Para quem entra na água antes do café."
- **Duna** — "Armação areia quente, lente âmbar. Luz seca, vento de terra."
- **Sol poente** — "Degradê fumê sobre acetato âmbar. A última hora de luz."
- **Recife** — "Abissal com lente espelhada. Feita para o reflexo mais duro."
Each card: internal parallax on its image, overlay that opens on hover.

### 5. Configurator — `Configurator.jsx`
Functional. Live-updating rendered product, dynamic price, add-to-bag.
- **Frames:** Abissal `#06222D` · Areia quente `#E4C9A0` · Mar profundo `#0E5C73` · Tinta `#0A0A0A`
- **Lenses:** Âmbar (+0) · Verde-mar (+0) · Espelhada (+R$60) · Degradê fumê (+R$40)
- **Polarização** switch: +R$50
- **Base price R$ 389**; total = `389 + lens.add + (polarized ? 50 : 0)`, formatted BRL, set in Clash Display 700 / 40px / `-0.03em`.
- Colour changes cross-fade over `--dur-base` with `--ease-tide` — never snap.
- CTA: `Adicionar à sacola`, solid + magnetic + shopping-bag icon; fires the header bag count.

### 6. Lifestyle gallery — `Gallery.jsx`
Asymmetric grid, each image parallaxing at a different rate. A **custom "arraste" cursor** replaces the pointer inside this region only.

### 7. Social proof — `Proof.jsx`
Testimonials in a continuous, low-key marquee (`Marquee`). Quiet — small type, hairline separators, no star ratings, no avatars.

### 8. CTA + footer — `SiteFooter.jsx`
`WaveDivider` (animated looping SVG waves) at the top seam. A looping beach plate video sits behind the **"Encare a luz"** CTA at 55% opacity under a `rgba(6,34,45,…)` scrim. Below: abissal `#06222D` footer, newsletter input, link columns, and the large foam logo.

### Header — `SiteHeader.jsx`
Fixed, `--header-h: 76px`, the only persistent element. Logo left, nav centre/right, bag right. Swaps between **ink** and **foam** lockups depending on whether the section beneath is dark, with a top protection gradient that tracks the same state.

## Interactions & behavior

- **Smooth scroll with inertia** — Lenis, lerp `0.085`. In the prototype this is approximated with a lerped rAF loop; in production use Lenis directly and drive ScrollTrigger from it.
- **Every animation is scroll-scrubbed, not fire-once.** GSAP ScrollTrigger with `scrub: true`, or Framer Motion `useScroll` + `useTransform`. Scroll up and the animation must run backwards.
- **Reveals** stagger at `--stagger` 70ms.
- **Micro-interactions:** liquid fill on buttons, magnetic pull on CTAs, custom cursor that changes state per section.
- **Global grain** overlay above all content.

**Responsive:** mobile-first. Below ~900px, horizontal pinning becomes scroll-snap, hero scale range compresses, parallax distances halve.

**Accessibility:** all text meets contrast on its background (foam on abissal, sea-900 on sand). Focus ring is `--focus-ring` `#2AA7A0`, 2px offset. `prefers-reduced-motion` is honoured at the token level and by the `useReducedMotion` hook.

## State management

Trivial and local — no store needed:
- `bag: Array<{ name, frame, lens, frameLabel, lensLabel, price }>` — lifted to `app.jsx`, count shown in the header.
- Configurator: `frame`, `lens`, `pol` (boolean). Price is derived, never stored.
- Scroll progress per section, from a `useScrollProgress(ref)` hook.
- Section darkness for the header lockup swap.

No data fetching in the prototype. In production, collections and the configurator's frame/lens options should come from the commerce backend; the shapes above are the contract.

## Assets

| Path | What it is |
|---|---|
| `assets/logo-ink.png`, `logo-foam.png` | Full E BEACH lockup, dark and white — supplied by the brand |
| `assets/mark-ink.png`, `mark-foam.png` | Mark-only lockup |
| `assets/product/ebeach-front.png`, `ebeach-side.png` | Real product photography, cut out |
| `assets/video/turntable.mp4` | Product turntable, scrubbed by scroll |
| `assets/video/praia.mp4` | Beach plate, looping behind the final CTA |
| `assets/placeholders/*.png` | **Stand-ins.** noon-sky, sand, sea-shallow, dune, sunset, reef — replace with real photography |

## Files

```
design_handoff_ebeach_site/
├── styles.css                 ← the single entry point; @import list only
├── tokens/                    ← base, colors, typography, fonts, spacing, effects, motion
├── components/                ← core/ forms/ brand/ commerce/  (.jsx + .d.ts + .prompt.md)
├── guidelines/                ← 18 specimen cards, openable in a browser
├── assets/                    ← logos, product shots, video, placeholders
├── ui_kits/website/           ← THE PROTOTYPE. Open index.html directly.
├── BRAND.md                   ← full brand guide: content fundamentals, visual foundations, iconography
└── SKILL.md                   ← drop this folder into .claude/skills/ to use the brand as a Claude Code skill
```

`ui_kits/website/index.html` opens with no build step. `ui_kits/website/README.md` documents each prototype file.

## Known gaps — read before starting

1. **The turntable video is being regenerated.** The current file is landscape with letterboxing baked in, worked around by cropping. A replacement (square, white seamless background, locked camera, slow 180° Y spin) is in production. The `ScrollVideo` API won't change — `src`, `zoom`, `aspect`.
2. **The glasses → logo morph is not in the video and should not be.** AI video cannot render a brand wordmark reliably. Do the morph in code: shrink the product and assemble the E BEACH wordmark behind it from the vector logo, scrubbed by scroll and therefore reversible.
3. **Fonts are on the Fontshare CDN.** Self-host before launch.
4. **Placeholder imagery** must be replaced with real art direction — warm, high-sun, slight grain, no cool/corporate blue.
5. `assets/product/*.png` were cut out from the supplied photographs. If the brand has studio PNGs with real alpha, prefer those.
