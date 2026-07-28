export type SpecRowProps = { term: string; value: string; onDark?: boolean };

/** One line of the product anatomy / spec table. Middot-free, hairline-separated. */
export function SpecRow({ term, value, onDark = false }: SpecRowProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 'var(--sp-5)',
        padding: '14px 0',
        borderBottom: `1px solid ${onDark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)'}`,
      }}
    >
      <span
        style={{
          font: 'var(--type-label)',
          fontFamily: 'var(--font-body)',
          letterSpacing: 'var(--tr-label)',
          textTransform: 'uppercase',
          color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
        }}
      >
        {term}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--fs-body-s)',
          textAlign: 'right',
          color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
        }}
      >
        {value}
      </span>
    </div>
  );
}
