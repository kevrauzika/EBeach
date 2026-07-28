const { Marquee, SectionLabel } = window.EBEACHDesignSystem_3fff58;
const QUOTES = [
  ['"Aguenta um dia inteiro de sol sem escorregar."', 'Camila R. — Ubatuba'],
  ['"A lente verde-mar mudou o jeito que eu vejo a água."', 'Téo M. — Itacaré'],
  ['"Levei pro mar aberto por seis meses. Zero risco."', 'Ana P. — Búzios'],
  ['"Leve a ponto de esquecer que está usando."', 'Rafa L. — Florianópolis']
];

function Proof() {
  return (
    <section data-screen-label="Prova social" style={{ background: 'var(--sand-100)', padding: 'var(--section-y) 0' }}>
      <div style={{ padding: '0 var(--gutter) var(--sp-6)' }}><SectionLabel index={7}>Quem usa</SectionLabel></div>
      <Marquee speed={52} items={QUOTES.map(([q, a], i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'baseline', gap: 14 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(1.1rem,2.2vw,1.7rem)', letterSpacing: 'var(--tr-title)', color: 'var(--text-strong)' }}>{q}</span>
          <span style={{ font: 'var(--type-label)', fontFamily: 'var(--font-body)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{a}</span>
        </span>
      ))} />
    </section>
  );
}
Object.assign(window, { Proof });
