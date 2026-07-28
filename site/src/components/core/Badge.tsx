const TONES = {
  sun: { background: 'var(--sun-400)', color: 'var(--sea-900)' },
  sea: { background: 'var(--sea-400)', color: 'var(--sea-900)' },
  sand: { background: 'var(--sand-300)', color: 'var(--sea-900)' },
  deep: { background: 'var(--sea-900)', color: 'var(--sand-050)' },
  outline: { background: 'transparent', color: 'var(--text-strong)', boxShadow: 'inset 0 0 0 1px var(--border-hairline)' },
} as const;

export type BadgeProps = { children: React.ReactNode; tone?: keyof typeof TONES };

/** Small status flag: NOVO, ESGOTADO, EDIÇÃO LIMITADA. */
export function Badge({ children, tone = 'sun' }: BadgeProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 24,
        padding: '0 10px',
        borderRadius: 'var(--r-sm)',
        fontFamily: 'var(--font-body)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: 'var(--tr-label)',
        textTransform: 'uppercase',
        ...TONES[tone],
      }}
    >
      {children}
    </span>
  );
}
