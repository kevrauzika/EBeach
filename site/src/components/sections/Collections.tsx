'use client';

import { useEffect, useRef, useState } from 'react';
import { SectionLabel } from '../core/SectionLabel';
import { ModelCard } from '../commerce/ModelCard';
import { useShowcase } from '../ShowcaseProvider';
import { MODELS } from '@/lib/catalog';
import { useMedia, usePinProgress, useReducedMotion } from '@/lib/scroll';
import s from './sections.module.css';

/* 03 — The whole line on a horizontal pin on desktop; a native scroll-snap
   carousel below 860px, which is also what reduced-motion gets. */
export function Collections() {
  const ref = useRef<HTMLElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const p = usePinProgress(ref);
  const narrow = useMedia('(max-width: 860px)');
  const reduced = useReducedMotion();
  const { select } = useShowcase();

  // Slide exactly as far as the rail overflows, so the last card lands in view.
  const [overflow, setOverflow] = useState(0);
  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const measure = () => setOverflow(Math.max(0, el.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [narrow, reduced]);

  const cards = MODELS.map((m, i) => <ModelCard key={m.id} model={m} index={i + 1} onSelect={select} />);

  const head = (
    <div className={s.collectionsHead}>
      <SectionLabel index={3} onDark>
        Coleção
      </SectionLabel>
      <h2 className={s.collectionsTitle}>Sete modelos, duas linhas.</h2>
    </div>
  );

  if (narrow || reduced) {
    return (
      <section id="colecoes" className={s.collectionsFlat} data-dark-section aria-label="Coleção">
        {head}
        <div className={s.collectionsSnap}>{cards}</div>
      </section>
    );
  }

  return (
    <section ref={ref} id="colecoes" className={s.collectionsTrack} data-dark-section aria-label="Coleção">
      <div className={s.collectionsStage}>
        {head}
        <div ref={rail} className={s.collectionsRail} style={{ transform: `translateX(${-p * overflow}px)` }}>
          {cards}
        </div>
      </div>
    </section>
  );
}
