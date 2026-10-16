import { useMemo } from 'react';
import { AbsoluteFill, Img, random, staticFile } from 'remotion';
import { SUN, layoutFor, type Layout } from '../layout';
import { H, TAU, W, carousel, cyclesFor, useReel, wave } from '../timing';

/* Noon at the beach: blown-out sky, sun high right, turquoise sea, wet sand and a
   wash of foam. The ink lockup sits in the sky as a watermark behind the product.
   Palette is tokens/colors.css — sky, sun, sea, sand — nothing navy. */

export const Backdrop = ({ f }: { f: number }) => {
  const L = layoutFor(useReel());
  return (
    <AbsoluteFill>
      <Sky L={L} />
      <Sun f={f} />
      <Watermark f={f} L={L} />
      <Sea f={f} L={L} />
      <Sand f={f} L={L} />
    </AbsoluteFill>
  );
};

const Sky = ({ L }: { L: Layout }) => (
  <AbsoluteFill
    style={{
      background: `linear-gradient(180deg,
        #A9E1E9 0%,
        #BFE9EE 30%,
        #E8F3EC 72%,
        #FBF7EC ${(L.horizon / H) * 100}%)`,
    }}
  />
);

const Sun = ({ f }: { f: number }) => {
  const r = useReel();
  const pulse = 1 + 0.025 * wave(r, f, 7);
  // 12 rays, 30° apart: one ray-spacing per loop reads as a slow turn and loops cleanly.
  const turn = (f / r.total) * 30;
  return (
    <AbsoluteFill>
      {/* Wide halo — the whole upper sky warms toward the sun. */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${SUN.x}px ${SUN.y}px,
            rgba(255, 246, 220, 0.95) 0px,
            rgba(255, 214, 140, 0.55) 140px,
            rgba(255, 196, 107, 0.22) 420px,
            rgba(255, 196, 107, 0) 900px)`,
        }}
      />
      {/* Rays */}
      <div
        style={{
          position: 'absolute',
          left: SUN.x - 1500,
          top: SUN.y - 1500,
          width: 3000,
          height: 3000,
          transform: `rotate(${turn}deg)`,
          background: `repeating-conic-gradient(from 0deg,
            rgba(255, 244, 214, 0) 0deg,
            rgba(255, 244, 214, 0.55) 5deg,
            rgba(255, 244, 214, 0) 11deg,
            rgba(255, 244, 214, 0) 30deg)`,
          WebkitMaskImage: 'radial-gradient(circle, #000 4%, rgba(0,0,0,0.35) 22%, transparent 48%)',
          maskImage: 'radial-gradient(circle, #000 4%, rgba(0,0,0,0.35) 22%, transparent 48%)',
          mixBlendMode: 'screen',
          opacity: 0.6,
        }}
      />
      {/* Disc */}
      <div
        style={{
          position: 'absolute',
          left: SUN.x - 92,
          top: SUN.y - 92,
          width: 184,
          height: 184,
          borderRadius: '50%',
          transform: `scale(${pulse})`,
          background: 'radial-gradient(circle at 50% 50%, #FFFFFF 0%, #FFF6DD 46%, #FFD58A 78%, #FFC46B 100%)',
          boxShadow: '0 0 60px 20px rgba(255, 228, 160, 0.85), 0 0 180px 70px rgba(255, 196, 107, 0.45)',
        }}
      />
    </AbsoluteFill>
  );
};

const Watermark = ({ f, L }: { f: number; L: Layout }) => {
  const r = useReel();
  // Faint counter-parallax against the carousel; sin of the carousel phase keeps it periodic.
  const dx = -22 * Math.sin((TAU / r.n) * carousel(r, f));
  const breathe = 1 + 0.012 * wave(r, f, 14);
  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
      <Img
        src={staticFile('logo-ink.png')}
        style={{
          position: 'absolute',
          top: L.cy - 208,
          width: 1560,
          transform: `translateX(${dx}px) scale(${breathe})`,
          opacity: 0.62,
          mixBlendMode: 'soft-light',
        }}
      />
    </AbsoluteFill>
  );
};

/* ── Sea ─────────────────────────────────────────────────────────────── */

function linePath(y: number, amp: number, k: number, phase: number) {
  let d = '';
  for (let x = -40; x <= W + 40; x += 12) {
    const yy = y + amp * Math.sin(x * k + phase) + amp * 0.35 * Math.sin(x * k * 2.3 + phase * 2);
    d += `${d ? 'L' : 'M'}${x},${yy.toFixed(2)}`;
  }
  return d;
}

// Broken crests at fractions of the sea band: dashes scale with distance and slide
// along the swell, shifting a whole number of dash patterns per loop.
const SWELLS = [
  { at: 0.07, amp: 1.2, k: 0.013, period: 4.7, w: 1, o: 0.32, dash: [26, 40, 10, 54], slide: 1 },
  { at: 0.15, amp: 1.8, k: 0.011, period: 3.5, w: 1.4, o: 0.34, dash: [44, 70, 18, 60], slide: -1 },
  { at: 0.25, amp: 2.6, k: 0.009, period: 2.8, w: 2, o: 0.36, dash: [70, 90, 26, 110], slide: 1 },
  { at: 0.39, amp: 3.6, k: 0.0072, period: 2.8, w: 2.8, o: 0.4, dash: [110, 140, 40, 150], slide: -1 },
  { at: 0.58, amp: 4.8, k: 0.0058, period: 2.3, w: 3.6, o: 0.42, dash: [170, 190, 60, 200], slide: 1 },
  { at: 0.8, amp: 6.2, k: 0.0046, period: 2, w: 4.6, o: 0.48, dash: [260, 220, 90, 260], slide: -1 },
];

function useGlints(L: Layout) {
  return useMemo(
    () =>
      Array.from({ length: 110 }, (_, i) => {
        const near = random(`gy${i}`);
        const y = L.horizon + 8 + Math.pow(near, 1.4) * (L.shore - L.horizon - 30);
        // Most glints gather in the sun's column, the rest scatter across the water.
        const inColumn = random(`gc${i}`) < 0.62;
        const spread = 80 + (y - L.horizon) * 1.6;
        const x = inColumn ? SUN.x + (random(`gx${i}`) - 0.5) * spread * 2 : random(`gx${i}`) * W;
        return {
          x,
          y,
          size: 3 + (y - L.horizon) / 22,
          period: 1.4 + random(`gk${i}`) * 5.6,
          phase: random(`gp${i}`),
        };
      }),
    [L.horizon, L.shore],
  );
}

const Sea = ({ f, L }: { f: number; L: Layout }) => {
  const r = useReel();
  const glints = useGlints(L);
  const band = L.shore - L.horizon;
  const slideCycles = cyclesFor(r, 14);
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <linearGradient id="sea" x1="0" y1={L.horizon} x2="0" y2={L.shore + 40} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1A8C91" />
          <stop offset="0.18" stopColor="#2AA7A0" />
          <stop offset="0.65" stopColor="#4CBAB4" />
          <stop offset="1" stopColor="#7FD3CE" />
        </linearGradient>
        <radialGradient
          id="column"
          cx={SUN.x}
          cy={L.horizon}
          r="420"
          gradientUnits="userSpaceOnUse"
          gradientTransform={`translate(${SUN.x} ${L.horizon}) scale(0.55 1) translate(${-SUN.x} ${-L.horizon})`}
        >
          <stop offset="0" stopColor="#FFF6DD" stopOpacity="0.85" />
          <stop offset="0.5" stopColor="#FFE2A8" stopOpacity="0.28" />
          <stop offset="1" stopColor="#FFE2A8" stopOpacity="0" />
        </radialGradient>
        <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.1" />
        </filter>
      </defs>

      <rect x="0" y={L.horizon} width={W} height={H - L.horizon} fill="url(#sea)" />
      {/* Sun's reflection column */}
      <rect x="0" y={L.horizon} width={W} height={band + 40} fill="url(#column)" style={{ mixBlendMode: 'screen' }} />
      {/* Horizon haze */}
      <rect x="0" y={L.horizon - 3} width={W} height="8" fill="#FBF7EC" opacity="0.75" filter="url(#soft)" />

      {SWELLS.map((s, i) => (
        <path
          key={i}
          d={linePath(L.horizon + s.at * band, s.amp, s.k, TAU * ((cyclesFor(r, s.period) * f) / r.total) + i)}
          stroke="#E9FBF8"
          strokeWidth={s.w}
          strokeLinecap="round"
          strokeDasharray={s.dash.join(' ')}
          strokeDashoffset={(s.slide * slideCycles * s.dash.reduce((a, b) => a + b, 0) * f) / r.total}
          fill="none"
          opacity={s.o}
        />
      ))}

      {glints.map((g, i) => {
        const tw = Math.pow(Math.max(0, wave(r, f, g.period, g.phase)), 6);
        if (tw < 0.02) return null;
        return (
          <ellipse
            key={i}
            cx={g.x}
            cy={g.y}
            rx={g.size * (0.6 + tw)}
            ry={g.size * 0.22}
            fill="#FFFFFF"
            opacity={tw * 0.95}
            filter="url(#soft)"
          />
        );
      })}
    </svg>
  );
};

/* ── Sand + shore wash ─────────────────────────────────────────────────── */

function edge(fn: (x: number) => number) {
  let d = '';
  for (let x = -40; x <= W + 40; x += 10) d += `${d ? 'L' : 'M'}${x},${fn(x).toFixed(2)}`;
  return d;
}
const closed = (fn: (x: number) => number, closeTo: number) => `${edge(fn)}L${W + 40},${closeTo}L-40,${closeTo}Z`;

const Sand = ({ f, L }: { f: number; L: Layout }) => {
  const r = useReel();
  const S = L.shore;
  // One wash per pair.
  const per = r.total / r.n / 60;
  const wash = 0.5 + 0.5 * wave(r, f, per, 0.1);
  const lag = 0.5 + 0.5 * wave(r, f, per, 0.02);
  const drift = TAU * ((cyclesFor(r, 4.7) * f) / r.total);

  const sandTop = (x: number) => S - 6 + 5 * Math.sin(x * 0.0031 + 1.2) + 3 * Math.sin(x * 0.011);
  const washEdge = (x: number) =>
    S + 6 + wash * 46 + 9 * Math.sin(x * 0.0052 + drift) + 4 * Math.sin(x * 0.017 - drift * 2);
  const foamEdge = (x: number) =>
    S + 2 + lag * 38 + 8 * Math.sin(x * 0.0058 + drift + 0.6) + 3 * Math.sin(x * 0.02 - drift);

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <linearGradient id="sand" x1="0" y1={S - 10} x2="0" y2={H} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#D2B385" />
          <stop offset="0.22" stopColor="#E4C9A0" />
          <stop offset="0.55" stopColor="#F2E2C8" />
          <stop offset="1" stopColor="#EAD4B0" />
        </linearGradient>
        <linearGradient id="sheet" x1="0" y1={S - 30} x2="0" y2={S + 60} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7FD3CE" stopOpacity="0" />
          <stop offset="0.3" stopColor="#7FD3CE" stopOpacity="0.85" />
          <stop offset="1" stopColor="#BFE9EE" stopOpacity="0.6" />
        </linearGradient>
        <filter id="foamBlur" x="-10%" y="-200%" width="120%" height="500%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
      </defs>

      <path d={closed(sandTop, H)} fill="url(#sand)" />
      {/* Darker wet band the wash leaves behind */}
      <path d={closed((x) => sandTop(x) + 2, S + 70)} fill="#C9A878" opacity={0.28 + 0.12 * (1 - wash)} />
      {/* Thin water sheet running up the sand */}
      <path d={closed(washEdge, S - 30)} fill="url(#sheet)" />
      {/* Trailing foam line */}
      <path d={edge(foamEdge)} stroke="#FFFFFF" strokeWidth="3" fill="none" opacity="0.55" filter="url(#foamBlur)" />
      {/* Bright foam lip */}
      <path d={edge(washEdge)} stroke="#FFFFFF" strokeWidth="6" fill="none" opacity="0.92" filter="url(#foamBlur)" />
    </svg>
  );
};
