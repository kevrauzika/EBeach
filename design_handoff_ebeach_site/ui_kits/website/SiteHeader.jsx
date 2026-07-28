const { Logo, Button, IconButton, Input, Checkbox } = window.EBEACHDesignSystem_3fff58;

function SiteHeader({ dark, bagCount, onBag }) {
  const links = ['Coleções', 'Anatomia', 'Configurador', 'Histórias'];
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60, height: 'var(--header-h)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 var(--gutter)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      transition: 'color var(--dur-slow) var(--ease-tide)'
    }}>
      {/* Protection gradient — the hero product passes behind the header at full bleed. */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: '0 0 -40px 0', pointerEvents: 'none',
        background: dark
          ? 'linear-gradient(180deg, rgba(6,34,45,0.55) 0%, rgba(6,34,45,0) 100%)'
          : 'linear-gradient(180deg, rgba(245,233,215,0.72) 0%, rgba(245,233,215,0) 100%)',
        transition: 'background var(--dur-slow) var(--ease-tide)'
      }} />
      <div style={{ position: 'relative' }}><Logo tone={dark ? 'foam' : 'ink'} height={22} base="../.." /></div>
      <nav style={{ position: 'relative', display: 'flex', gap: 'var(--sp-6)' }}>
        {links.map((l) => (
          <a key={l} href="#" onClick={(e) => e.preventDefault()} style={{
            font: 'var(--type-label)', fontFamily: 'var(--font-body)', letterSpacing: 'var(--tr-label)',
            textTransform: 'uppercase', color: 'inherit', borderBottom: '1px solid transparent'
          }}>{l}</a>
        ))}
      </nav>
      <button onClick={onBag} style={{
        position: 'relative', display: 'flex', alignItems: 'center', gap: 8, background: 'transparent', border: 'none',
        cursor: 'pointer', color: 'inherit', font: 'var(--type-label)', fontFamily: 'var(--font-body)',
        letterSpacing: 'var(--tr-label)', textTransform: 'uppercase'
      }}>
        Sacola <span style={{
          minWidth: 20, height: 20, borderRadius: 999, display: 'inline-flex', alignItems: 'center',
          justifyContent: 'center', background: 'var(--sun-500)', color: 'var(--sea-900)', fontSize: 11
        }}>{bagCount}</span>
      </button>
    </header>
  );
}

function BagDrawer({ open, items, onClose, onRemove }) {
  const total = items.reduce((s, i) => s + i.price, 0);
  return (
    <>
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 90, background: 'rgba(6,34,45,0.5)',
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity var(--dur-base) var(--ease-tide)'
      }} />
      <aside className="on-dark" style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: 'min(420px, 92vw)', zIndex: 100,
        background: 'var(--sea-900)', color: 'var(--text-on-dark)', padding: 'var(--sp-7)',
        display: 'flex', flexDirection: 'column',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform var(--dur-slow) var(--ease-tide)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-7)' }}>
          <span style={{ font: 'var(--type-label)', fontFamily: 'var(--font-body)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>Sua sacola</span>
          <IconButton name="x" label="Fechar sacola" tone="foam" size="sm" onClick={onClose} />
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {items.length === 0 && <p style={{ color: 'var(--text-on-dark-muted)' }}>Ainda vazia. Monte o seu no configurador.</p>}
          {items.map((it, i) => (
            <div key={i} style={{ display: 'flex', gap: 'var(--sp-4)', padding: 'var(--sp-4) 0', borderBottom: '1px solid var(--border-hairline-dark)' }}>
              <div style={{ width: 64, height: 48, borderRadius: 6, background: it.lens, flex: '0 0 auto', border: '2px solid ' + it.frame }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>{it.name}</div>
                <div style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-on-dark-muted)' }}>{it.frameLabel} · {it.lensLabel}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 'var(--fs-body-s)' }}>{window.BRL(it.price)}</div>
                <button onClick={() => onRemove(i)} style={{ background: 'none', border: 'none', padding: 0, marginTop: 6, cursor: 'pointer', color: 'var(--text-on-dark-muted)', fontSize: 11, textDecoration: 'underline' }}>remover</button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 'var(--sp-5)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--sp-5)' }}>
            <span style={{ color: 'var(--text-on-dark-muted)' }}>Total</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24 }}>{window.BRL(total)}</span>
          </div>
          <Button variant="solid" size="lg" fullWidth>Finalizar compra</Button>
        </div>
      </aside>
    </>
  );
}
Object.assign(window, { SiteHeader, BagDrawer });
