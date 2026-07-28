import React from 'react';

/** Hero scroll indicator: a thin line whose fill drifts downward on a loop. */
export function ScrollCue({ label = 'Role', onDark = false }) {
  const c = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  const id = React.useId ? React.useId().replace(/:/g, '') : 'sc';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--sp-3)', color: c }}>
      <span style={{ font: 'var(--type-label)', fontFamily: 'var(--font-body)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase' }}>{label}</span>
      <span style={{ position: 'relative', width: 1, height: 56, background: 'currentColor', opacity: 0.3, overflow: 'hidden' }}>
        <span style={{ position: 'absolute', left: 0, width: 1, height: 22, background: onDark ? 'var(--sun-400)' : 'var(--sun-500)', animation: `eb-drift-${id} 1.9s var(--ease-swell) infinite` }} />
      </span>
      <style>{`@keyframes eb-drift-${id}{0%{transform:translateY(-24px)}100%{transform:translateY(56px)}}
      @media (prefers-reduced-motion: reduce){[style*="eb-drift-${id}"]{animation:none!important}}`}</style>
    </div>
  );
}
