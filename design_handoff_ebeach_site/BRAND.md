# E-BEACH — Design System

**E-BEACH** is a Brazilian eyewear brand. Sun, sea and sand are not decoration for this
brand — they are the product brief. Polarised UV400 lenses, Italian acetate frames,
assembled on the São Paulo coast, sold direct through a single scroll-driven site that
reads like a surf/fashion editorial rather than a store.

This design system encodes that: a sand-and-sea palette, an editorial display face over a
quiet sans, long tide-like motion, hairlines instead of drop shadows, and a permanent film
of sand grain over everything.

## Sources given
| Source | What it provided |
| --- | --- |
| uploads/…logo_e_beach_sem_o_fundo_de_praia….jpg | Black E-BEACH lockup on white — cleaned into assets/logo-ink.png and assets/mark-ink.png. |
| uploads/…letras_na_cor_branca_e_o_fundo….jpg | White lockup on black — cleaned into assets/logo-foam.png and assets/mark-foam.png. |
| Brand brief (chat, pt-BR) | Palette hexes, typographic direction, section-by-section site narrative, motion and accessibility rules. |

No codebase, Figma file or deck was supplied. Everything below is derived from the two logo
files and the written brief; nothing was copied from a third-party brand.

---

## Content fundamentals

**Language is Portuguese (Brazil).** Copy is written in the brand's own voice, not the
customer's — E-BEACH speaks as a maker ("fizemos um óculos"), and addresses the reader as
*você* only when there is an action to take ("Monte o seu", "Escolha armação e lente").

**Register: short declaratives, concrete nouns, no stacked adjectives.** The manifesto is the
tone benchmark:

> O sal marca. A luz insiste. O horizonte não pede licença.
> Fizemos um óculos para quem encara os três de frente, todo dia, sem apertar os olhos.

**Casing.** Sentence case for body and product names ("Maré 01", "Sol poente"). UPPERCASE only
for section eyebrows, button labels, collection titles at display scale, and the wordmark.
Never Title Case Every Word.

**Specifics beat claims.** "Cinco barras em aço inox 316L, testada em 20 mil ciclos" — not
"dobradiça de alta qualidade". Numbers, materials, places (Ubatuba, Itacaré, Jericoacoara).

**Buttons** are 1–3 words, imperative: *Comprar*, *Assinar*, *Adicionar à sacola*, *Ver coleção*.
**Eyebrows** are a zero-padded number plus one or two words: 03 — Anatomia do produto.

**No emoji, anywhere.** No exclamation marks. No "bem-vindo", no bureaucratic "sobre nós", no
urgency copy ("últimas horas!"). Prices are written R$ 389.

**Testimonials** are one sentence in quotes plus first name, initial and city — nothing else.

---

## Visual foundations

**Colour.** Three families, all named in Portuguese: *areia* (sand, the base), *sol* (the only
accent — orange/amber, reserved for CTAs, eyebrow numbers, marquee separators), *mar*
(turquoise through abyssal, used for dark surfaces and the footer). Ink neutrals exist only
for type. There is no corporate blue and no grey surface anywhere. Roughly 70% of any page is
sand, 25% sea/abyssal, 5% sun.

**Gradients** are permitted in exactly two places: section-to-section transitions
(--grad-sand-to-sea, --grad-sunset, --grad-sea-to-abyss, --grad-noon-sky) and lens swatches in
the configurator. Never behind text, never on the logo, never on a button.

**Type.** Clash Display 600/700 for anything display-scale, with hard negative tracking
(−0.045em at hero scale, easing to −0.015em at title scale) and 0.88 line-height so headlines
lock into a solid mass. General Sans 400/500 for body at 1.6 line-height, 62ch max measure.
The eyebrow is the third voice: 11px, weight 500, uppercase, +0.18em tracking. Display sizes
are all clamp() — the hero wordmark runs to 17rem on desktop.

**Layout.** One fixed element only: the header (76px, transparent, logo left / nav centre /
bag right). Content is gutter-bound (clamp(20px, 5vw, 72px)), sections separated by
clamp(80px, 12vw, 176px). The site is one continuous scroll — pinned hero (320vh), pinned
anatomy (400vh), horizontally-pinned collections (360vh) — with mobile substituting
scroll-snap for every pin.

**Backgrounds and imagery.** Full-bleed tonal fields, not photographs behind text. Imagery is
warm, high-sun, slightly blown out; water is turquoise, never navy. A grain film
(--grain-url, 4.5% multiply on light, ~7% soft-light on dark) sits over the entire viewport
permanently — this is the brand's tactile signature.

**Depth.** Hairlines first (1px solid rgba(10,10,10,0.14)). Cards are flat: image field at
14px radius, a hairline rule, text below — no border, no shadow. The two shadow tokens exist
for overlays only and are warm/sea-tinted, never neutral grey.

**Corners.** Pills (999px) for every action and chip; 14px for media and image fields; 24px for
large panels; 2px for badges; 0 for section seams. Never 4/8px "app" radii.

