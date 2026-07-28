// Scroll-driven flip between the two real E-BEACH product shots.
// Front photo turns away on the Y axis while the 3/4 shot turns in — the crossfade
// happens at the angle where both silhouettes overlap, so it reads as one object.
const SIDE_ANGLE = 52; // inherent yaw of the 3/4 photograph

function ProductFlip({ t = 0, width = 640, base = '../..', shadow = true }) {
  const yaw = t * SIDE_ANGLE;
  const mix = window.clamp01((t - 0.28) / 0.30);
  const eased = mix * mix * (3 - 2 * mix); // smoothstep
  const layer = {
    position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
    backfaceVisibility: 'hidden', transformStyle: 'preserve-3d', willChange: 'transform, opacity'
  };
  const img = { width: '100%', height: 'auto', display: 'block', userSelect: 'none' };
  return (
    <div aria-label="Óculos E-BEACH" style={{ width, aspectRatio: '1048 / 459', position: 'relative', perspective: 1800 }}>
      <div style={{ ...layer, transform: `rotateY(${-yaw}deg)`, opacity: 1 - eased }}>
        <img src={base + '/assets/product/ebeach-front.png'} alt="Óculos E-BEACH, vista frontal" style={img} draggable="false" />
      </div>
      <div style={{ ...layer, transform: `rotateY(${SIDE_ANGLE - yaw}deg)`, opacity: eased }}>
        <img src={base + '/assets/product/ebeach-side.png'} alt="Óculos E-BEACH, vista três-quartos" style={img} draggable="false" />
      </div>
      {shadow && (
        <div aria-hidden="true" style={{
          position: 'absolute', left: '14%', right: '14%', bottom: '-4%', height: '9%',
          borderRadius: '50%', background: 'radial-gradient(ellipse at center, rgba(6,34,45,0.28), rgba(6,34,45,0) 70%)',
          filter: 'blur(6px)', transform: `scaleX(${1 - 0.18 * t})`, opacity: 0.7
        }} />
      )}
    </div>
  );
}
Object.assign(window, { ProductFlip });
