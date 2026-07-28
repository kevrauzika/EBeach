import { Fragment } from 'react';
import s from './brand.module.css';

export type MarqueeProps = {
  items: React.ReactNode[];
  /** Seconds for one full pass. */
  speed?: number;
  separator?: string;
  onDark?: boolean;
};

/** Infinite horizontal ticker — testimonials, collection names, brand phrases. */
export function Marquee({ items, speed = 42, separator = '·', onDark = false }: MarqueeProps) {
  const row = (key: string, hidden: boolean) => (
    <div className={s.marqueeRow} key={key} aria-hidden={hidden || undefined}>
      {items.map((it, i) => (
        <Fragment key={i}>
          <span style={{ whiteSpace: 'nowrap' }}>{it}</span>
          <span aria-hidden="true" style={{ color: onDark ? 'var(--sun-400)' : 'var(--sun-500)' }}>
            {separator}
          </span>
        </Fragment>
      ))}
    </div>
  );

  return (
    <div
      className={s.marquee}
      style={{ color: onDark ? 'var(--text-on-dark)' : 'var(--text-body)' }}
    >
      <div className={s.marqueeTrack} style={{ ['--mq-speed' as string]: `${speed}s` }}>
        {row('a', false)}
        {/* Duplicate only exists so the loop is seamless — hidden from AT. */}
        {row('b', true)}
      </div>
    </div>
  );
}
