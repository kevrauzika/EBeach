import React from 'react';

/** Underline-only text field — no boxes anywhere in E-BEACH forms. */
export function Input({ label, placeholder, value, onChange, type = 'text', onDark = false, hint, error, id }) {
  const [focus, setFocus] = React.useState(false);
  const fg = onDark ? 'var(--sand-050)' : 'var(--text-strong)';
  const line = error ? 'var(--sun-600)' : focus ? 'var(--sea-400)' : (onDark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)');
  return (
    <label htmlFor={id} style={{ display: 'block' }}>
      {label && <span style={{ display: 'block', font: 'var(--type-label)', fontFamily: 'var(--font-body)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)', marginBottom: 'var(--sp-3)' }}>{label}</span>}
      <input
        id={id} type={type} value={value} placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid ' + line,
          padding: '10px 0 12px', color: fg, fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-l)',
          outline: 'none', transition: 'border-color var(--dur-fast) var(--ease-tide)'
        }}
      />
      {(hint || error) && <span style={{ display: 'block', marginTop: 'var(--sp-2)', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', color: error ? 'var(--sun-600)' : (onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)') }}>{error || hint}</span>}
    </label>
  );
}
