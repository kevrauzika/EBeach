'use client';

import { Icon } from '../core/Icon';

export type SelectProps = {
  id: string;
  label?: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  onDark?: boolean;
};

/** Underline select, matching Input. */
export function Select({ id, label, value, onChange, options, onDark = false }: SelectProps) {
  const fg = onDark ? 'var(--sand-050)' : 'var(--text-strong)';
  return (
    <label htmlFor={id} style={{ display: 'block' }}>
      {label && (
        <span
          style={{
            display: 'block',
            font: 'var(--type-label)',
            fontFamily: 'var(--font-body)',
            letterSpacing: 'var(--tr-label)',
            textTransform: 'uppercase',
            color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
            marginBottom: 'var(--sp-3)',
          }}
        >
          {label}
        </span>
      )}
      <span style={{ position: 'relative', display: 'block' }}>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: '100%',
            appearance: 'none',
            background: 'transparent',
            border: 'none',
            borderBottom: `1px solid ${onDark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)'}`,
            padding: '10px 28px 12px 0',
            color: fg,
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--fs-body-l)',
            outline: 'none',
            cursor: 'pointer',
          }}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <span
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: fg,
          }}
        >
          <Icon name="chevron-down" size={16} />
        </span>
      </span>
    </label>
  );
}
