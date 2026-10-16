'use client';

import { useEffect, useRef } from 'react';
import { ScrollCue } from '../brand/ScrollCue';
import { useReducedMotion } from '@/lib/scroll';
import s from './sections.module.css';

/* 01 — Brand impact. A looping reel (rendered with Remotion, see /video) shows the
   whole line one pair at a time on a noon beach, each captioned with its model
   name, the lockup watermarked behind. Seamless 21s loop at 60fps; reduced motion
   gets the poster frame. The uncaptioned first cut is still at hero-reel.mp4. */
const REEL = {
  src: '/assets/video/model-reel.mp4',
  poster: '/assets/video/model-reel-poster.jpg',
};

export function Hero() {
  const video = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (reduced) v.pause();
    else v.play().catch(() => {});
  }, [reduced]);

  return (
    <section id="inicio" className={s.hero} aria-label="E-BEACH">
      <h1 className={s.heroTitle}>E BEACH</h1>

      <div className={s.heroFrame}>
        <div className={s.heroCard}>
          <video
            ref={video}
            src={REEL.src}
            poster={REEL.poster}
            muted
            loop
            playsInline
            autoPlay={!reduced}
            preload="auto"
            aria-label="Os modelos E-BEACH passando um a um numa praia ao meio-dia: Sport N1, Sport N2, Sport N3, Sport N4, Casual N1, Casual N2 e Sport P1"
          />
        </div>
      </div>

      <div className={s.heroCue}>
        <ScrollCue label="Role" />
      </div>
    </section>
  );
}
