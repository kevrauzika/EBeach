'use client';

import { useRef } from 'react';
import { SectionLabel } from '../core/SectionLabel';
import { SpecRow } from '../commerce/SpecRow';
import { ProductRender } from '../media/ProductRender';
import { PARTS } from '@/lib/catalog';
import { range, usePinProgress, useReducedMotion } from '@/lib/scroll';
import s from './sections.module.css';

const LEN = 250; // connector length in its own SVG space
const OVERHANG = 88; // how far it reaches past the label, toward the product

/** Thin technical callout line, drawn with stroke-dashoffset as the label lands. */
function Connector({ draw, side }: { draw: number; side: 'left' | 'right' }) {
  const left = side === 'left';
  const path = left ? `M0,2 H${LEN - 56} L${LEN},30` : `M${LEN},2 H56 L0,30`;
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${LEN} 32`}
      width={LEN}
      height={32}
      className={s.anatomyConnector}
      style={{
        marginLeft: left ? 'auto' : `-${OVERHANG}px`,
        marginRight: left ? `-${OVERHANG}px` : undefined,
      }}
    >
      <path
        d={path}
        fill="none"
        stroke="var(--sea-700)"
        strokeWidth={1}
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1 - draw}
      />
    </svg>
  );
}

/* 03 — The product locks centre-screen and keeps turning while four callouts
   draw themselves in. 400vh of track. */
export function Anatomy() {
  const ref = useRef<HTMLElement>(null);
  const p = usePinProgress(ref);
  const reduced = useReducedMotion();

  return (
    <section ref={ref} id="anatomia" className={s.anatomyTrack} aria-label="Anatomia do produto">
      <div className={s.anatomyStage}>
        <div className={s.anatomyLabelTop}>
          <SectionLabel index={3}>Anatomia do produto</SectionLabel>
        </div>

        <div className={s.anatomyProduct}>
          <ProductRender t={reduced ? 0.5 : range(p, 0.15, 0.95)} />
        </div>

        {PARTS.map((part) => {
          const draw = reduced ? 1 : range(p, part.at, part.at + 0.1);
          const on = draw > 0;
          return (
            <div
              key={part.title}
              className={s.anatomyPart}
              data-side={part.side}
              style={{
                ['--top' as string]: part.top,
                ['--top-mobile' as string]: part.topMobile,
                opacity: on ? Math.min(1, draw * 2) : 0,
                transform: on ? 'translateX(0)' : `translateX(${part.side === 'left' ? -20 : 20}px)`,
              }}
            >
              <Connector draw={draw} side={part.side} />
              <div className={s.anatomyPartTitle}>{part.title}</div>
              <p className={s.anatomyPartBody}>{part.body}</p>
            </div>
          );
        })}

        <div className={s.anatomySpecs}>
          <SpecRow term="Peso" value="24 g" />
          <SpecRow term="Garantia" value="2 anos" />
        </div>
      </div>
    </section>
  );
}
