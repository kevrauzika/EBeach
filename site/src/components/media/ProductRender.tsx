'use client';

import { ScrollVideo } from './ScrollVideo';
import { ProductFlip } from './ProductFlip';

/* Which render drives the hero and the anatomy pin.
 *
 * The supplied turntable.mp4 is a 1280×720 landscape file whose usable content
 * is a 405px-wide white plate pillarboxed in black (x 437→841). With
 * `mix-blend-mode: multiply` those bars stamp solid black rectangles onto the
 * page, so the crop below is the only window that shows plate and nothing else —
 * and cropping that hard leaves ~400 source pixels to fill a 1700px hero, which
 * is visibly soft.
 *
 * Until the regenerated clip lands (square, white seamless, locked camera —
 * see the handoff's Known gaps #1), the scroll-driven flip between the two real
 * cut-out photographs is sharper and reads as the same object turning.
 * Flip `TURNTABLE.enabled` when the new file is in place; the crop values are
 * already correct for a square source at zoom 1.
 */
export const TURNTABLE = {
  enabled: false,
  src: '/assets/video/turntable.mp4',
  aspect: '16 / 10',
  zoom: 3.0,
};

export type ProductRenderProps = {
  /** 0..1 scroll progress. */
  t: number;
  width?: number | string;
};

export function ProductRender({ t, width = '100%' }: ProductRenderProps) {
  if (!TURNTABLE.enabled) return <ProductFlip t={t} width={width} />;

  return (
    <ScrollVideo
      t={t}
      src={TURNTABLE.src}
      width={width}
      aspect={TURNTABLE.aspect}
      zoom={TURNTABLE.zoom}
      fallback={<ProductFlip t={t} width={width} />}
    />
  );
}
