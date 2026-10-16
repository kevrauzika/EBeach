'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { modelById, type Model } from '@/lib/catalog';

/* Trivial, local state — no store needed. No prices: the bag only gathers models
   and quantities, and the order is closed on WhatsApp. */
export type BagItem = Model & { qty: number };

type BagApi = {
  items: BagItem[];
  /** Total pieces across all lines. */
  count: number;
  open: boolean;
  add: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  setOpen: (v: boolean) => void;
};

const Ctx = createContext<BagApi | null>(null);

export function BagProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<{ id: string; qty: number }[]>([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((id: string) => {
    setLines((b) =>
      b.some((l) => l.id === id) ? b.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l)) : [...b, { id, qty: 1 }],
    );
    setOpen(true);
  }, []);

  const remove = useCallback((id: string) => setLines((b) => b.filter((l) => l.id !== id)), []);

  const setQty = useCallback(
    (id: string, qty: number) =>
      setLines((b) => (qty < 1 ? b.filter((l) => l.id !== id) : b.map((l) => (l.id === id ? { ...l, qty } : l)))),
    [],
  );

  const value = useMemo<BagApi>(() => {
    const items = lines.flatMap((l) => {
      const m = modelById(l.id);
      return m ? [{ ...m, qty: l.qty }] : [];
    });
    return { items, count: items.reduce((n, i) => n + i.qty, 0), open, add, setQty, remove, setOpen };
  }, [lines, open, add, setQty, remove]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useBag() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useBag must be used inside <BagProvider>');
  return ctx;
}
