import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Underline select, matching Input. */
export function Select({ label, value, onChange, options = [], onDark = false, id }) {
  return (
    <label htmlFor={id} style={{ display: 'block' }}>
      {label && <span style={{ display: 'block', font: 'var(--type-label)', fontFamily: 'var(--font-body)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)', marginBottom: 'var(--sp-3)' }}>{label}</span>}
      <span style={{ position: 'relative', display: 'block' }}>
        <select id={id} value={value} onChange={(e) => onChange && onChange(e.target.value)} style={{
          width: '100%', appearance: 'none', background: 'transparent', border: 'none',
          borderBottom: '1px solid ' + (onDark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)'),
          padding: '10px 28px 12px 0', color: onDark ? 'var(--sand-050)' : 'var(--text-strong)',
          fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-l)', outline: 'none', cursor: 'pointer'
        }}>
          {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: onDark ? 'var(--sand-050)' : 'var(--text-strong)' }}>
          <Icon name="chevron-down" size={16} />
        </span>
      </span>
    </label>
  );
}
