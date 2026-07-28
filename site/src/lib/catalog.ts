/* Product + editorial data. This is the shape the commerce backend should return —
   swap the literals for a fetch and nothing above this file has to change. */

export type Frame = { value: string; label: string; swatch: string; hex: string };

export type Lens = {
  value: string;
  label: string;
  /** Chip fill — hex or CSS gradient. */
  swatch: string;
  /** CSS gradient, for anything painted with a background. */
  css: string;
  /** Same gradient as SVG stops, for the configurator render. */
  stops: { offset: number; color: string }[];
  /** Gradient direction in CSS degrees (0 = upward, 180 = downward). */
  angle: number;
  add: number;
};

export const BASE_PRICE = 389;

export const FRAMES: Frame[] = [
  { value: 'abissal', label: 'Abissal', swatch: '#06222D', hex: '#06222D' },
  { value: 'areia', label: 'Areia quente', swatch: '#E4C9A0', hex: '#E4C9A0' },
  { value: 'mar', label: 'Mar profundo', swatch: '#0E5C73', hex: '#0E5C73' },
  { value: 'tinta', label: 'Tinta', swatch: '#0A0A0A', hex: '#0A0A0A' },
];

export const LENSES: Lens[] = [
  {
    value: 'ambar',
    label: 'Âmbar',
    swatch: '#F5A623',
    css: 'linear-gradient(160deg,#FFC46B,#E0701F)',
    stops: [
      { offset: 0, color: '#FFC46B' },
      { offset: 1, color: '#E0701F' },
    ],
    angle: 160,
    add: 0,
  },
  {
    value: 'verde',
    label: 'Verde-mar',
    swatch: '#2AA7A0',
    css: 'linear-gradient(160deg,#7FD3CE,#0E5C73)',
    stops: [
      { offset: 0, color: '#7FD3CE' },
      { offset: 1, color: '#0E5C73' },
    ],
    angle: 160,
    add: 0,
  },
  {
    value: 'espelhada',
    label: 'Espelhada',
    swatch: 'linear-gradient(135deg,#7FD3CE,#F5A623)',
    css: 'linear-gradient(135deg,#BFE9EE,#F5A623 55%,#2AA7A0)',
    stops: [
      { offset: 0, color: '#BFE9EE' },
      { offset: 0.55, color: '#F5A623' },
      { offset: 1, color: '#2AA7A0' },
    ],
    angle: 135,
    add: 60,
  },
  {
    value: 'fume',
    label: 'Degradê fumê',
    swatch: 'linear-gradient(180deg,#5E635F,#E4C9A0)',
    css: 'linear-gradient(180deg,#2C2E2E,#CFAE7F)',
    stops: [
      { offset: 0, color: '#2C2E2E' },
      { offset: 1, color: '#CFAE7F' },
    ],
    angle: 180,
    add: 40,
  },
];

export const POLARIZED_ADD = 50;

export type Collection = { title: string; blurb: string; image: string };

export const COLLECTIONS: Collection[] = [
  {
    title: 'Maré',
    blurb: 'Acetato translúcido e lente verde-mar. Para quem entra na água antes do café.',
    image: '/assets/placeholders/sea-shallow.png',
  },
  {
    title: 'Duna',
    blurb: 'Armação areia quente, lente âmbar. Luz seca, vento de terra.',
    image: '/assets/placeholders/dune.png',
  },
  {
    title: 'Sol poente',
    blurb: 'Degradê fumê sobre acetato âmbar. A última hora de luz.',
    image: '/assets/placeholders/sunset.png',
  },
  {
    title: 'Recife',
    blurb: 'Abissal com lente espelhada. Feita para o reflexo mais duro.',
    image: '/assets/placeholders/reef.png',
  },
];

export type Part = {
  at: number;
  side: 'left' | 'right';
  top: string;
  /** Below 900px the product fills the middle band, so labels move clear of it. */
  topMobile: string;
  title: string;
  body: string;
};

export const PARTS: Part[] = [
  { at: 0.05, side: 'left', top: '26%', topMobile: '19%', title: 'Lente polarizada UV400', body: 'Espelhada, com filtro de 100% dos raios UVA/UVB e corte de reflexo na água.' },
  { at: 0.30, side: 'right', top: '42%', topMobile: '70%', title: 'Haste em acetato', body: 'Acetato italiano prensado, degradê preto → cristal, polido à mão.' },
  { at: 0.55, side: 'left', top: '60%', topMobile: '81%', title: 'Dobradiça flex', body: 'Cinco barras em aço inox 316L, testada em 20 mil ciclos.' },
  { at: 0.78, side: 'right', top: '20%', topMobile: '30%', title: 'Ponte 18 mm', body: 'Apoio nasal ajustado ao rosto brasileiro.' },
];

export const GALLERY = [
  { src: '/assets/placeholders/sand.png', speed: 0.10, col: '1 / 5', ratio: '3 / 4', label: 'Ubatuba, 07h' },
  { src: '/assets/placeholders/sea-shallow.png', speed: 0.26, col: '5 / 9', ratio: '1 / 1', label: 'Itacaré' },
  { src: '/assets/placeholders/sunset.png', speed: 0.04, col: '9 / 13', ratio: '4 / 5', label: 'Jericoacoara' },
  { src: '/assets/placeholders/reef.png', speed: 0.20, col: '2 / 7', ratio: '16 / 10', label: 'Fernando de Noronha' },
  { src: '/assets/placeholders/dune.png', speed: 0.34, col: '8 / 12', ratio: '3 / 4', label: 'Genipabu' },
];

export const QUOTES: [string, string][] = [
  ['"Aguenta um dia inteiro de sol sem escorregar."', 'Camila R. — Ubatuba'],
  ['"A lente verde-mar mudou o jeito que eu vejo a água."', 'Téo M. — Itacaré'],
  ['"Levei pro mar aberto por seis meses. Zero risco."', 'Ana P. — Búzios'],
  ['"Leve a ponto de esquecer que está usando."', 'Rafa L. — Florianópolis'],
];

export const MANIFESTO =
  'O sal marca. A luz insiste. O horizonte não pede licença. Fizemos um óculos para quem encara os três de frente, todo dia, sem apertar os olhos.';
