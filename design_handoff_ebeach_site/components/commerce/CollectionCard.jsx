import React from 'react';

/** Tall editorial panel for a collection, with an overlay that opens on hover. */
export function CollectionCard({ title, index, blurb, image, accent = 'var(--sun-500)', onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onClick}
      style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--r-lg)', background: 'var(--sea-700)',
        aspectRatio: '3 / 4', cursor: 'pointer', color: 'var(--text-on-dark)' }}>
      {image && <img src={image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
        transform: hover ? 'scale(1.05)' : 'scale(1)', transition: 'transform var(--dur-slow) var(--ease-tide)' }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'var(--overlay-scrim)' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'var(--sp-6)' }}>
        {index != null && <span style={{ font: 'var(--type-label)', fontFamily: 'var(--font-body)', letterSpacing: 'var(--tr-label)', textTransform: 'uppercase', color: accent }}>{String(index).padStart(2, '0')}</span>}
        <h3 style={{ font: 'var(--type-display-s)', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: 'var(--tr-display)', textTransform: 'uppercase', color: 'var(--text-on-dark)', margin: '8px 0 0' }}>{title}</h3>
        <div style={{ overflow: 'hidden', maxHeight: hover ? 120 : 0, opacity: hover ? 1 : 0,
          transition: 'max-height var(--dur-base) var(--ease-tide), opacity var(--dur-base) var(--ease-tide)' }}>
          <p style={{ margin: '12px 0 0', fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-s)', lineHeight: 1.55, color: 'var(--text-on-dark-muted)' }}>{blurb}</p>
        </div>
      </div>
    </article>
  );
}
