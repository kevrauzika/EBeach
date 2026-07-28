'use client';

import { useRef, useState } from 'react';

const SIZES = {
  sm: { padding: '10px 18px', fontSize: '13px', minHeight: 38 },
  md: { padding: '14px 26px', fontSize: '14px', minHeight: 48 },
  lg: { padding: '18px 36px', fontSize: '15px', minHeight: 58 },
} as const;

const VARIANTS = {
  solid: { background: 'var(--accent-primary)', color: 'var(--sea-900)', border: '1px solid transparent' },
  sea: { background: 'var(--accent-secondary)', color: 'var(--sea-900)', border: '1px solid transparent' },
  outline: { background: 'transparent', color: 'var(--text-strong)', border: '1px solid var(--border-strong)' },
  ghost: { background: 'transparent', color: 'var(--text-strong)', border: '1px solid transparent' },
  onDark: { background: 'var(--sand-050)', color: 'var(--sea-900)', border: '1px solid transparent' },
  outlineDark: { background: 'transparent', color: 'var(--sand-050)', border: '1px solid var(--border-hairline-dark)' },
} as const;

/* The colour the liquid layer wipes up from the bottom on hover. */
const FILL = {
  solid: 'var(--accent-primary-hover)',
  sea: 'var(--accent-secondary-hover)',
  outline: 'var(--sea-900)',
  ghost: 'rgba(10,10,10,0.06)',
  onDark: 'var(--sand-300)',
  outlineDark: 'rgba(253,252,249,0.10)',
} as const;

/* Text colour once the fill has covered the button. */
const FILL_FG: Partial<Record<Variant, string>> = {
  outline: 'var(--sand-050)',
};

export type Variant = keyof typeof VARIANTS;
export type Size = keyof typeof SIZES;

export type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  /** Pulls toward the cursor, capped at 8px. Reserved for the primary CTA. */
  magnetic?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconAfter?: React.ReactNode;
  type?: 'button' | 'submit';
  'aria-label'?: string;
};

const MAGNET_MAX = 8;

export function Button({
  children,
  variant = 'solid',
  size = 'md',
  magnetic = false,
  fullWidth = false,
  disabled = false,
  href,
  onClick,
  icon,
  iconAfter,
  type = 'button',
  ...rest
}: ButtonProps) {
  const [hover, setHover] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLElement>(null);
  const v = VARIANTS[variant];
  const s = SIZES[size];

  const move = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.22;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.28;
    const cap = (n: number) => Math.max(-MAGNET_MAX, Math.min(MAGNET_MAX, n));
    setOffset({ x: cap(dx), y: cap(dy) });
  };

  const style: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    isolation: 'isolate',
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--sp-3)',
    font: 'var(--type-label)',
    fontFamily: 'var(--font-body)',
    fontSize: s.fontSize,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: s.padding,
    minHeight: s.minHeight,
    borderRadius: 'var(--r-pill)',
    background: v.background,
    color: (hover && !disabled && FILL_FG[variant]) || v.color,
    border: v.border,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    textDecoration: 'none',
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition:
      'color var(--dur-fast) var(--ease-tide), border-color var(--dur-fast) var(--ease-tide), transform var(--dur-base) var(--ease-tide)',
  };

  const handlers = {
    onMouseMove: move,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setOffset({ x: 0, y: 0 });
    },
  };

  const inner = (
    <>
      {/* Liquid fill: wipes up from the bottom, never a fade. */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          background: FILL[variant],
          transformOrigin: 'bottom',
          transform: `scaleY(${hover && !disabled ? 1 : 0})`,
          transition: 'transform var(--dur-base) var(--ease-tide)',
        }}
      />
      {icon}
      {children}
      {iconAfter}
    </>
  );

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        style={{ ...style, borderBottom: v.border }}
        {...handlers}
        {...rest}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      {...handlers}
      {...rest}
    >
      {inner}
    </button>
  );
}
