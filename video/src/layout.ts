import type { Reel } from './timing';

/* Where the horizon, shore and product sit. Captioned reels lift the scene so a
   band of dry sand opens up underneath for the model name. */
export type Layout = {
  horizon: number;
  shore: number;
  /** Product centre line. */
  cy: number;
  /** Product width at rest. */
  width: number;
  shadowY: number;
};

export const SUN = { x: 1490, y: 205 };

export const captioned = (r: Reel) => r.pairs.every((p) => p.name);

export const layoutFor = (r: Reel): Layout =>
  captioned(r)
    ? { horizon: 630, shore: 842, cy: 404, width: 980, shadowY: 880 }
    : { horizon: 690, shore: 905, cy: 470, width: 1060, shadowY: 968 };
