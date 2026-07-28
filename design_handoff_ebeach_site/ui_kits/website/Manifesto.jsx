const { SectionLabel } = window.EBEACHDesignSystem_3fff58;
const MANIFESTO = 'O sal marca. A luz insiste. O horizonte não pede licença. Fizemos um óculos para quem encara os três de frente, todo dia, sem apertar os olhos.'.split(' ');

function Manifesto() {
  const ref = React.useRef(null);
  const p = window.useScrollProgress(ref);
  const reduced = window.useReducedMotion();
  return (
    <section ref={ref} data-screen-label="Manifesto" style={{ background: 'var(--sand-100)', padding: 'var(--section-y) var(--gutter)' }}>
      <SectionLabel index={2}>Manifesto</SectionLabel>
      <p style={{
        maxWidth: '18ch', margin: 'var(--sp-7) 0 0',
        font: 'var(--type-display-m)', fontFamily: 'var(--font-display)', fontWeight: 600,
        letterSpacing: 'var(--tr-display)', lineHeight: 1.08, color: 'var(--text-strong)'
      }}>
        {MANIFESTO.map((w, i) => {
          const start = 0.18 + (i / MANIFESTO.length) * 0.5;
          const on = reduced || p > start;
          return <span key={i} style={{
            display: 'inline-block', marginRight: '0.28em',
            opacity: on ? 1 : 0.14,
            transform: on ? 'translateY(0)' : 'translateY(0.18em)',
            transition: 'opacity var(--dur-slow) var(--ease-drift), transform var(--dur-slow) var(--ease-drift)'
          }}>{w}</span>;
        })}
      </p>
    </section>
  );
}
Object.assign(window, { Manifesto });
