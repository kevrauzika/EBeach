import React from 'react';

/** Fixed sand-grain film over the whole viewport. Mount once, at the app root. */
export function GrainOverlay({ opacity = 0.045, blend = 'multiply' }) {
  return <div aria-hidden="true" style={{
    position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999,
    opacity, mixBlendMode: blend, backgroundImage: 'var(--grain-url)'
  }} />;
}
