const { SectionLabel } = window.EBEACHDesignSystem_3fff58;
const P = '../../assets/placeholders/';
const SHOTS = [
  { src: P + 'sand.png', speed: 0.10, col: '1 / 5', ratio: '3 / 4', label: 'Ubatuba, 07h' },
  { src: P + 'sea-shallow.png', speed: 0.26, col: '5 / 9', ratio: '1 / 1', label: 'Itacaré' },
  { src: P + 'sunset.png', speed: 0.04, col: '9 / 13', ratio: '4 / 5', label: 'Jericoacoara' },
  { src: P + 'reef.png', speed: 0.20, col: '2 / 7', ratio: '16 / 10', label: 'Fernando de Noronha' },
  { src: P + 'dune.png', speed: 0.34, col: '8 / 12', ratio: '3 / 4', label: 'Genipabu' }
];

function Gallery() {
  const ref = React.useRef(null);
  const p = window.useScrollProgress(ref);
  const reduced = window.useReducedMotion();
  const [cursor, setCursor] = React.useState(null);

  return (
    <section ref={ref} data-screen-label="Galeria"
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      onMouseLeave={() => setCursor(null)}
      style={{ background: 'var(--sand-050)', padding: 'var(--section-y) var(--gutter)', position: 'relative', cursor: cursor ? 'none' : 'auto' }}>
      <SectionLabel index={6}>Na luz real</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--sp-5)', marginTop: 'var(--sp-7)', rowGap: 'var(--sp-8)' }}>
        {SHOTS.map((s, i) => (
          <figure key={i} style={{ gridColumn: s.col, margin: 0, transform: reduced ? 'none' : `translateY(${(0.5 - p) * s.speed * 420}px)` }}>
            <div style={{ overflow: 'hidden', borderRadius: 'var(--r-lg)', aspectRatio: s.ratio }}>
              <img src={s.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <figcaption style={{ marginTop: 'var(--sp-3)', font: 'var(--type-label)', fontFamily: 'var(--font-body)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{s.label}</figcaption>
          </figure>
        ))}
      </div>
      {cursor && (
        <div style={{
          position: 'fixed', left: cursor.x, top: cursor.y, zIndex: 80, pointerEvents: 'none',
          transform: 'translate(-50%, -50%)', width: 84, height: 84, borderRadius: 999,
          background: 'var(--sun-500)', color: 'var(--sea-900)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', font: 'var(--type-label)', fontFamily: 'var(--font-body)',
          letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', fontSize: 10
        }}>Arraste</div>
      )}
    </section>
  );
}
Object.assign(window, { Gallery });
