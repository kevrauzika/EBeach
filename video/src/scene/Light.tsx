import { AbsoluteFill } from 'remotion';
import { SUN } from '../layout';
import { H, W, useReel, wave } from '../timing';

/* Lens-side light: sun bloom over everything, faint flare ghosts on the axis from
   the sun through frame centre, and a warm sea-tinted vignette. Kept subtle — the
   glasses are the subject, the light only says "noon". */

const GHOSTS = [
  { t: 0.82, r: 22, o: 0.12, c: '191,233,238' },
  { t: 1.25, r: 90, o: 0.06, c: '255,196,107' },
  { t: 1.55, r: 34, o: 0.08, c: '127,211,206' },
];

export const Light = ({ f }: { f: number }) => {
  const shimmer = 0.9 + 0.1 * wave(useReel(), f, 4.7);
  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${SUN.x}px ${SUN.y}px,
            rgba(255, 248, 228, ${0.55 * shimmer}) 0px,
            rgba(255, 230, 170, 0.18) 260px,
            rgba(255, 230, 170, 0) 760px)`,
          mixBlendMode: 'screen',
        }}
      />
      {GHOSTS.map((g, i) => {
        const cx = SUN.x + (W / 2 - SUN.x) * g.t * 2;
        const cy = SUN.y + (H / 2 - SUN.y) * g.t * 2;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: cx - g.r,
              top: cy - g.r,
              width: g.r * 2,
              height: g.r * 2,
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(${g.c},${g.o * 1.6}) 0%, rgba(${g.c},${g.o}) 55%, rgba(${g.c},0) 100%)`,
              mixBlendMode: 'screen',
              opacity: shimmer,
            }}
          />
        );
      })}
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(ellipse 75% 70% at 50% 46%, rgba(6,34,45,0) 60%, rgba(14,92,115,0.10) 85%, rgba(6,34,45,0.2) 100%)',
        }}
      />
    </AbsoluteFill>
  );
};
