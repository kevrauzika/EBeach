'use client';

import { useEffect } from 'react';
import { Button } from './core/Button';
import { IconButton } from './core/IconButton';
import { useBag } from './BagProvider';
import { orderMessage, whatsappUrl } from '@/lib/whatsapp';
import s from './header.module.css';

export function BagDrawer() {
  const { items, count, open, setOpen, setQty, remove } = useBag();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, setOpen]);

  const checkout = () => {
    window.open(whatsappUrl(orderMessage(items)), '_blank', 'noopener');
  };

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
            <p style={{ color: 'var(--text-on-dark-muted)' }}>Ainda vazia. Escolha um modelo na vitrine.</p>
          )}
          {items.map((it) => (
            <div key={it.id} className={s.line}>
              <div className={s.lineThumb}>
                {/* eslint-disable-next-line @next/next/no-img-element -- small cut-out, fixed box */}
                <img src={it.image} alt="" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className={s.lineName}>{it.name}</div>
                <div className={s.lineMeta}>
                  Linha {it.line} · {it.colors}
                </div>
                <div className={s.lineActions}>
                  <div className={s.stepper} role="group" aria-label={`Quantidade de ${it.name}`}>
                    <IconButton name="minus" label="Diminuir" tone="foam" size="sm" onClick={() => setQty(it.id, it.qty - 1)} />
                    <span className={s.qty} aria-live="polite">
                      {it.qty}
                    </span>
                    <IconButton name="plus" label="Aumentar" tone="foam" size="sm" onClick={() => setQty(it.id, it.qty + 1)} />
                  </div>
                  <button type="button" className={s.remove} onClick={() => remove(it.id)}>
                    remover
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={s.drawerFoot}>
          <div className={s.drawerTotal}>
            <span style={{ color: 'var(--text-on-dark-muted)' }}>Peças</span>
            <span className={s.drawerTotalValue}>{count}</span>
          </div>
          <Button variant="solid" size="lg" fullWidth disabled={items.length === 0} onClick={checkout}>
            Finalizar pelo WhatsApp
          </Button>
          <p className={s.drawerNote}>
            Abrimos o WhatsApp com o seu pedido pronto. Valores, disponibilidade e entrega são confirmados no
            atendimento.
          </p>
        </div>
      </aside>
    </>
  );
}
