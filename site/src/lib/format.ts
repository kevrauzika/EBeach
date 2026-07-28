/** Prices are always written R$ 389 — space after the symbol, pt-BR grouping. */
export const BRL = (n: number) => `R$ ${n.toLocaleString('pt-BR')}`;
