import React from 'react';

/** Filter / attribute chip. Toggles between hairline and filled. */
export function Tag({ children, active = false, onClick, onDark = false }) {
  return (
    <button onClick={onClick} type="button" style={{
      font: 'var(--type-label)', fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500,
      letterSpacing: '0.12em', textTransform: 'uppercase', padding: '9px 16px', minHeight: 34,
      borderRadius: 'var(--r-pill)', cursor: 'pointer',
      border: '1px solid ' + (active ? 'transparent' : (onDark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)')),
      background: active ? (onDark ? 'var(--sand-050)' : 'var(--sea-900)') : 'transparent',
      color: active ? (onDark ? 'var(--sea-900)' : 'var(--sand-050)') : (onDark ? 'var(--sand-050)' : 'var(--text-body)'),
      transition: 'all var(--dur-fast) var(--ease-tide)'
    }}>{children}</button>
  );
}
