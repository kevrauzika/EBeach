import { WHATSAPP_NUMBER } from './catalog';

export type OrderLine = { name: string; line: string; colors: string; qty: number };

/** The message the shopper sends to close the order — one line per model. */
export function orderMessage(lines: OrderLine[]) {
  const pieces = lines.reduce((n, l) => n + l.qty, 0);
  return [
    'Olá! Quero fazer um pedido pelo site da E-BEACH:',
    '',
    ...lines.map((l) => `• ${l.qty}× ${l.name} (Linha ${l.line}) — ${l.colors}`),
    '',
    `Total: ${pieces} ${pieces === 1 ? 'peça' : 'peças'}.`,
    'Pode me passar valores e prazo de entrega?',
  ].join('\n');
}

export const whatsappUrl = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
