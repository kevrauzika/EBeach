'use client';

export type SwatchOption = { value: string; label: string; swatch: string };

export type SwatchPickerProps = {
  label: string;
  options: SwatchOption[];
  value: string;
  onChange: (v: string) => void;
  onDark?: boolean;
  size?: number;
};

/** Colour chooser for frame and lens. `swatch` may be a hex or a CSS gradient. */
export function SwatchPicker({ label, options, value, onChange, onDark = false, size = 40 }: SwatchPickerProps) {
  const active = options.find((o) => o.value === value);
  return (
    <div role="group" aria-label={label}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 'var(--sp-4)' }}>
        <span
          style={{
            font: 'var(--type-label)',
            fontFamily: 'var(--font-body)',
            letterSpacing: 'var(--tr-label)',
            textTransform: 'uppercase',
            color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
          }}
        >
          {label}
        </span>
        {active && (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--fs-caption)',
              color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
            }}
          >
            {active.label}
          </span>
        )}
      </div>
      <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
        {options.map((o) => {
          const on = o.value === value;
          return (
            <button
              key={o.value}
              type="button"
              title={o.label}
              aria-label={o.label}
              aria-pressed={on}
              onClick={() => onChange(o.value)}
              style={{
                width: size,
                height: size,
                borderRadius: 'var(--r-pill)',
                cursor: 'pointer',
                padding: 3,
                background: 'transparent',
                border: `1px solid ${on ? (onDark ? 'var(--sand-050)' : 'var(--sea-900)') : 'transparent'}`,
                transition: 'border-color var(--dur-fast) var(--ease-tide)',
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  borderRadius: 'var(--r-pill)',
                  background: o.swatch,
                  boxShadow: 'inset 0 0 0 1px rgba(10,10,10,0.10)',
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
