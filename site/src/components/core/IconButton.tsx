'use client';

import { useState } from 'react';
import { Icon, type IconName } from './Icon';

const DIMS = { sm: 36, md: 44, lg: 56 } as const;

export type IconButtonProps = {
  name: IconName;
  /** Required — an icon is never the only label. */
  label: string;
  size?: keyof typeof DIMS;
  tone?: 'ink' | 'foam' | 'sun';
  onClick?: () => void;
};

export function IconButton({ name, label, size = 'md', tone = 'ink', onClick }: IconButtonProps) {
  const [hover, setHover] = useState(false);
  const dims = DIMS[size];
  const tones = {
    ink: {
      border: '1px solid var(--border-hairline)',
      bg: hover ? 'var(--sea-900)' : 'transparent',
      fg: hover ? 'var(--sand-050)' : 'var(--text-strong)',
    },
    foam: {
      border: '1px solid var(--border-hairline-dark)',
      bg: hover ? 'var(--sand-050)' : 'transparent',
      fg: hover ? 'var(--sea-900)' : 'var(--sand-050)',
    },
    sun: {
      border: '1px solid transparent',
      bg: hover ? 'var(--accent-primary-hover)' : 'var(--accent-primary)',
      fg: 'var(--sea-900)',
    },
  }[tone];

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: dims,
        height: dims,
        borderRadius: 'var(--r-pill)',
        border: tones.border,
        background: tones.bg,
        color: tones.fg,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        padding: 0,
        transition: 'background var(--dur-fast) var(--ease-tide), color var(--dur-fast) var(--ease-tide)',
      }}
    >
      <Icon name={name} size={size === 'lg' ? 22 : 18} />
    </button>
  );
}
