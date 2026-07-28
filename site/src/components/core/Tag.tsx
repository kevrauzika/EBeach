'use client';

export type TagProps = {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  onDark?: boolean;
};

/** Filter / attribute chip. Toggles between hairline and filled. */
export function Tag({ children, active = false, onClick, onDark = false }: TagProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      style={{
        font: 'var(--type-label)',
        fontFamily: 'var(--font-body)',
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        padding: '9px 16px',
        minHeight: 34,
        borderRadius: 'var(--r-pill)',
        cursor: 'pointer',
        border: `1px solid ${active ? 'transparent' : onDark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)'}`,
        background: active ? (onDark ? 'var(--sand-050)' : 'var(--sea-900)') : 'transparent',
        color: active
          ? onDark
            ? 'var(--sea-900)'
            : 'var(--sand-050)'
          : onDark
            ? 'var(--sand-050)'
            : 'var(--text-body)',
        transition: 'background var(--dur-fast) var(--ease-tide), color var(--dur-fast) var(--ease-tide), border-color var(--dur-fast) var(--ease-tide)',
      }}
    >
      {children}
    </button>
  );
}
