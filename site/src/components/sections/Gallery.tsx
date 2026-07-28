'use client';

import { useRef, useState } from 'react';
import { SectionLabel } from '../core/SectionLabel';
import { GALLERY } from '@/lib/catalog';
import { useMedia, useScrollProgress, useReducedMotion } from '@/lib/scroll';
import s from './sections.module.css';

/* 06 — Asymmetric grid, each image parallaxing at its own rate.
   The "arraste" cursor replaces the pointer inside this region only. */
export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const p = useScrollProgress(ref);
  const reduced = useReducedMotion();
  const narrow = useMedia('(max-width: 900px)');
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);

  // Parallax distances halve on small screens.
  const amp = reduced ? 0 : narrow ? 210 : 420;
  const showCursor = cursor && !narrow;

  return (
    <section
      ref={ref}
      id="historias"
      className={s.gallery}
      style={{ cursor: showCursor ? 'none' : undefined }}
      onMouseMove={(e) => !narrow && setCursor({ x: e.clientX, y: e.clientY })}
      onMouseLeave={() => setCursor(null)}
      aria-label="Na luz real"
    >
      <div className={s.wrap}>
        <SectionLabel index={6}>Na luz real</SectionLabel>

        <div className={s.galleryGrid}>
          {GALLERY.map((shot) => (
            <figure
              key={shot.src + shot.label}
              className={s.shot}
              style={{
                ['--col' as string]: shot.col,
                transform: `translateY(${(0.5 - p) * shot.speed * amp}px)`,
              }}
            >
              <div className={s.shotFrame} style={{ aspectRatio: shot.ratio }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- placeholder art direction, swapped later */}
                <img src={shot.src} alt="" loading="lazy" />
              </div>
              <figcaption className={s.shotCaption}>{shot.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {showCursor && (
        <div aria-hidden="true" className={s.dragCursor} style={{ left: cursor.x, top: cursor.y, transform: 'translate(-50%, -50%)' }}>
          Arraste
        </div>
      )}
    </section>
  );
}
