'use client';

import { useEffect } from 'react';
import { Button } from './core/Button';
import { IconButton } from './core/IconButton';
import { useBag } from './BagProvider';
import { BRL } from '@/lib/format';
import s from './header.module.css';

export function BagDrawer() {
  const { items, open, setOpen, remove, total } = useBag();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, setOpen]);

  return (
    <>
      <div
        className={s.scrim}
        onClick={() => setOpen(false)}
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}
        aria-hidden="true"
      />
      <aside
        className={`on-dark ${s.drawer}`}
        aria-label="Sua sacola"
        aria-hidden={!open}
        style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className={s.drawerHead}>
          <span className={s.drawerLabel}>Sua sacola</span>
          <IconButton name="x" label="Fechar sacola" tone="foam" size="sm" onClick={() => setOpen(false)} />
        </div>

        <div className={s.drawerList}>
          {items.length === 0 && (
            <p style={{ color: 'var(--text-on-dark-muted)' }}>Ainda vazia. Monte o seu no configurador.</p>
          )}
          {items.map((it, i) => (
            <div key={i} className={s.line}>
              <div className={s.lineSwatch} style={{ background: it.lens, border: `2px solid ${it.frame}` }} />
              <div style={{ flex: 1 }}>
                <div className={s.lineName}>{it.name}</div>
                <div className={s.lineMeta}>
                  {it.frameLabel} · {it.lensLabel}
                  {it.polarized ? ' · Polarizada' : ''}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 'var(--fs-body-s)' }}>{BRL(it.price)}</div>
                <button type="button" className={s.remove} onClick={() => remove(i)}>
                  remover
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={s.drawerFoot}>
          <div className={s.drawerTotal}>
            <span style={{ color: 'var(--text-on-dark-muted)' }}>Total</span>
            <span className={s.drawerTotalValue}>{BRL(total)}</span>
          </div>
          <Button variant="solid" size="lg" fullWidth disabled={items.length === 0}>
            Finalizar compra
          </Button>
        </div>
      </aside>
    </>
  );
}
