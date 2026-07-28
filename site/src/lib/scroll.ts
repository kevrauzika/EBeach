'use client';

import { useEffect, useRef, useState } from 'react';

/* ── math ─────────────────────────────────────────────────────────────── */

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
/** Remap p from the [a,b] window onto 0..1, clamped. */
export const range = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));
/** Cubic smoothstep — used where a linear scrub reads too mechanical. */
export const smooth = (t: number) => t * t * (3 - 2 * t);

/* ── one rAF loop for the whole page ──────────────────────────────────── */

type Tick = () => void;
const subs = new Set<Tick>();
let raf = 0;

function loop() {
  subs.forEach((fn) => fn());
  raf = subs.size ? requestAnimationFrame(loop) : 0;
}

function subscribe(fn: Tick) {
  subs.add(fn);
  if (!raf) raf = requestAnimationFrame(loop);
  return () => {
    subs.delete(fn);
    if (!subs.size && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };
}

/* ── progress hooks ───────────────────────────────────────────────────────
   Everything on this site is driven by a 0..1 scroll position, never by a
   fire-once entry trigger: scroll back up and every animation runs backwards.
   The loop only runs for sections that are actually near the viewport.        */

type Mode = 'enter' | 'pin';

function measure(el: HTMLElement, mode: Mode) {
  const r = el.getBoundingClientRect();
  if (mode === 'pin') {
    // 0 when the section's top reaches the viewport top, 1 at its end.
    const span = Math.max(1, r.height - window.innerHeight);
    return clamp01(-r.top / span);
  }
  // 0 as the section's top enters from the bottom, 1 once it has fully left.
  const total = r.height + window.innerHeight;
  return clamp01(1 - r.bottom / total);
}

function useProgress(ref: React.RefObject<HTMLElement | null>, mode: Mode) {
  const [p, setP] = useState(0);
  const last = useRef(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let stop: (() => void) | null = null;

    const tick = () => {
      const v = measure(el, mode);
      // Sub-pixel churn would re-render the subtree for nothing.
      if (Math.abs(v - last.current) < 0.0004) return;
      last.current = v;
      el.style.setProperty('--p', v.toFixed(4));
      setP(v);
    };

    // Only spend frames on sections in or near the viewport.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !stop) {
          stop = subscribe(tick);
        } else if (!entry.isIntersecting && stop) {
          stop();
          stop = null;
          tick(); // settle on the final clamped value (0 or 1)
        }
      },
      { rootMargin: '20% 0px 20% 0px' },
    );
    io.observe(el);
    tick();

    return () => {
      io.disconnect();
      stop?.();
    };
  }, [ref, mode]);

  return p;
}

/** Progress as a section travels through the viewport. */
export const useScrollProgress = (ref: React.RefObject<HTMLElement | null>) => useProgress(ref, 'enter');

/** Progress through a tall section with a sticky stage inside it. */
export const usePinProgress = (ref: React.RefObject<HTMLElement | null>) => useProgress(ref, 'pin');

/* ── environment ──────────────────────────────────────────────────────── */

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    const on = () => setReduced(m.matches);
    on();
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, []);
  return reduced;
}

/** Matches a media query on the client. `false` until mounted. */
export function useMedia(query: string) {
  const [hit, setHit] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const on = () => setHit(m.matches);
    on();
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, [query]);
  return hit;
}
