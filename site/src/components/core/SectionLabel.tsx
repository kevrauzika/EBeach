export type SectionLabelProps = {
  /** Zero-padded on render: 03 — Anatomia do produto. */
  index?: number;
  children: React.ReactNode;
  onDark?: boolean;
};

/** Numbered eyebrow that opens every narrative section. */
export function SectionLabel({ index, children, onDark = false }: SectionLabelProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--sp-3)',
        color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
        font: 'var(--type-label)',
        fontFamily: 'var(--font-body)',
        letterSpacing: 'var(--tr-label)',
        textTransform: 'uppercase',
      }}
    >
      {index != null && (
        <span style={{ color: onDark ? 'var(--sun-400)' : 'var(--sun-500)' }}>
          {String(index).padStart(2, '0')}
        </span>
      )}
      <span aria-hidden="true" style={{ width: 28, height: 1, background: 'currentColor', opacity: 0.5 }} />
      <span>{children}</span>
    </div>
  );
}
