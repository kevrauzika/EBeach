'use client';

import { useEffect, useState } from 'react';
import { Logo } from './brand/Logo';
import { useBag } from './BagProvider';
import s from './header.module.css';

const LINKS: [string, string][] = [
  ['Coleção', '#colecoes'],
  ['Escolha o seu', '#escolha'],
];

/** Is whatever sits under the header right now a dark surface? */
function useDarkBeneath() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const probe = () => {
      let hit = false;
      document.querySelectorAll('[data-dark-section]').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= 40 && r.bottom >= 40) hit = true;
      });
      setDark(hit);
    };
    probe();
    window.addEventListener('scroll', probe, { passive: true });
    window.addEventListener('resize', probe);

    // Sections can declare themselves dark after mount (the collection rail swaps
    // layouts by breakpoint), so watch the attribute itself, not just scroll.
    const mo = new MutationObserver(probe);
    mo.observe(document.body, { subtree: true, attributes: true, attributeFilter: ['data-dark-section'] });

    return () => {
      mo.disconnect();
      window.removeEventListener('scroll', probe);
      window.removeEventListener('resize', probe);
    };
  }, []);

  return dark;
}

/** The only fixed element on the site. */
export function SiteHeader() {
  const dark = useDarkBeneath();
  const { count, setOpen } = useBag();

  return (
    <header className={s.header} style={{ color: dark ? 'var(--text-on-dark)' : 'var(--text-strong)' }}>
      <div
        aria-hidden="true"
        className={s.protection}
        style={{
          background: dark
            ? 'linear-gradient(180deg, rgba(6,34,45,0.55) 0%, rgba(6,34,45,0) 100%)'
            : 'linear-gradient(180deg, rgba(245,233,215,0.72) 0%, rgba(245,233,215,0) 100%)',
        }}
      />

      <a href="#inicio" className={s.brand} aria-label="E-BEACH, início">
        <Logo tone={dark ? 'foam' : 'ink'} height={22} priority />
      </a>

      <nav className={s.nav} aria-label="Seções">
        {LINKS.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>

      <button type="button" className={s.bag} onClick={() => setOpen(true)}>
        Sacola
        <span className={s.count} aria-label={`${count} ${count === 1 ? 'peça' : 'peças'} na sacola`}>
          {count}
        </span>
      </button>
    </header>
  );
}
