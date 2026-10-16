'use client';

import { WaveDivider } from '../brand/WaveDivider';
import { Logo } from '../brand/Logo';
import { LoopVideo } from '../media/ScrollVideo';
import { whatsappUrl } from '@/lib/whatsapp';
import s from './sections.module.css';

/* Only links that lead somewhere real: the two lines and WhatsApp service. */
const COLS: [string, [string, string][]][] = [
  ['Coleção', [['Linha Sport', '#colecoes'], ['Linha Casual', '#colecoes'], ['Escolha o seu', '#escolha']]],
  ['Atendimento', [['Falar no WhatsApp', whatsappUrl('Olá! Vim pelo site da E-BEACH e quero saber mais sobre os modelos.')]]],
];

/* 05 — Wave seam, beach plate behind the CTA, then the abyssal footer. */
export function SiteFooter() {
  return (
    <footer className={`on-dark ${s.footer}`} data-dark-section>
      <div className={s.footerSeam}>
        <WaveDivider fill="var(--sea-900)" height={110} />
      </div>

      <div className={s.footerCta}>
        <LoopVideo src="/assets/video/praia.mp4" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div aria-hidden="true" className={s.footerScrim} />
        <h2 className={s.footerCtaTitle}>Encare a luz</h2>
      </div>

      <div className={s.footerBody}>
        <div className={s.wrap}>
          <div className={s.footerGrid}>
            {COLS.map(([title, items]) => (
              <nav key={title} aria-label={title}>
                <div className={s.footerColTitle}>{title}</div>
                <ul className={s.footerList}>
                  {items.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        {...(href.startsWith('#') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                        style={{ fontSize: 'var(--fs-body-s)' }}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className={s.footerBottom}>
            <Logo tone="foam" height={64} />
            <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-on-dark-muted)' }}>
              © 2026 E-BEACH
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
