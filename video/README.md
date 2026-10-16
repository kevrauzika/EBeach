# Hero reels (Remotion)

Looping card videos for the site hero: the line passes one pair at a time across a
noon beach, with the ink lockup watermarked in the sky behind.

| Composition | Output | Content |
|---|---|---|
| `ModelReel` | `model-reel.mp4` | 7 models, each captioned with its name and line — 21 s |
| `HeroReel` | `hero-reel.mp4` | first cut, 4 pairs, no captions — 14 s |

- 1920×1080, 60 fps. Every periodic motion completes a whole number of cycles per
  loop, so the last frame flows into the first with no seam.
- Motion blur is rendered and wraps around the loop. Samples follow the product's
  speed: held frames render once, hand-offs take up to 8.
- Product cut-outs live in `public/modelos/` (and `public/glasses/` for the first
  cut), trimmed to their alpha bounds so every pair reads at the same size. To add,
  rename or reorder a model, edit `MODELS` in `src/reels.ts`.

```sh
npm install
npm run studio    # preview / tweak
npm run render    # out/model-reel.mp4   (render:hero for the first cut)
npm run poster    # out/model-reel-poster.jpg (reduced motion + first paint)
npm run publish   # copy reels + posters into ../site/public/assets/video/
```

Rendering uses the GPU (ANGLE) and renders in slot-aligned chunks through one
browser — see `render.mjs`.
