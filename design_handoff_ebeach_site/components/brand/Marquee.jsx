import React from 'react';

/** Infinite horizontal ticker — testimonials, collection names, brand phrases. */
export function Marquee({ items = [], speed = 42, separator = '·', onDark = false, children }) {
  const content = children || items;
  const id = React.useId ? React.useId().replace(/:/g, '') : 'mq';
  const row = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-7)', paddingRight: 'var(--sp-7)', flex: '0 0 auto' }}>
      {(Array.isArray(content) ? content : [content]).map((it, i) => (
        <React.Fragment key={i}>
          <span style={{ whiteSpace: 'nowrap' }}>{it}</span>
          <span aria-hidden="true" style={{ color: onDark ? 'var(--sun-400)' : 'var(--sun-500)' }}>{separator}</span>
        </React.Fragment>
      ))}
    </div>
  );
  return (
    <div style={{ overflow: 'hidden', width: '100%', color: onDark ? 'var(--text-on-dark)' : 'var(--text-body)', fontFamily: 'var(--font-body)' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: `eb-mq-${id} ${speed}s linear infinite` }}>
        {row}{row}
      </div>
      <style>{`@keyframes eb-mq-${id}{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
