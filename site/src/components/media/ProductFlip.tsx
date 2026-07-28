/* Scroll-driven flip between the two real product photographs.
   The front photo turns away on the Y axis while the three-quarter shot turns in;
   the crossfade lands at the angle where both silhouettes overlap, so it reads as
   one object rather than two images. Also the fallback when video cannot decode. */

import { clamp01, smooth } from '@/lib/scroll';

const SIDE_ANGLE = 52; // inherent yaw of the three-quarter photograph

export type ProductFlipProps = {
  /** 0..1 scroll progress. */
  t?: number;
  width?: number | string;
  shadow?: boolean;
};

export function ProductFlip({ t = 0, width = 640, shadow = true }: ProductFlipProps) {
  const yaw = t * SIDE_ANGLE;
  const mix = smooth(clamp01((t - 0.28) / 0.3));

  const layer: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
    willChange: 'transform, opacity',
  };
  const img: React.CSSProperties = { width: '100%', height: 'auto', display: 'block', userSelect: 'none' };

  return (
    <div style={{ width, aspectRatio: '1048 / 459', position: 'relative', perspective: 1800 }}>
      <div style={{ ...layer, transform: `rotateY(${-yaw}deg)`, opacity: 1 - mix }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- 3D-transformed layer, fixed intrinsic size */}
        <img src="/assets/product/ebeach-front-clean.png" alt="Óculos E-BEACH, vista frontal" style={img} draggable={false} />
      </div>
      <div style={{ ...layer, transform: `rotateY(${SIDE_ANGLE - yaw}deg)`, opacity: mix }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- 3D-transformed layer, fixed intrinsic size */}
        <img src="/assets/product/ebeach-side-clean.png" alt="" style={img} draggable={false} />
      </div>
      {shadow && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '14%',
            right: '14%',
            bottom: '-4%',
            height: '9%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(6,34,45,0.28), rgba(6,34,45,0) 70%)',
            filter: 'blur(6px)',
            transform: `scaleX(${1 - 0.18 * t})`,
            opacity: 0.7,
          }}
        />
      )}
    </div>
  );
}
