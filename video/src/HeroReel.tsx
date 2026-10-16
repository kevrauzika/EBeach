import { useEffect, useState } from 'react';
import { AbsoluteFill, cancelRender, continueRender, delayRender, staticFile, useCurrentFrame } from 'remotion';
import { captioned } from './layout';
import { Backdrop } from './scene/Backdrop';
import { Captions } from './scene/Captions';
import { Glasses, SPACING } from './scene/Glasses';
import { Light } from './scene/Light';
import { ReelProvider, carousel, mod, useReel, type Reel } from './timing';

/* Camera-style motion blur, wrap-aware: the stock <CameraMotionBlur> thins out its
   samples near frame 0, which would make the first frames of every loop sharper
   than the rest. Sampling (f - offset) mod total keeps every frame equal.

   Samples scale with how far the product actually travels during the shutter, so
   held frames render once and only the hand-offs pay for the full 8 — about a
   third of the cost of blurring every frame, with identical-looking output. */
const MAX_SAMPLES = 8;
const SHUTTER = 0.5; // 180°
const PX_PER_SAMPLE = 3;

function samplesAt(r: Reel, frame: number) {
  const d = mod(carousel(r, frame) - carousel(r, frame - SHUTTER) + r.n / 2, r.n) - r.n / 2;
  const travel = Math.abs(d) * SPACING;
  return Math.min(MAX_SAMPLES, Math.max(1, Math.ceil(travel / PX_PER_SAMPLE)));
}

export const ReelVideo = ({ reel }: { reel: Reel }) => (
  <ReelProvider value={reel}>
    <Blurred />
  </ReelProvider>
);

const Blurred = () => {
  const r = useReel();
  const frame = useCurrentFrame();
  useAssetsReady(r);
  const n = samplesAt(r, frame);

  if (n === 1) return <Scene f={frame} />;
  return (
    <AbsoluteFill style={{ isolation: 'isolate' }}>
      {Array.from({ length: n }, (_, i) => (
        <AbsoluteFill key={i} style={{ mixBlendMode: 'plus-lighter', filter: `opacity(${1 / n})` }}>
          <Scene f={mod(frame - SHUTTER * (i / n), r.total)} />
        </AbsoluteFill>
      ))}
    </AbsoluteFill>
  );
};

const Scene = ({ f }: { f: number }) => {
  const r = useReel();
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      <Backdrop f={f} />
      <Glasses f={f} />
      <Light f={f} />
      {captioned(r) && <Captions f={f} />}
    </AbsoluteFill>
  );
};

const FONTS = [
  { family: 'Clash Display', weight: '700', file: 'fonts/clash-display-700.woff2' },
  { family: 'General Sans', weight: '500', file: 'fonts/general-sans-500.woff2' },
];

/* The sheen masks with the product PNGs, which Remotion does not wait for on its
   own, and captions need the brand faces — decode both before the first frame. */
function useAssetsReady(r: Reel) {
  const [handle] = useState(() => delayRender('decode product images and fonts'));
  useEffect(() => {
    const images = [...r.pairs.map((g) => g.src), 'logo-ink.png'].map((s) => {
      const img = new Image();
      img.src = staticFile(s);
      return img.decode();
    });
    const fonts = captioned(r)
      ? FONTS.map(async (f) => {
          const face = new FontFace(f.family, `url(${staticFile(f.file)}) format('woff2')`, { weight: f.weight });
          document.fonts.add(await face.load());
        })
      : [];
    Promise.all([...images, ...fonts])
      .then(() => continueRender(handle))
      .catch((e) => cancelRender(e));
  }, [handle, r]);
}
