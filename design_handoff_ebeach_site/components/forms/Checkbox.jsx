import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Square 18px checkbox, sun fill when checked. */
export function Checkbox({ label, checked = false, onChange, onDark = false, id }) {
  return (
    <label htmlFor={id} style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 'var(--sp-3)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-s)', lineHeight: 1.5, color: onDark ? 'var(--text-on-dark)' : 'var(--text-body)' }}>
      <input id={id} type="checkbox" checked={checked} onChange={(e) => onChange && onChange(e.target.checked)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        flex: '0 0 auto', width: 18, height: 18, marginTop: 2, borderRadius: 'var(--r-sm)',
        border: '1px solid ' + (checked ? 'transparent' : (onDark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)')),
        background: checked ? 'var(--accent-primary)' : 'transparent',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--sea-900)', transition: 'all var(--dur-fast) var(--ease-tide)'
      }}>{checked && <Icon name="check" size={12} strokeWidth={2.5} />}</span>
      <span>{label}</span>
    </label>
  );
}
