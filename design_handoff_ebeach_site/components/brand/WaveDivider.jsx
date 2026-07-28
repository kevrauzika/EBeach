import React from 'react';

/** Animated wave seam between a light section and the abyssal footer. */
export function WaveDivider({ fill = 'var(--sea-900)', height = 90, speed = 14, flip = false }) {
  const id = React.useId ? React.useId().replace(/:/g, '') : 'wv';
  const d = 'M0,40 C160,90 320,0 480,40 C640,80 800,10 960,40 C1120,70 1280,20 1440,40 L1440,120 L0,120 Z';
  return (
    <div aria-hidden="true" style={{ lineHeight: 0, transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height }}>
        <g style={{ animation: `eb-wave-${id} ${speed}s linear infinite` }}>
          <path d={d} fill={fill} />
          <path d={d} fill={fill} transform="translate(1440,0)" />
        </g>
        <style>{`@keyframes eb-wave-${id}{from{transform:translateX(0)}to{transform:translateX(-1440px)}}`}</style>
      </svg>
    </div>
  );
}
