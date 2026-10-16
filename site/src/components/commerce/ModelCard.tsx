import type { Model } from '@/lib/catalog';
import s from './model.module.css';

export type ModelCardProps = {
  model: Model;
  index?: number;
  /** Opens the showcase on this model. */
  onSelect?: (id: string) => void;
};

/** One model in the collection rail. Flat, per the brand card: cut-out on a sand
    field at 14px, a hairline, text below — no border, no shadow. */
export function ModelCard({ model, index, onSelect }: ModelCardProps) {
  return (
    <article className={s.card}>
      <div className={s.field}>
        {/* eslint-disable-next-line @next/next/no-img-element -- transparent cut-out, contained in a fixed field */}
        <img className={s.image} src={model.image} alt={`Óculos E-BEACH ${model.name}`} loading="lazy" draggable={false} />
      </div>
      <div className={s.body}>
        <div className={s.eyebrow}>
          {index != null && <span className={s.index}>{String(index).padStart(2, '0')}</span>}
          <span aria-hidden="true" className={s.rule} />
          <span>Linha {model.line}</span>
        </div>
        <h3 className={s.title}>{model.name}</h3>
        <p className={s.colors}>{model.colors}</p>
        <a className={s.link} href="#escolha" onClick={() => onSelect?.(model.id)}>
          Ver modelo
        </a>
      </div>
    </article>
  );
}
