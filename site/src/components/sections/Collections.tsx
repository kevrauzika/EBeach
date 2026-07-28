'use client';

import { useRef } from 'react';
import { SectionLabel } from '../core/SectionLabel';
import { CollectionCard } from '../commerce/CollectionCard';
import { COLLECTIONS } from '@/lib/catalog';
import { useMedia, usePinProgress, useReducedMotion } from '@/lib/scroll';
import s from './sections.module.css';

/* 04 — Horizontal pinning on desktop; a native scroll-snap carousel below 860px,
   which is also what reduced-motion gets. */
export function Collections() {
  const ref = useRef<HTMLElement>(null);
  const p = usePinProgress(ref);
  const narrow = useMedia('(max-width: 860px)');
  const reduced = useReducedMotion();

  const cards = COLLECTIONS.map((c, i) => <CollectionCard key={c.title} index={i + 1} {...c} />);

  if (narrow || reduced) {
    return (
      <section id="colecoes" className={s.collectionsFlat} data-dark-section aria-label="Coleções">
        <div className={s.collectionsHead}>
          <SectionLabel index={4} onDark>
            Coleções
          </SectionLabel>
        </div>
        <div className={s.collectionsSnap}>{cards}</div>
      </section>
    );
  }

  return (
    <section ref={ref} id="colecoes" className={s.collectionsTrack} data-dark-section aria-label="Coleções">
      <div className={s.collectionsStage}>
        <div className={s.collectionsHead}>
          <SectionLabel index={4} onDark>
            Coleções
          </SectionLabel>
        </div>
        <div className={s.collectionsRail} style={{ transform: `translateX(${-p * 62}vw)` }}>
          {cards}
        </div>
      </div>
    </section>
  );
}
