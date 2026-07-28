import React from 'react';

/** Lucide glyph wrapper. Requires the Lucide UMD script on the page. */
export function Icon({ name, size = 18, strokeWidth = 1.5, color = 'currentColor', style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      ref.current.appendChild(i);
      window.lucide.createIcons({ attrs: { width: size, height: size, 'stroke-width': strokeWidth, stroke: color }, nameAttr: 'data-lucide' });
    }
  }, [name, size, strokeWidth, color]);
  return <span ref={ref} aria-hidden="true" style={{ display: 'inline-flex', width: size, height: size, ...style }} />;
}
