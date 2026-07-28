'use client';

export type SwitchProps = {
  id: string;
  checked?: boolean;
  onChange?: (v: boolean) => void;
  label?: string;
  onDark?: boolean;
};

/** Pill toggle — polarização, and any other single on/off option. */
export function Switch({ id, checked = false, onChange, label, onDark = false }: SwitchProps) {
  return (
    <label
      htmlFor={id}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--sp-4)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--fs-body-s)',
        color: onDark ? 'var(--text-on-dark)' : 'var(--text-body)',
      }}
    >
      <input
        id={id}
        type="checkbox"
        role="switch"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <span
        aria-hidden="true"
        style={{
          width: 46,
          height: 26,
          borderRadius: 'var(--r-pill)',
          padding: 3,
          flex: '0 0 auto',
          background: checked ? 'var(--sea-400)' : onDark ? 'rgba(253,252,249,0.18)' : 'rgba(10,10,10,0.14)',
          transition: 'background var(--dur-fast) var(--ease-tide)',
        }}
      >
        <span
          style={{
            display: 'block',
            width: 20,
            height: 20,
            borderRadius: 'var(--r-pill)',
            background: 'var(--sand-050)',
            transform: checked ? 'translateX(20px)' : 'translateX(0)',
            transition: 'transform var(--dur-base) var(--ease-tide)',
          }}
        />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
