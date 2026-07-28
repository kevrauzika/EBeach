import React from 'react';

const SIZES = {
  sm: { padding: '10px 18px', fontSize: '13px', minHeight: 38 },
  md: { padding: '14px 26px', fontSize: '14px', minHeight: 48 },
  lg: { padding: '18px 36px', fontSize: '15px', minHeight: 58 }
};

const VARIANTS = {
  solid:   { background: 'var(--accent-primary)', color: 'var(--sea-900)', border: '1px solid transparent' },
  sea:     { background: 'var(--accent-secondary)', color: 'var(--sea-900)', border: '1px solid transparent' },
  outline: { background: 'transparent', color: 'var(--text-strong)', border: '1px solid var(--border-strong)' },
  ghost:   { background: 'transparent', color: 'var(--text-strong)', border: '1px solid transparent' },
  onDark:  { background: 'var(--sand-050)', color: 'var(--sea-900)', border: '1px solid transparent' },
  outlineDark: { background: 'transparent', color: 'var(--sand-050)', border: '1px solid var(--border-hairline-dark)' }
};

const HOVER = {
  solid: 'var(--accent-primary-hover)',
  sea: 'var(--accent-secondary-hover)',
  outline: 'var(--sea-900)',
  ghost: 'rgba(10,10,10,0.06)',
  onDark: 'var(--sand-300)',
  outlineDark: 'rgba(253,252,249,0.10)'
};

/** Primary action. Liquid fill on hover, magnetic nudge on pointer move. */
export function Button({
  children, variant = 'solid', size = 'md', magnetic = false, fullWidth = false,
  disabled = false, as = 'button', href, onClick, icon, iconAfter, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const ref = React.useRef(null);
  const v = VARIANTS[variant] || VARIANTS.solid;
  const s = SIZES[size] || SIZES.md;

  const move = (e) => {
    if (!magnetic || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setOffset({ x: (e.clientX - (r.left + r.width / 2)) * 0.22, y: (e.clientY - (r.top + r.height / 2)) * 0.28 });
  };

  const Tag = as === 'a' ? 'a' : 'button';
  return (
    <Tag
      ref={ref} href={href} onClick={onClick} disabled={Tag === 'button' ? disabled : undefined}
      onMouseMove={move}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setOffset({ x: 0, y: 0 }); }}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: 'var(--sp-3)',
        font: 'var(--type-label)', fontSize: s.fontSize, fontWeight: 600,
        letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-body)',
        padding: s.padding, minHeight: s.minHeight, borderRadius: 'var(--r-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
        textDecoration: 'none', borderBottom: v.border,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'background var(--dur-fast) var(--ease-tide), color var(--dur-fast) var(--ease-tide), transform var(--dur-base) var(--ease-tide)',
        ...v,
        background: hover && !disabled ? HOVER[variant] : v.background,
        color: hover && !disabled && variant === 'outline' ? 'var(--sand-050)' : v.color
      }}
      {...rest}
    >
      {icon}{children}{iconAfter}
    </Tag>
  );
}
