'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

/* Trivial, local state — no store needed. This is the shape the checkout
   endpoint should receive. */
export type BagItem = {
  name: string;
  frame: string;
  lens: string;
  frameLabel: string;
  lensLabel: string;
  polarized: boolean;
  price: number;
};

type BagApi = {
  items: BagItem[];
  open: boolean;
  add: (item: BagItem) => void;
  remove: (index: number) => void;
  setOpen: (v: boolean) => void;
  total: number;
};

const Ctx = createContext<BagApi | null>(null);

export function BagProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<BagItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((item: BagItem) => {
    setItems((b) => [...b, item]);
    setOpen(true);
  }, []);

  const remove = useCallback((index: number) => {
    setItems((b) => b.filter((_, i) => i !== index));
  }, []);

  const value = useMemo<BagApi>(
    () => ({ items, open, add, remove, setOpen, total: items.reduce((s, i) => s + i.price, 0) }),
    [items, open, add, remove],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useBag() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useBag must be used inside <BagProvider>');
  return ctx;
}
