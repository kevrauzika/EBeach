'use client';

import { useState } from 'react';
import { SectionLabel } from '../core/SectionLabel';
import { Badge } from '../core/Badge';
import { Button } from '../core/Button';
import { Icon } from '../core/Icon';
import { SwatchPicker } from '../forms/SwatchPicker';
import { Switch } from '../forms/Switch';
import { GlassesFigure } from '../media/GlassesFigure';
import { useBag } from '../BagProvider';
import { BASE_PRICE, FRAMES, LENSES, POLARIZED_ADD } from '@/lib/catalog';
import { BRL } from '@/lib/format';
import s from './sections.module.css';

/* 05 — Functional. The render and the price update live; price is always derived. */
export function Configurator() {
  const { add } = useBag();
  const [frame, setFrame] = useState('abissal');
  const [lens, setLens] = useState('verde');
  const [pol, setPol] = useState(true);

  const f = FRAMES.find((x) => x.value === frame)!;
  const l = LENSES.find((x) => x.value === lens)!;
  const price = BASE_PRICE + l.add + (pol ? POLARIZED_ADD : 0);

  return (
    <section id="configurador" className={s.config} aria-labelledby="config-title">
      <div className={s.wrap}>
        <SectionLabel index={5}>Configurador</SectionLabel>

        <div className={s.configGrid}>
          <div className={s.configStage}>
            <div className={s.configBadge}>
              <Badge tone="sun">Monte o seu</Badge>
            </div>
            <GlassesFigure width={480} frame={f.hex} lens={l} />
          </div>

          <div>
            <h2 id="config-title" className={s.configTitle}>
              Maré 01
            </h2>
            <p style={{ margin: '10px 0 var(--sp-6)', color: 'var(--text-muted)', maxWidth: '38ch' }}>
              Escolha armação e lente. Cada peça é montada sob encomenda em 5 dias úteis.
            </p>

            <div className={s.configControls}>
              <SwatchPicker label="Armação" value={frame} onChange={setFrame} options={FRAMES} />
              <SwatchPicker label="Lente" value={lens} onChange={setLens} options={LENSES} />
              <Switch id="polarizacao" checked={pol} onChange={setPol} label={`Polarização + ${BRL(POLARIZED_ADD)}`} />
            </div>

            <div className={s.configTotal}>
              <span
                style={{
                  font: 'var(--type-label)',
                  fontFamily: 'var(--font-body)',
                  letterSpacing: 'var(--tr-label)',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                Total
              </span>
              <span className={s.configPrice} aria-live="polite">
                {BRL(price)}
              </span>
            </div>

            <Button
              variant="solid"
              size="lg"
              fullWidth
              magnetic
              iconAfter={<Icon name="shopping-bag" size={16} />}
              onClick={() =>
                add({
                  name: 'Maré 01',
                  frame: f.hex,
                  lens: l.css,
                  frameLabel: f.label,
                  lensLabel: l.label,
                  polarized: pol,
                  price,
                })
              }
            >
              Adicionar à sacola
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
