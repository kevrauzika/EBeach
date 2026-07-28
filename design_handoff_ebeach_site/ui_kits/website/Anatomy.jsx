const { SectionLabel, SpecRow } = window.EBEACHDesignSystem_3fff58;

const PARTS = [
  { at: 0.05, side: 'left',  top: '28%', title: 'Lente polarizada UV400', body: 'Espelhada, com filtro de 100% dos raios UVA/UVB e corte de reflexo na água.' },
  { at: 0.30, side: 'right', top: '44%', title: 'Haste em acetato', body: 'Acetato italiano prensado, degradê preto → cristal, polido à mão.' },
  { at: 0.55, side: 'left',  top: '62%', title: 'Dobradiça flex', body: 'Cinco barras em aço inox 316L, testada em 20 mil ciclos.' },
  { at: 0.78, side: 'right', top: '22%', title: 'Ponte 18 mm', body: 'Apoio nasal ajustado ao rosto brasileiro.' }
];

function Anatomy() {
  const ref = React.useRef(null);
  const p = window.usePinProgress(ref);
  const reduced = window.useReducedMotion();
  return (
    <section ref={ref} data-screen-label="Anatomia" style={{ height: '400vh', background: 'var(--sand-200)', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', padding: '0 var(--gutter)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: 'calc(var(--header-h) + var(--sp-6))', left: 'var(--gutter)' }}>
          <SectionLabel index={3}>Anatomia do produto</SectionLabel>
        </div>
        <ScrollVideo t={reduced ? 0.5 : window.range(p, 0.15, 0.95)} src="../../assets/video/turntable.mp4" width={620} aspect="4 / 3" zoom={1.34}
          fallback={<ProductFlip t={reduced ? 1 : window.range(p, 0.18, 0.92)} width={560} base="../.." />} />
        {PARTS.map((part, i) => {
          const on = reduced || p > part.at;
          const isLeft = part.side === 'left';
          return (
            <div key={i} style={{
              position: 'absolute', top: part.top,
              [isLeft ? 'left' : 'right']: 'var(--gutter)',
              maxWidth: 260, textAlign: isLeft ? 'right' : 'left',
              opacity: on ? 1 : 0,
              transform: on ? 'translateX(0)' : `translateX(${isLeft ? -20 : 20}px)`,
              transition: 'opacity var(--dur-base) var(--ease-tide), transform var(--dur-base) var(--ease-tide)'
            }}>
              <div style={{ height: 1, background: 'var(--sea-700)', width: on ? 140 : 0, marginLeft: isLeft ? 'auto' : 0, marginBottom: 12, transition: 'width var(--dur-slow) var(--ease-drift)' }} />
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, letterSpacing: 'var(--tr-title)', color: 'var(--text-strong)' }}>{part.title}</div>
              <p style={{ margin: '6px 0 0', fontSize: 'var(--fs-caption)', lineHeight: 1.55, color: 'var(--text-muted)' }}>{part.body}</p>
            </div>
          );
        })}
        <div style={{ position: 'absolute', right: 'var(--gutter)', bottom: 'var(--sp-7)', width: 260 }}>
          <SpecRow term="Peso" value="24 g" />
          <SpecRow term="Garantia" value="2 anos" />
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Anatomy });
