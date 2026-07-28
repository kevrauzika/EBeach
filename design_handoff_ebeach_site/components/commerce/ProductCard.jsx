import React from 'react';
import { Badge } from '../core/Badge.jsx';

/** Product tile: flat image field, hairline rule, no drop shadow. */
export function ProductCard({ name, subtitle, price, image, badge, tone = 'sand', onClick }) {
  const [hover, setHover] = React.useState(false);
  const dark = tone === 'deep';
  return (
    <button type="button" onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', background: 'transparent', padding: 0, cursor: 'pointer' }}>
      <div style={{
        position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: 'var(--r-lg)',
        background: dark ? 'var(--sea-700)' : 'var(--sand-200)'
      }}>
        {image && <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover',
          transform: hover ? 'scale(1.06)' : 'scale(1)', transition: 'transform var(--dur-slow) var(--ease-tide)' }} />}
        {badge && <span style={{ position: 'absolute', top: 'var(--sp-4)', left: 'var(--sp-4)' }}><Badge tone="sun">{badge}</Badge></span>}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--sp-4)', paddingTop: 'var(--sp-4)', marginTop: 'var(--sp-4)', borderTop: '1px solid ' + (dark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)') }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.125rem', letterSpacing: 'var(--tr-title)', color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)' }}>{name}</div>
          {subtitle && <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)', marginTop: 2 }}>{subtitle}</div>}
        </div>
        {price && <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-s)', fontWeight: 500, whiteSpace: 'nowrap', color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)' }}>{price}</div>}
      </div>
    </button>
  );
}
