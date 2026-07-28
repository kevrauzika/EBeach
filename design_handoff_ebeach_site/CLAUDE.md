# E-BEACH — working notes for Claude Code

Read `README.md` first (full handoff spec), then `BRAND.md` (brand guide: tone of voice, visual foundations, iconography).

## Rules that are not negotiable

- **Tokens are the source of truth.** Never hardcode a hex, radius, duration or easing that exists in `tokens/`. If a value is missing, add a token — don't inline it.
- **No drop-shadow cards.** Depth = hairlines, tonal shifts, gradients. The three shadows in `tokens/effects.css` are the only ones, and they are rare.
- **Gradients only as section transitions.** Never on a button, card, badge or text fill.
- **The logo is untouchable.** Use `assets/logo-*.png` / `mark-*.png`. Ink on light, foam on dark. Never tint, gradient, outline, rotate or redraw it.
- **No emoji in the interface.** Ever.
- **All animation is scroll-scrubbed and reversible.** If it only fires once on entry, it's wrong.
- **Motion is tide-like** — long, weighted, `--ease-tide`. No springs, no bounce, no overshoot.
- **Keep the global grain overlay.** It's a brand signature, not decoration.
- **Copy is Brazilian Portuguese**, lowercase-leaning, short, sensory, never salesy. See BRAND.md for voice and examples.

## Running the prototype

```
open ui_kits/website/index.html
```

No build step — inline Babel. This is a reference, not the shipping target.

## Porting to production

Recommended stack for the marketing site: Next.js App Router + Tailwind + Lenis + GSAP ScrollTrigger.

1. Transpose `tokens/*.css` into `tailwind.config` theme extensions (keep the CSS custom properties too — components read them directly).
2. Self-host the Fontshare woff2 files into `assets/fonts/` and repoint `tokens/fonts.css`.
3. Port `components/` one directory at a time; the `.d.ts` files are the props contract.
4. Rebuild the eight sections from `ui_kits/website/`, driving ScrollTrigger from the Lenis instance.
5. Honour `prefers-reduced-motion` at both the token and the scrub level.
