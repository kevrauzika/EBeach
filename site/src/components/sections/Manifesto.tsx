'use client';

import { useRef } from 'react';
import { SectionLabel } from '../core/SectionLabel';
import { MANIFESTO } from '@/lib/catalog';
import { useScrollProgress, useReducedMotion } from '@/lib/scroll';
import s from './sections.module.css';

const WORDS = MANIFESTO.split(' ');

/* 02 — Editorial copy on sand, revealed word by word as the section travels. */
export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const p = useScrollProgress(ref);
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className={s.manifesto} aria-labelledby="manifesto-title">
      <div className={s.wrap}>
        <SectionLabel index={2}>Manifesto</SectionLabel>
        <p id="manifesto-title" className={s.manifestoText}>
          {WORDS.map((w, i) => {
            const on = reduced || p > 0.18 + (i / WORDS.length) * 0.5;
            return (
              <span
                key={i}
                className={s.word}
                style={{ opacity: on ? 1 : 0.14, transform: on ? 'translateY(0)' : 'translateY(0.18em)' }}
              >
                {w}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
