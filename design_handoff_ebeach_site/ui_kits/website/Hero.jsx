const { ScrollCue } = window.EBEACHDesignSystem_3fff58;

function Hero() {
  const ref = React.useRef(null);
  const p = window.usePinProgress(ref);
  const reduced = window.useReducedMotion();
  const t = reduced ? 1 : p;
  const scale = window.lerp(2.35, 1, window.range(t, 0, 0.88));
  const sky = window.range(t, 0.1, 0.9);
  const wordOpacity = window.range(t, 0.34, 0.92);
  const wordScale = window.lerp(0.88, 1, window.range(t, 0.3, 1));
  const drift = window.lerp(-4, 3, t);

  return (
    <section ref={ref} data-screen-label="Hero" style={{ height: '360vh', position: 'relative' }}>
      <div data-dark-section={t < 0.55 ? '' : undefined} style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden',
        background: `linear-gradient(180deg, color-mix(in oklab, #BFE9EE ${100 - sky * 100}%, #F5E9D7) 0%, color-mix(in oklab, #E8F3EC ${100 - sky * 100}%, #E4C9A0) 100%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{
          position: 'absolute', margin: 0, width: '100%', textAlign: 'center',
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(4rem, 19vw, 17rem)', letterSpacing: '-0.05em', lineHeight: 0.82,
          color: 'var(--sea-900)', opacity: wordOpacity * 0.92, transform: `scale(${wordScale})`,
          textTransform: 'uppercase', userSelect: 'none'
        }}>E BEACH</h1>
        <div style={{ position: 'relative', transform: `scale(${scale}) translateY(${drift}%)`, willChange: 'transform' }}>
          <ScrollVideo t={t} src="../../assets/video/turntable.mp4" width={720} aspect="4 / 3" zoom={1.34}
            fallback={<ProductFlip t={t} width={640} base="../.." />} />
        </div>
        <div style={{ position: 'absolute', left: 'var(--gutter)', bottom: 'var(--sp-8)', maxWidth: 340, opacity: window.range(t, 0.55, 0.9) }}>
          <p style={{ margin: 0, fontSize: 'var(--fs-body-l)', color: 'var(--sea-900)', lineHeight: 1.5 }}>
            Óculos feitos para a luz do Brasil. Lente polarizada UV400, acetato italiano, montagem no litoral paulista.
          </p>
        </div>
        <div style={{ position: 'absolute', right: 'var(--gutter)', bottom: 'var(--sp-8)', textAlign: 'right', opacity: window.range(t, 0.55, 0.9) }}>
          <div style={{ font: 'var(--type-label)', fontFamily: 'var(--font-body)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', color: 'var(--ink-500)' }}>Maré 01 · Degradê</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, letterSpacing: '-0.03em', color: 'var(--sea-900)' }}>R$ 389</div>
        </div>
        <div style={{ position: 'absolute', bottom: 'var(--sp-7)', left: '50%', transform: 'translateX(-50%)', opacity: 1 - window.range(t, 0.5, 0.8) }}>
          <ScrollCue label="Role" />
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
