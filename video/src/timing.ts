import { createContext, useContext } from 'react';
import { Easing } from 'remotion';

export const W = 1920;
export const H = 1080;
export const FPS = 60;

export type Pair = {
  id: string;
  src: string;
  /** Halo tint behind the product — a sun or sea token. */
  glow: string;
  /** Display name and line, for reels that caption each model. */
  name?: string;
  line?: string;
};

/* A reel is a carousel of pairs: each gets a hold, then a hand-off to the next.
   Every periodic motion in the scene completes a whole number of cycles in
   `total`, so frame `total` is frame 0 and the loop has no seam. */
export type Reel = {
  pairs: readonly Pair[];
  hold: number;
  trans: number;
  slot: number;
  total: number;
  n: number;
};

export function makeReel(pairs: readonly Pair[], hold: number, trans: number): Reel {
  const slot = hold + trans;
  return { pairs, hold, trans, slot, total: slot * pairs.length, n: pairs.length };
}

const ReelContext = createContext<Reel | null>(null);
export const ReelProvider = ReelContext.Provider;
export function useReel() {
  const r = useContext(ReelContext);
  if (!r) throw new Error('useReel outside <ReelProvider>');
  return r;
}

// Brand easings (tokens/motion.css).
export const easeSwell = Easing.bezier(0.65, 0, 0.35, 1);
export const easeTide = Easing.bezier(0.22, 1, 0.36, 1);
export const easeDrift = Easing.bezier(0.16, 1, 0.3, 1);

export const TAU = Math.PI * 2;
export const mod = (a: number, n: number) => ((a % n) + n) % n;
export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/** Whole cycles per loop closest to a target period in seconds (never 0). */
export const cyclesFor = (r: Reel, seconds: number) => Math.max(1, Math.round(r.total / (seconds * FPS)));

/** sin with roughly the given period, snapped to whole cycles per loop — always seamless. */
export const wave = (r: Reel, f: number, seconds: number, phase = 0) =>
  Math.sin(TAU * ((cyclesFor(r, seconds) * f) / r.total + phase));

/** Carousel position: 0..n, advancing by exactly 1 per slot. */
export function carousel(r: Reel, f: number) {
  const t = mod(f, r.total);
  const k = Math.floor(t / r.slot);
  const tau = t - k * r.slot;
  const step = easeSwell(clamp01((tau - r.hold) / r.trans));
  // A sliver of linear drift so the product never sits perfectly still.
  return k + 0.04 * (tau / r.slot) + 0.96 * step;
}

/** Signed distance of pair i from centre on the wrapped track, in [-n/2, n/2). */
export const trackOffset = (r: Reel, i: number, p: number) => mod(i - p + r.n / 2, r.n) - r.n / 2;
