import React from 'react';
import { Icon } from './Icon.jsx';

/** Square-ish circular icon-only control (close, arrows, play). */
export function IconButton({ name, label, size = 'md', tone = 'ink', onClick, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const dims = { sm: 36, md: 44, lg: 56 }[size] || 44;
  const tones = {
    ink: { border: '1px solid var(--border-hairline)', color: 'var(--text-strong)', bg: hover ? 'var(--sea-900)' : 'transparent', fg: hover ? 'var(--sand-050)' : 'var(--text-strong)' },
    foam: { border: '1px solid var(--border-hairline-dark)', color: 'var(--sand-050)', bg: hover ? 'var(--sand-050)' : 'transparent', fg: hover ? 'var(--sea-900)' : 'var(--sand-050)' },
    sun: { border: '1px solid transparent', color: 'var(--sea-900)', bg: hover ? 'var(--accent-primary-hover)' : 'var(--accent-primary)', fg: 'var(--sea-900)' }
  }[tone];
  return (
    <button
      aria-label={label} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: dims, height: dims, borderRadius: 'var(--r-pill)', border: tones.border,
        background: tones.bg, color: tones.fg, display: 'inline-flex', alignItems: 'center',
        justifyContent: 'center', cursor: 'pointer', padding: 0,
        transition: 'background var(--dur-fast) var(--ease-tide), color var(--dur-fast) var(--ease-tide)'
      }}
      {...rest}
    >
      <Icon name={name} size={size === 'lg' ? 22 : 18} />
    </button>
  );
}
