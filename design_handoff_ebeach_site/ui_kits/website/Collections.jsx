const { SectionLabel, CollectionCard } = window.EBEACHDesignSystem_3fff58;
const P = '../../assets/placeholders/';
const COLS = [
  { title: 'Maré', blurb: 'Acetato translúcido e lente verde-mar. Para quem entra na água antes do café.', image: P + 'sea-shallow.png' },
  { title: 'Duna', blurb: 'Armação areia quente, lente âmbar. Luz seca, vento de terra.', image: P + 'dune.png' },
  { title: 'Sol poente', blurb: 'Degradê fumê sobre acetato âmbar. A última hora de luz.', image: P + 'sunset.png' },
  { title: 'Recife', blurb: 'Abissal com lente espelhada. Feita para o reflexo mais duro.', image: P + 'reef.png' }
];

function Collections() {
  const ref = React.useRef(null);
  const p = window.usePinProgress(ref);
  const [mobile, setMobile] = React.useState(false);
  React.useEffect(() => {
    const m = window.matchMedia('(max-width: 860px)');
    const h = () => setMobile(m.matches); h();
    m.addEventListener('change', h); return () => m.removeEventListener('change', h);
  }, []);

  if (mobile) {
    return (
      <section data-screen-label="Coleções" style={{ background: 'var(--sea-700)', padding: 'var(--section-y) 0' }}>
        <div style={{ padding: '0 var(--gutter) var(--sp-6)' }}><SectionLabel index={4} onDark>Coleções</SectionLabel></div>
        <div style={{ display: 'flex', gap: 'var(--sp-4)', overflowX: 'auto', scrollSnapType: 'x mandatory', padding: '0 var(--gutter)' }}>
          {COLS.map((c, i) => <div key={c.title} style={{ flex: '0 0 76%', scrollSnapAlign: 'center' }}><CollectionCard index={i + 1} {...c} /></div>)}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} data-screen-label="Coleções" style={{ height: '360vh', background: 'var(--sea-700)', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ padding: '0 var(--gutter) var(--sp-6)' }}><SectionLabel index={4} onDark>Coleções</SectionLabel></div>
        <div style={{
          display: 'flex', gap: 'var(--sp-5)', padding: '0 var(--gutter)', width: 'max-content',
          transform: `translateX(calc(${-p * 62}vw))`, willChange: 'transform'
        }}>
          {COLS.map((c, i) => <div key={c.title} style={{ width: '30vw', minWidth: 300 }}><CollectionCard index={i + 1} {...c} /></div>)}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Collections });
