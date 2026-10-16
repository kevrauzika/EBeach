import { AbsoluteFill, Img, staticFile } from 'remotion';
import { layoutFor } from '../layout';
import { W, carousel, clamp01, easeSwell, mod, trackOffset, useReel, wave } from '../timing';

/* The carousel: one pair centred at a time, the next already sliding in from the
   right as the last one leaves left — they travel together on one track, so the
   hand-off is a single continuous move rather than a cut. */

export const SPACING = 1780; // far enough that neighbours never overlap on screen

export const Glasses = ({ f }: { f: number }) => {
  const r = useReel();
  const L = layoutFor(r);
  const p = carousel(r, f);

  return (
    <AbsoluteFill style={{ perspective: 2400, perspectiveOrigin: `50% ${L.cy}px` }}>
      {r.pairs.map((g, i) => {
        const d = trackOffset(r, i, p);
        if (Math.abs(d) > 1.25) return null;
        const a = Math.abs(d);

        // The tiny constant offsets keep the centred pair off exact integer pixels and
        // a zero rotation on slot boundaries; there Chrome skips resampling and the
        // product would pop one frame sharper than its neighbours.
        const x = W / 2 + d * SPACING + 0.37;
        const bob = 12 * wave(r, f, 1.75, i * 0.21);
        const y = L.cy + bob + a * 26;
        const rotY = -d * 26 - 0.013;
        const rotZ = d * 5 + 1.1 * wave(r, f, 3.5, i * 0.13);
        const scale = 1 - 0.12 * Math.min(1, a);
        const centred = 1 - Math.min(1, a);

        // Specular sweep right after the pair lands centre.
        const since = mod(f - i * r.slot, r.total);
        const sweep = easeSwell(clamp01((since - 12) / 96));

        return (
          <div key={g.id} style={{ position: 'absolute', inset: 0, zIndex: Math.round(10 - a * 5) }}>
            <Shadow x={x} y={L.shadowY} lift={bob} strength={centred} />
            <div
              style={{
                position: 'absolute',
                left: x - 700,
                top: y - 420,
                width: 1400,
                height: 840,
                background: `radial-gradient(ellipse at center, ${g.glow}66 0%, ${g.glow}22 38%, ${g.glow}00 68%)`,
                opacity: 0.35 + 0.65 * centred,
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: x - L.width / 2,
                top: y,
                width: L.width,
                transform: `translateY(-50%) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${scale})`,
              }}
            >
              <Img src={staticFile(g.src)} style={{ width: '100%', display: 'block' }} />
              {sweep > 0 && sweep < 1 && <Sheen src={staticFile(g.src)} progress={sweep} />}
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

/* A band of sunlight glancing across the lens, clipped to the product silhouette. */
const Sheen = ({ src, progress }: { src: string; progress: number }) => {
  const mask = {
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
  } as const;
  const pos = -45 + progress * 190; // % of width
  const fade = Math.sin(Math.PI * progress);
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', mixBlendMode: 'screen', ...mask }}>
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          bottom: '-30%',
          left: `${pos}%`,
          width: '26%',
          transform: 'skewX(-22deg)',
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,250,235,0.55) 42%, rgba(255,255,255,0.9) 50%, rgba(255,250,235,0.55) 58%, rgba(255,255,255,0) 100%)',
          opacity: 0.85 * fade,
        }}
      />
    </div>
  );
};

/* Soft contact shadow on the sand, sea-tinted per tokens (never grey). */
const Shadow = ({ x, y, lift, strength }: { x: number; y: number; lift: number; strength: number }) => {
  const s = 1 - lift / 120;
  return (
    <div
      style={{
        position: 'absolute',
        left: x - 380,
        top: y,
        width: 760,
        height: 70,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(14,92,115,0.30) 0%, rgba(14,92,115,0.12) 45%, rgba(14,92,115,0) 72%)',
        transform: `scale(${s}, ${s})`,
        opacity: strength * 0.9,
        filter: 'blur(6px)',
      }}
    />
  );
};
