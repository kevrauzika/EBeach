'use client';

import { useRef } from 'react';
import { ScrollCue } from '../brand/ScrollCue';
import { ProductRender } from '../media/ProductRender';
import { lerp, range, useMedia, usePinProgress, useReducedMotion } from '@/lib/scroll';
import { BASE_PRICE } from '@/lib/catalog';
import { BRL } from '@/lib/format';
import s from './sections.module.css';

/* 01 — Brand impact. The product is established as an object before it is sold.
   Everything is scrubbed off the track's 0→1 progress, so scrolling back up
   runs the whole thing in reverse. */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const p = usePinProgress(ref);
  const reduced = useReducedMotion();
  const narrow = useMedia('(max-width: 860px)');

  const t = reduced ? 1 : p;

  // Starts nearly abstract, filling the viewport; settles at product size.
  const scale = lerp(narrow ? 1.75 : 2.35, 1, range(t, 0, 0.88));
  const drift = lerp(-4, 3, t);

  // Noon sky turns to sand across the same progress.
  const sky = range(t, 0.1, 0.9) * 100;
  const wordOpacity = range(t, 0.34, 0.92);
  const wordScale = lerp(0.88, 1, range(t, 0.3, 1));
  const chrome = range(t, 0.55, 0.9);

  return (
    <section ref={ref} id="inicio" className={s.heroTrack} aria-label="E-BEACH">
      <div
        // The header flips to its foam lockup while the stage still reads dark.
        data-dark-section={t < 0.55 ? '' : undefined}
        className={s.heroStage}
        style={{
          background: `linear-gradient(180deg,
            color-mix(in oklab, var(--sky-200) ${100 - sky}%, var(--sand-100)) 0%,
            color-mix(in oklab, var(--sky-100) ${100 - sky}%, var(--sand-300)) 100%)`,
        }}
      >
        <h1
          className={s.heroWord}
          style={{ opacity: wordOpacity * 0.92, transform: `scale(${wordScale})` }}
        >
          E BEACH
        </h1>

        <div className={s.heroProduct} style={{ transform: `scale(${scale}) translateY(${drift}%)` }}>
          <ProductRender t={t} />
        </div>

        <div className={s.heroCopy} style={{ opacity: chrome }}>
          <p>
            Óculos feitos para a luz do Brasil. Lente polarizada UV400, acetato italiano, montagem no litoral
            paulista.
          </p>
        </div>

        <div className={s.heroMeta} style={{ opacity: chrome }}>
          <div
            style={{
              font: 'var(--type-label)',
              fontFamily: 'var(--font-body)',
              letterSpacing: 'var(--tr-label)',
              textTransform: 'uppercase',
              color: 'var(--ink-500)',
            }}
          >
            Maré 01 · Degradê
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--fw-display)',
              fontSize: 28,
              letterSpacing: 'var(--tr-display)',
              wordSpacing: 'var(--ws-display)',
              color: 'var(--sea-900)',
            }}
          >
            {BRL(BASE_PRICE)}
          </div>
        </div>

        <div className={s.heroCue} style={{ opacity: 1 - range(t, 0.5, 0.8) }}>
          <ScrollCue label="Role" />
        </div>
      </div>
    </section>
  );
}
