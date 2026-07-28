# UI kit — E-BEACH site institucional

Single scroll-driven page, the brand's only digital surface today. Built entirely from the
design-system primitives (`window.EBEACHDesignSystem_3fff58`); nothing is re-implemented locally
except `GlassesFigure`, a geometric stand-in for product photography that does not exist yet.

## Files
| File | Role |
| --- | --- |
| `index.html` | Page shell — loads React, Babel, Lucide, Lenis and `_ds_bundle.js`, then the section scripts. |
| `hooks.jsx` | `useScrollProgress`, `usePinProgress`, `useReducedMotion`, `lerp/clamp01/range`, `BRL`. |
| `Glasses.jsx` | `GlassesFigure` — schematic product render, colour-driven for the configurator. |
| `ProductFlip.jsx` | Scroll-driven Y-axis flip between the two real product photographs — the fallback when video cannot decode. |
| `ScrollVideo.jsx` | `ScrollVideo` (scroll-scrubbed turntable clip) + `LoopVideo` (ambient beach plate). Clips are fetched as Blobs because the host serves without HTTP Range, which a plain `src=` needs to seek. |
| `SiteHeader.jsx` | Fixed header (logo is the only fixed brand element) + `BagDrawer`. |
| `Hero.jsx` | 360vh pinned hero: the turntable clip is scrubbed frame-by-frame by scroll, scales 2.35→1, blended `multiply` so the white studio background drops out; the sky turns to sand and the wordmark reveals behind it. |
| `Manifesto.jsx` | Word-by-word scroll reveal. |
| `Anatomy.jsx` | 400vh pinned anatomy — the product keeps turning while connector lines draw in. |
| `Collections.jsx` | Horizontal pinning on desktop, scroll-snap carousel under 860px. |
| `Configurator.jsx` | Live frame + lens configurator with dynamic pricing. |
| `Gallery.jsx` | Asymmetric parallax grid with the "Arraste" custom cursor. |
| `Proof.jsx` | Testimonial marquee. |
| `SiteFooter.jsx` | Wave seam, looping beach plate behind the "Encare a luz" CTA, newsletter, abyssal footer with large foam logo. |
| `app.jsx` | Composition + bag state. |

## Interactions to try
Pick a frame and a lens in the configurator — the render and price update live — then
**Adicionar à sacola** opens the bag drawer. The header flips to foam over the dark sections.

## Known gaps
Lifestyle and collection imagery is still generated tonal placeholder in `assets/placeholders/`.
The configurator keeps `GlassesFigure` because live recolouring needs a vector, not a photo —
supply per-colourway shots and it can use `ProductFlip` too.