**Motion.** Everything is scroll-progress-driven and scrubbed — nothing plays once and stops.
Easing is --ease-tide (cubic-bezier(0.22,1,0.36,1)) by default; --ease-drift for long text
reveals. Durations: 140ms colour, 240ms button state, 420ms lens change, 720ms image zoom,
1100ms text reveal. Stagger 70ms. Smooth scroll via Lenis at lerp 0.085. No bounce, no spring,
no overshoot. prefers-reduced-motion collapses every duration to 1ms and disables pinning
transforms.

**States.** Hover = colour shift, never an opacity fade: solid buttons darken sun-500→sun-600,
outline buttons invert to abyssal fill, images scale 1.06. Press has no separate treatment
beyond the browser default — E-BEACH does not shrink buttons. Focus is a 2px --sea-400 ring at
3px offset, always visible. Disabled is 40% opacity plus not-allowed.

**Transparency and blur.** Only for the bag-drawer scrim (rgba(6,34,45,0.5)) and, rarely, a
glass header over imagery (--glass-light / --blur-glass). Body copy never sits on blur.

**Forms** have no boxes. Every field is an underline that turns --sea-400 on focus and
--sun-600 on error. Checkboxes are 2px-radius squares with a sun fill; switches are sea pills.

---

## Iconography

The brand supplied **no icon set**. Substitution flagged: the system uses
**[Lucide](https://lucide.dev) 0.454.0 from CDN**, locked to **1.5 stroke weight** and
currentColor, wrapped by the Icon component. Lucide was chosen for its thin, geometric,
open-terminal strokes, which sit closest to the logo's single-weight swoosh.

- No icon font, no sprite sheet, no PNG icons.
- **No emoji, ever** — not in UI, not in copy, not as a bullet.
- Unicode is used as punctuation only: the middot as a spec and marquee separator, the em dash
  in eyebrows.
- Icons are decorative companions to text, never the only label — except IconButton, which
  requires an accessible label prop.
- Icons in use: arrow-left, arrow-right, chevron-down, check, x, shopping-bag.
- **Ask:** if E-BEACH owns a custom glyph set, drop the SVGs into assets/icons/ and we will
  repoint the Icon component.

### Logo
Two lockups, both extracted from the supplied files — full lockup (mark + wordmark) and mark
alone. Ink on sand/light, foam on sea/abyssal. Never recoloured, never gradient-filled, never
distorted, never outlined. Clear space equals the height of the mark's circle. The supplied
files are raster (939×209, JPEG-derived PNG with the background keyed out) — **please send the
original vector.**

---

## Components

Authored from the brief (no source library existed), grouped by concern under components/.

- **core/** — Button, IconButton, Icon, Badge, Tag, SectionLabel
- **forms/** — Input, Select, Checkbox, Switch, SwatchPicker
- **brand/** — Logo, GrainOverlay, ScrollCue, Marquee, WaveDivider
- **commerce/** — ProductCard, CollectionCard, SpecRow

### Intentional additions
- **Icon** — a wrapper is required because the brand ships no glyph set; it pins Lucide at the
  brand's 1.5 stroke weight so consumers cannot drift.
- **GrainOverlay, ScrollCue, WaveDivider, Marquee** — not conventional primitives, but the
  brief names each as a required, repeated element of the brand experience.

Each component directory holds Name.jsx, Name.d.ts, Name.prompt.md and one @dsCard HTML
showing its states.

---

## Index

| Path | What it is |
| --- | --- |
| styles.css | Entry point — @import lines only. Link this one file. |
| tokens/fonts.css | Fontshare import + --font-display / --font-body. |
| tokens/colors.css | Sand / sun / sea / ink scales, semantic aliases, gradients. |
| tokens/typography.css | Sizes, line-heights, tracking, composite --type-* roles. |
| tokens/spacing.css | 4px scale, gutter, section rhythm, measures. |
| tokens/effects.css | Radii, the two shadows, hairlines, glass, grain URL. |
| tokens/motion.css | Easings, durations, stagger, reduced-motion overrides. |
| tokens/base.css | Element defaults, link colours, .eb-label, .eb-grain. |
| assets/ | logo-ink, logo-foam, mark-ink, mark-foam, product/ (cut-out shots), video/ (turntable + beach plate), placeholders/. |
| guidelines/*.card.html | 18 foundation specimen cards (Colors, Type, Spacing, Brand, Motion). |
| components/{core,forms,brand,commerce}/ | 19 components with cards and prompts. |
| ui_kits/website/ | Full scroll-driven site recreation — see its README.md. |
| SKILL.md | Agent Skills entry point. |

## Known gaps / asks
1. **Fonts** — Clash Display and General Sans load from the Fontshare CDN. If E-BEACH holds
   licensed binaries, drop them in assets/fonts/ and swap the @import for @font-face rules.
2. **Logo vector** — only raster was supplied.
3. **Photography** — two real product shots were supplied (front + three-quarter) and are
   cut out to transparent PNGs in assets/product/. They drive the hero and anatomy flip.
   Lifestyle and collection imagery is still generated tonal placeholder, and the
   configurator keeps the schematic GlassesFigure because live recolouring needs vector,
   not photography. Per-colourway product shots would replace it.
4. **Icons** — Lucide substituted; see Iconography.
