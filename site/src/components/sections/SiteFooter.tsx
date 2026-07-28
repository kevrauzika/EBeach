'use client';

import { useState } from 'react';
import { WaveDivider } from '../brand/WaveDivider';
import { Logo } from '../brand/Logo';
import { Button } from '../core/Button';
import { Icon } from '../core/Icon';
import { Input } from '../forms/Input';
import { Checkbox } from '../forms/Checkbox';
import { LoopVideo } from '../media/ScrollVideo';
import s from './sections.module.css';

const COLS: [string, string[]][] = [
  ['Coleções', ['Maré', 'Duna', 'Sol poente', 'Recife']],
  ['Ajuda', ['Trocas e devoluções', 'Garantia de 2 anos', 'Cuidados com a lente', 'Contato']],
  ['Marca', ['Nossa oficina', 'Sustentabilidade', 'Lojistas']],
];

/* 08 — Wave seam, beach plate behind the CTA, then the abyssal footer. */
export function SiteFooter() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(true);
  const [sent, setSent] = useState(false);

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
            <div>
              <Input
                id="newsletter"
                onDark
                type="email"
                label="Receba as coleções primeiro"
                placeholder="voce@email.com"
                value={email}
                onChange={setEmail}
                hint={sent ? 'Pronto. Chegamos em breve.' : undefined}
              />
              <div style={{ marginTop: 'var(--sp-5)' }}>
                <Button
                  variant="onDark"
                  size="sm"
                  disabled={!consent || !email}
                  onClick={() => setSent(true)}
                  iconAfter={<Icon name="arrow-right" size={15} />}
                >
                  {sent ? 'Inscrito' : 'Assinar'}
                </Button>
              </div>
              <div style={{ marginTop: 'var(--sp-5)' }}>
                <Checkbox
                  id="newsletter-consent"
                  onDark
                  label="Aceito receber e-mails da E-BEACH."
                  checked={consent}
                  onChange={setConsent}
                />
              </div>
            </div>

            {COLS.map(([title, items]) => (
              <nav key={title} aria-label={title}>
                <div className={s.footerColTitle}>{title}</div>
                <ul className={s.footerList}>
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#colecoes" style={{ fontSize: 'var(--fs-body-s)' }}>
                        {item}
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
              © 2026 E-BEACH Eyewear · São Sebastião, SP
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
