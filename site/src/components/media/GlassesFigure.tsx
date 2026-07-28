'use client';

import { useId } from 'react';
import type { Lens } from '@/lib/catalog';

/* Vector stand-in for the product, traced off assets/product/ebeach-front.png so
   the silhouette is the real Maré 01 wayfarer rather than a generic shape.
   It exists because live recolouring needs vector: a photograph cannot change
   frame and lens colour. Per-colourway studio shots would replace it.

   Geometry is authored for the left half only and mirrored about the centre,
   which keeps the two rims identical and the file short. */

const VB_W = 1048;
const VB_H = 459;
const MID = VB_W / 2;

/* Outer edge of the left rim. Wayfarer: horizontal brow, outer edge slanting out
   toward the top, near-flat lower edge. */
const RIM_OUTER =
  'M132,80 L448,80 C476,80 496,100 494,128 L478,258 C473,304 436,342 392,344 L222,350 C176,354 142,324 132,282 L100,152 C92,110 106,80 132,80 Z';

/* Lens opening — the same silhouette inset by the rim thickness. */
const LENS =
  'M148,112 L444,112 C462,112 472,122 470,140 L456,254 C452,286 428,310 396,312 L226,318 C190,320 166,300 158,266 L130,148 C126,126 132,112 148,112 Z';

/* Straight brow bar across the nose, its underside arched out for the bridge.
   Top edge sits flush with the rims so the brow reads as one line. */
const BRIDGE = 'M462,78 L586,78 L586,142 C556,108 492,108 462,142 Z';

/* Temple, folded back the way it reads in the front-view photograph. */
const TEMPLE = 'M118,84 C88,90 56,104 26,124 L34,156 C62,136 92,122 122,116 Z';

export type GlassesFigureProps = {
  width?: number | string;
  frame?: string;
  lens?: Pick<Lens, 'stops' | 'angle'>;
};

const DEFAULT_LENS: Pick<Lens, 'stops' | 'angle'> = {
  stops: [
    { offset: 0, color: '#7FD3CE' },
    { offset: 1, color: '#0E5C73' },
  ],
  angle: 160,
};

/** CSS gradient degrees → SVG objectBoundingBox coordinates. */
function vector(angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  const x = Math.cos(rad) / 2;
  const y = Math.sin(rad) / 2;
  return { x1: 0.5 - x, y1: 0.5 - y, x2: 0.5 + x, y2: 0.5 + y };
}

export function GlassesFigure({ width = 520, frame = '#06222D', lens = DEFAULT_LENS }: GlassesFigureProps) {
  const uid = useId().replace(/:/g, '');
  const gid = `lens-${uid}`;
  const gloss = `gloss-${uid}`;
  const v = vector(lens.angle);
  const paint = { transition: 'fill var(--dur-base) var(--ease-tide)' };

  /* One half, then the same half mirrored. */
  const half = (
    <>
      <path d={TEMPLE} fill={frame} style={paint} />
      <path d={LENS} fill={`url(#${gid})`} />
      <path d={LENS} fill={`url(#${gloss})`} />
      <path d={`${RIM_OUTER} ${LENS}`} fillRule="evenodd" fill={frame} style={paint} />
    </>
  );

  return (
    <div role="img" aria-label="Óculos E-BEACH" style={{ width, maxWidth: '100%' }}>
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} style={{ display: 'block', width: '100%', height: 'auto' }}>
        <defs>
          <linearGradient id={gid} x1={v.x1} y1={v.y1} x2={v.x2} y2={v.y2}>
            {lens.stops.map((st) => (
              <stop key={st.offset} offset={st.offset} stopColor={st.color} />
            ))}
          </linearGradient>
          {/* Glass, not a shadow: a single specular sweep across the top of the lens. */}
          <linearGradient id={gloss} x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0" stopColor="#FDFCF9" stopOpacity="0.34" />
            <stop offset="0.46" stopColor="#FDFCF9" stopOpacity="0.04" />
            <stop offset="1" stopColor="#06222D" stopOpacity="0.22" />
          </linearGradient>
        </defs>

        <g>{half}</g>
        <g transform={`translate(${VB_W},0) scale(-1,1)`}>{half}</g>
        <path d={BRIDGE} fill={frame} style={paint} />
        <path d={`M${MID},44 h1`} stroke="none" />
      </svg>
    </div>
  );
}
