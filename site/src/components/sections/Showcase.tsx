'use client';

import { SectionLabel } from '../core/SectionLabel';
import { Button } from '../core/Button';
import { Icon } from '../core/Icon';
import { IconButton } from '../core/IconButton';
import { useBag } from '../BagProvider';
import { useShowcase } from '../ShowcaseProvider';
import { MODELS } from '@/lib/catalog';
import s from './sections.module.css';

/* 04 — Pick a model, see it large, add it to the bag. No prices: the order is
   closed on WhatsApp, where values and delivery are confirmed. */
export function Showcase() {
  const { add } = useBag();
  const { selected, select } = useShowcase();
  const i = Math.max(0, MODELS.findIndex((m) => m.id === selected));
  const m = MODELS[i];
  const step = (d: number) => select(MODELS[(i + d + MODELS.length) % MODELS.length].id);

  return (
    <section id="escolha" className={s.show} aria-labelledby="show-title">
      <div className={s.wrap}>
        <SectionLabel index={4}>Escolha o seu</SectionLabel>

        <div className={s.showGrid}>
          <div className={s.showStage}>
            {/* Keyed so each change replays the settle-in. */}
            {/* eslint-disable-next-line @next/next/no-img-element -- transparent cut-out, contained in a fixed stage */}
            <img key={m.id} className={s.showImage} src={m.image} alt={`Óculos E-BEACH ${m.name}`} draggable={false} />
            <div className={s.showArrows}>
              <IconButton name="arrow-left" label="Modelo anterior" onClick={() => step(-1)} />
              <span className={s.showCount}>
                {String(i + 1).padStart(2, '0')} / {String(MODELS.length).padStart(2, '0')}
              </span>
              <IconButton name="arrow-right" label="Próximo modelo" onClick={() => step(1)} />
            </div>
          </div>

          <div>
            <div className={s.showLine}>Linha {m.line}</div>
            <h2 id="show-title" className={s.showTitle} aria-live="polite">
              {m.name}
            </h2>
            <p className={s.showColors}>{m.colors}</p>

            <div className={s.showPicker} role="radiogroup" aria-label="Modelos">
              {MODELS.map((x) => (
                <button
                  key={x.id}
                  type="button"
                  role="radio"
                  aria-checked={x.id === m.id}
                  className={s.showChip}
                  onClick={() => select(x.id)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- thumbnail of a cut-out */}
                  <img src={x.image} alt="" loading="lazy" draggable={false} />
                  <span>{x.name}</span>
                </button>
              ))}
            </div>

            <Button
              variant="solid"
              size="lg"
              fullWidth
              magnetic
              iconAfter={<Icon name="shopping-bag" size={16} />}
              onClick={() => add(m.id)}
            >
              Adicionar à sacola
            </Button>
            <p className={s.showNote}>
              Finalize pelo WhatsApp: valores, disponibilidade e entrega são confirmados no atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
