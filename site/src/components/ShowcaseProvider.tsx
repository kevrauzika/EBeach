'use client';

import { createContext, useContext, useState } from 'react';
import { MODELS } from '@/lib/catalog';

/* Which model the "Escolha o seu" showcase is presenting. Lifted out so a card in
   the collection rail can open the showcase on its own model. */
type ShowcaseApi = { selected: string; select: (id: string) => void };

const Ctx = createContext<ShowcaseApi | null>(null);

export function ShowcaseProvider({ children }: { children: React.ReactNode }) {
  const [selected, select] = useState(MODELS[0].id);
  return <Ctx.Provider value={{ selected, select }}>{children}</Ctx.Provider>;
}

export function useShowcase() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useShowcase must be used inside <ShowcaseProvider>');
  return ctx;
}
