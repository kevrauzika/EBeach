import { SectionLabel } from '../core/SectionLabel';
import { Marquee } from '../brand/Marquee';
import { QUOTES } from '@/lib/catalog';
import s from './sections.module.css';

/* 07 — Quiet. Small type, hairline separators, no stars, no avatars. */
export function Proof() {
  return (
    <section className={s.proof} aria-label="Quem usa">
      <div className={s.proofHead}>
        <SectionLabel index={7}>Quem usa</SectionLabel>
      </div>
      <Marquee
        speed={52}
        items={QUOTES.map(([quote, who]) => (
          <span key={who} className={s.quote}>
            <span className={s.quoteText}>{quote}</span>
            <span className={s.quoteWho}>{who}</span>
          </span>
        ))}
      />
    </section>
  );
}
