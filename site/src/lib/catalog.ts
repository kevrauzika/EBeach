/* Product + editorial data. This is the shape the commerce backend should return —
   swap the literals for a fetch and nothing above this file has to change.

   No prices and no technical claims on purpose: orders close over WhatsApp, where
   the team confirms values, stock and delivery. Colour notes are read off the
   product photos. */

export type Line = 'Sport' | 'Casual';

export type Model = {
  id: string;
  name: string;
  line: Line;
  /** Frame and lens colours as seen in the photo — sent along with the order. */
  colors: string;
  image: string;
};

export const MODELS: Model[] = [
  { id: 'sport-n1', name: 'Sport N1', line: 'Sport', colors: 'Armação preta com ponteiras azuis, lente azul', image: '/assets/modelos/sport-n1.webp' },
  { id: 'sport-n2', name: 'Sport N2', line: 'Sport', colors: 'Armação preta, lente vermelha', image: '/assets/modelos/sport-n2.webp' },
  { id: 'sport-n3', name: 'Sport N3', line: 'Sport', colors: 'Armação preta com ponteiras vermelhas, lente laranja', image: '/assets/modelos/sport-n3.webp' },
  { id: 'sport-n4', name: 'Sport N4', line: 'Sport', colors: 'Armação preta, lente dourada', image: '/assets/modelos/sport-n4.webp' },
  { id: 'casual-n1', name: 'Casual N1', line: 'Casual', colors: 'Armação preta em degradê, lente verde', image: '/assets/modelos/casual-n1.webp' },
  { id: 'casual-n2', name: 'Casual N2', line: 'Casual', colors: 'Armação verde, lente verde', image: '/assets/modelos/casual-n2.webp' },
  { id: 'sport-p1', name: 'Sport P1', line: 'Sport', colors: 'Armação amarela com detalhe verde, lente azul', image: '/assets/modelos/sport-p1.webp' },
];

export const modelById = (id: string) => MODELS.find((m) => m.id === id);

/** Orders are finished by a person on WhatsApp: digits only, country + area code. */
export const WHATSAPP_NUMBER = '5512981898755';

export const MANIFESTO =
  'O sal marca. A luz insiste. O horizonte não pede licença. Fizemos um óculos para quem encara os três de frente, todo dia, sem apertar os olhos.';
