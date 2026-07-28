const { SectionLabel, SwatchPicker, Button, Switch, Badge, Icon } = window.EBEACHDesignSystem_3fff58;

const FRAMES = [
  { value: 'abissal', label: 'Abissal', swatch: '#06222D', hex: '#06222D' },
  { value: 'areia', label: 'Areia quente', swatch: '#E4C9A0', hex: '#E4C9A0' },
  { value: 'mar', label: 'Mar profundo', swatch: '#0E5C73', hex: '#0E5C73' },
  { value: 'tinta', label: 'Tinta', swatch: '#0A0A0A', hex: '#0A0A0A' }
];
const LENSES = [
  { value: 'ambar', label: 'Âmbar', swatch: '#F5A623', css: 'linear-gradient(160deg,#FFC46B,#E0701F)', add: 0 },
  { value: 'verde', label: 'Verde-mar', swatch: '#2AA7A0', css: 'linear-gradient(160deg,#7FD3CE,#0E5C73)', add: 0 },
  { value: 'espelhada', label: 'Espelhada', swatch: 'linear-gradient(135deg,#7FD3CE,#F5A623)', css: 'linear-gradient(135deg,#BFE9EE,#F5A623 55%,#2AA7A0)', add: 60 },
  { value: 'fume', label: 'Degradê fumê', swatch: 'linear-gradient(180deg,#5E635F,#E4C9A0)', css: 'linear-gradient(180deg,#2C2E2E,#CFAE7F)', add: 40 }
];
const BASE = 389;

function Configurator({ onAdd }) {
  const [frame, setFrame] = React.useState('abissal');
  const [lens, setLens] = React.useState('verde');
  const [pol, setPol] = React.useState(true);
  const f = FRAMES.find((x) => x.value === frame);
  const l = LENSES.find((x) => x.value === lens);
  const price = BASE + l.add + (pol ? 50 : 0);

  return (
    <section data-screen-label="Configurador" style={{ background: 'var(--sand-100)', padding: 'var(--section-y) var(--gutter)' }}>
      <SectionLabel index={5}>Configurador</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.25fr) minmax(300px,0.75fr)', gap: 'var(--sp-9)', alignItems: 'center', marginTop: 'var(--sp-7)' }}>
        <div style={{ background: 'var(--sand-200)', borderRadius: 'var(--r-xl)', aspectRatio: '4 / 3', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 'var(--sp-5)', left: 'var(--sp-5)' }}><Badge tone="sun">Monte o seu</Badge></div>
          <div style={{ transition: 'filter var(--dur-base) var(--ease-tide)' }}>
            <GlassesFigure width={420} frame={f.hex} lens={l.css} />
          </div>
        </div>
        <div>
          <h2 style={{ font: 'var(--type-display-s)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: 'var(--tr-display)', textTransform: 'uppercase', margin: 0 }}>Maré 01</h2>
          <p style={{ margin: '10px 0 var(--sp-6)', color: 'var(--text-muted)', maxWidth: '38ch' }}>Escolha armação e lente. Cada peça é montada sob encomenda em 5 dias úteis.</p>
          <div style={{ display: 'grid', gap: 'var(--sp-6)' }}>
            <SwatchPicker label="Armação" value={frame} onChange={setFrame} options={FRAMES} />
            <SwatchPicker label="Lente" value={lens} onChange={setLens} options={LENSES} />
            <Switch checked={pol} onChange={setPol} label="Polarização + R$ 50" />
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', margin: 'var(--sp-7) 0 var(--sp-5)', borderTop: '1px solid var(--border-hairline)', paddingTop: 'var(--sp-5)' }}>
            <span style={{ font: 'var(--type-label)', fontFamily: 'var(--font-body)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Total</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, letterSpacing: '-0.03em', color: 'var(--text-strong)' }}>{window.BRL(price)}</span>
          </div>
          <Button variant="solid" size="lg" fullWidth magnetic
            iconAfter={<Icon name="shopping-bag" size={16} />}
            onClick={() => onAdd({ name: 'Maré 01', frame: f.hex, lens: l.css, frameLabel: f.label, lensLabel: l.label, price })}>
            Adicionar à sacola
          </Button>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Configurator });
