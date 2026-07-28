import s from './brand.module.css';

export type ScrollCueProps = { label?: string; onDark?: boolean };

/** Hero scroll indicator: a thin line whose fill drifts downward on a loop. */
export function ScrollCue({ label = 'Role', onDark = false }: ScrollCueProps) {
  return (
    <div className={s.cue} style={{ color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)' }}>
      <span
        style={{
          font: 'var(--type-label)',
          fontFamily: 'var(--font-body)',
          letterSpacing: 'var(--tr-label)',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </span>
      <span className={s.cueTrack} aria-hidden="true">
        <span className={s.cueFill} style={{ background: onDark ? 'var(--sun-400)' : 'var(--sun-500)' }} />
      </span>
    </div>
  );
}
