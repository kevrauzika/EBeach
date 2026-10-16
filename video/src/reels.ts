import { makeReel } from './timing';

/* The first cut: four pairs, no captions (2.4s hold + 1.1s hand-off). */
export const HERO = makeReel(
  [
    { id: 'laranja', src: 'glasses/laranja.png', glow: '#FF8A3D' },
    { id: 'branco', src: 'glasses/branco.png', glow: '#FFC46B' },
    { id: 'preto', src: 'glasses/preto.png', glow: '#2AA7A0' },
    { id: 'amarelo', src: 'glasses/amarelo.png', glow: '#F5A623' },
  ],
  144,
  66,
);

/* The full line, each pair captioned (2s hold + 1s hand-off → 21s loop).
   Names follow the supplied file names; "casualn2" is read as Casual N2. */
export const MODELS = makeReel(
  [
    { id: 'sport-n1', src: 'modelos/sport-n1.png', glow: '#2AA7A0', name: 'Sport N1', line: 'Linha Sport' },
    { id: 'sport-n2', src: 'modelos/sport-n2.png', glow: '#FF8A3D', name: 'Sport N2', line: 'Linha Sport' },
    { id: 'sport-n3', src: 'modelos/sport-n3.png', glow: '#F5A623', name: 'Sport N3', line: 'Linha Sport' },
    { id: 'sport-n4', src: 'modelos/sport-n4.png', glow: '#FFC46B', name: 'Sport N4', line: 'Linha Sport' },
    { id: 'casual-n1', src: 'modelos/casual-n1.png', glow: '#7FD3CE', name: 'Casual N1', line: 'Linha Casual' },
    { id: 'casual-n2', src: 'modelos/casual-n2.png', glow: '#2AA7A0', name: 'Casual N2', line: 'Linha Casual' },
    { id: 'sport-p1', src: 'modelos/sport-p1.png', glow: '#F5A623', name: 'Sport P1', line: 'Linha Sport' },
  ],
  120,
  60,
);
