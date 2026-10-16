import { AbsoluteFill, Easing } from 'remotion';
import { layoutFor } from '../layout';
import { carousel, clamp01, easeDrift, mod, trackOffset, useReel } from '../timing';

/* Model name on the dry sand, styled as the site's section eyebrow + display
   title. Letters rise in on the site's 70ms stagger as each pair lands, and roll
   up and out as it leaves, so consecutive names read like a turning counter. */

const LEFT = 120;
const LEAD = 16; // name starts rising this many frames before its pair lands
const STAGGER_IN = 4; // ≈ 70ms at 60fps (--stagger)
const IN = 52;
const STAGGER_OUT = 2;
const OUT = 26;
const easeOut = Easing.bezier(0.55, 0, 0.78, 0.4);

const INK = '#06222D'; // sea-900
const MUTED = '#5E635F'; // ink-500
const SUN = '#FF8A3D'; // sun-500

export const Captions = ({ f }: { f: number }) => {
  const r = useReel();
  const L = layoutFor(r);
  const top = L.shore + 76;

  return (
    <AbsoluteFill style={{ pointerEvents: 'none' }}>
      {r.pairs.map((g, i) => {
        const a = mod(f - i * r.slot + LEAD, r.total);
        const exitAt = r.hold + LEAD;
        const chars = [...(g.name ?? '')];
        if (a > exitAt + OUT + STAGGER_OUT * chars.length + 4) return null;

        const rise = (delay: number) => easeDrift(clamp01((a - delay) / IN));
        const leave = (delay: number) => easeOut(clamp01((a - exitAt - delay) / OUT));
        // Slight lateral drift that echoes the carousel direction.
        const dx = 26 * (1 - rise(0)) - 34 * leave(0);
        const slide = (delay: number, outDelay: number) =>
          // 140%: clears the mask's descender padding, so nothing peeks before its cue.
          `translateY(${(1 - rise(delay)) * 140 - leave(outDelay) * 140}%)`;
        const rule = rise(4) * (1 - leave(0));

        return (
          <div key={g.id} style={{ position: 'absolute', left: LEFT, top, transform: `translateX(${dx}px)` }}>
            {/* Eyebrow: 01 —— LINHA SPORT */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                fontFamily: 'General Sans',
                fontWeight: 500,
                fontSize: 21,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: MUTED,
                height: 26,
              }}
            >
              <Mask>
                <span style={{ display: 'block', color: SUN, transform: slide(0, 0) }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </Mask>
              <span
                style={{
                  width: 40,
                  height: 1.5,
                  background: 'currentColor',
                  opacity: 0.5,
                  transform: `scaleX(${rule})`,
                  transformOrigin: leave(0) > 0 ? 'right center' : 'left center',
                }}
              />
              <Mask>
                <span style={{ display: 'block', transform: slide(6, 2) }}>{g.line}</span>
              </Mask>
            </div>

            {/* Name */}
            <div
              style={{
                marginTop: 14,
                display: 'flex',
                fontFamily: 'Clash Display',
                fontWeight: 700,
                fontSize: 112,
                lineHeight: 0.88,
                letterSpacing: '-0.03em',
                color: INK,
                whiteSpace: 'pre',
              }}
            >
              {chars.map((c, j) => (
                <Mask key={j}>
                  <span style={{ display: 'block', transform: slide(8 + j * STAGGER_IN, 4 + j * STAGGER_OUT) }}>
                    {c === ' ' ? ' ' : c}
                  </span>
                </Mask>
              ))}
            </div>
          </div>
        );
      })}

      <Progress f={f} top={top} />
    </AbsoluteFill>
  );
};

/** Clips a line so letters appear to rise out of the sand line. Padded so the
    descender of "p" is not cut. */
const Mask = ({ children }: { children: React.ReactNode }) => (
  <span style={{ display: 'block', overflow: 'hidden', padding: '0.06em 0 0.16em', margin: '-0.06em 0 -0.16em' }}>
    {children}
  </span>
);

/* One pill per model; the current one stretches and fills with sun, tracking the
   carousel continuously so the hand-off glides rather than steps. */
const Progress = ({ f, top }: { f: number; top: number }) => {
  const r = useReel();
  const p = carousel(r, f);
  return (
    <div
      style={{
        position: 'absolute',
        right: LEFT,
        top: top + 92,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}
    >
      {r.pairs.map((g, i) => {
        const act = clamp01(1 - Math.abs(trackOffset(r, i, p)));
        return (
          <div
            key={g.id}
            style={{
              position: 'relative',
              width: 14 + 46 * act,
              height: 8,
              borderRadius: 999,
              background: 'rgba(6, 34, 45, 0.16)',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', inset: 0, background: SUN, opacity: act }} />
          </div>
        );
      })}
    </div>
  );
};
