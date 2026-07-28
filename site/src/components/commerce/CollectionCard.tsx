import s from './collection.module.css';

export type CollectionCardProps = {
  title: string;
  index?: number;
  blurb: string;
  image?: string;
  href?: string;
};

/** Tall editorial panel for a collection. Flat: image field, scrim, no shadow. */
export function CollectionCard({ title, index, blurb, image, href = '#colecoes' }: CollectionCardProps) {
  return (
    <article className={s.card}>
      {image && (
        // eslint-disable-next-line @next/next/no-img-element -- placeholder art direction, swapped later
        <img className={s.image} src={image} alt="" loading="lazy" />
      )}
      <div aria-hidden="true" className={s.scrim} />
      <div className={s.body}>
        {index != null && <span className={s.index}>{String(index).padStart(2, '0')}</span>}
        <h3 className={s.title}>{title}</h3>
        <div className={s.reveal}>
          <div className={s.revealInner}>
            <p className={s.blurb}>{blurb}</p>
            <a className={s.link} href={href}>
              Ver coleção
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
