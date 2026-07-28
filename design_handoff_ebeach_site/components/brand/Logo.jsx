import React from 'react';

const SRC = {
  ink: { full: 'assets/logo-ink.png', mark: 'assets/mark-ink.png' },
  foam: { full: 'assets/logo-foam.png', mark: 'assets/mark-foam.png' }
};

/** The E-BEACH wordmark. Never recolour, distort or overlay a gradient. */
export function Logo({ tone = 'ink', variant = 'full', height = 28, base = '', alt = 'E-BEACH' }) {
  const src = (base ? base.replace(/\/$/, '') + '/' : '') + SRC[tone][variant];
  return <img src={src} alt={alt} style={{ height, width: 'auto', display: 'block', userSelect: 'none' }} draggable="false" />;
}
