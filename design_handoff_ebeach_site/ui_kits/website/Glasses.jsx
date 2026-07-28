// Geometric stand-in for the E-BEACH product shot. Replace with real photography.
function GlassesFigure({ width = 520, frame = '#06222D', lens = 'linear-gradient(160deg,#7FD3CE,#0E5C73)', rotate = 0, opacity = 1 }) {
  const u = width / 520;
  const lensW = 196 * u, lensH = 150 * u, bar = 13 * u;
  const lensStyle = {
    width: lensW, height: lensH, borderRadius: `${44*u}px ${52*u}px ${64*u}px ${40*u}px`,
    border: `${bar}px solid ${frame}`, background: lens,
    boxShadow: 'inset 0 8px 26px rgba(255,255,255,0.22), inset 0 -14px 30px rgba(6,34,45,0.35)'
  };
  return (
    <div aria-label="Óculos E-BEACH" style={{
      width, opacity, perspective: 1400,
      transform: `rotateY(${rotate}deg)`, transformStyle: 'preserve-3d',
      transition: 'transform 120ms linear'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', left: -46*u, top: '34%', width: 60*u, height: bar, background: frame, borderRadius: bar, transform: 'rotate(-6deg)', transformOrigin: 'right center' }} />
        <div style={lensStyle} />
        <div style={{ width: 46*u, height: bar, background: frame, borderRadius: bar, transform: `translateY(-${30*u}px)` }} />
        <div style={lensStyle} />
        <div style={{ position: 'absolute', right: -46*u, top: '34%', width: 60*u, height: bar, background: frame, borderRadius: bar, transform: 'rotate(6deg)', transformOrigin: 'left center' }} />
      </div>
    </div>
  );
}
Object.assign(window, { GlassesFigure });
