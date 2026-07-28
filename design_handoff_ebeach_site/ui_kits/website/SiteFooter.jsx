const { WaveDivider, Logo, Input, Button, Checkbox, Icon } = window.EBEACHDesignSystem_3fff58;

function SiteFooter() {
  const [email, setEmail] = React.useState('');
  const [ok, setOk] = React.useState(false);
  const cols = [
    ['Coleções', ['Maré', 'Duna', 'Sol poente', 'Recife']],
    ['Ajuda', ['Trocas e devoluções', 'Garantia de 2 anos', 'Cuidados com a lente', 'Contato']],
    ['Marca', ['Nossa oficina', 'Sustentabilidade', 'Lojistas']]
  ];
  return (
    <footer className="on-dark" data-screen-label="Footer" style={{ background: 'var(--sea-900)', color: 'var(--text-on-dark)' }}>
      <div style={{ background: 'var(--sand-100)' }}><WaveDivider fill="var(--sea-900)" height={110} /></div>
      <div style={{ position: 'relative', minHeight: '58vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', marginBottom: 'var(--sp-9)' }}>
        <LoopVideo src="../../assets/video/praia.mp4" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,34,45,0.55) 0%, rgba(6,34,45,0.20) 45%, var(--sea-900) 100%)' }} />
        <h2 style={{ position: 'relative', padding: '0 var(--gutter) var(--sp-8)', font: 'var(--type-display-l)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: 'var(--tr-display-xl)', textTransform: 'uppercase', color: 'var(--text-on-dark)', margin: 0, maxWidth: '14ch' }}>
          Encare a luz
        </h2>
      </div>
      <div style={{ padding: '0 var(--gutter) var(--section-y)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px,1fr) repeat(3, auto)', gap: 'var(--sp-9)', paddingBottom: 'var(--sp-9)', borderBottom: '1px solid var(--border-hairline-dark)' }}>
          <div>
            <Input id="nl" onDark label="Receba as coleções primeiro" placeholder="voce@email.com" value={email} onChange={setEmail} />
            <div style={{ display: 'flex', gap: 'var(--sp-4)', alignItems: 'center', marginTop: 'var(--sp-5)' }}>
              <Button variant="onDark" size="sm" onClick={() => setOk(true)} iconAfter={<Icon name="arrow-right" size={15} />}>{ok ? 'Inscrito' : 'Assinar'}</Button>
            </div>
            <div style={{ marginTop: 'var(--sp-5)' }}><Checkbox id="nlc" onDark label="Aceito receber e-mails da E-BEACH." checked /></div>
          </div>
          {cols.map(([t, items]) => (
            <nav key={t}>
              <div style={{ font: 'var(--type-label)', fontFamily: 'var(--font-body)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)', marginBottom: 'var(--sp-4)' }}>{t}</div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 'var(--sp-3)' }}>
                {items.map((i) => <li key={i}><a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 'var(--fs-body-s)' }}>{i}</a></li>)}
              </ul>
            </nav>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--sp-6)', paddingTop: 'var(--sp-7)' }}>
          <Logo tone="foam" height={64} base="../.." />
          <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-on-dark-muted)' }}>© 2026 E-BEACH Eyewear · São Sebastião, SP</span>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { SiteFooter });
