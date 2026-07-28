# E-BEACH — site institucional

Recriação em produção do handoff em `../design_handoff_ebeach_site`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Stack

Next.js 15 (App Router) · TypeScript · Lenis · lucide-react. Sem Tailwind: os tokens do
handoff são a fonte da verdade e são consumidos como CSS custom properties direto pelos
componentes. Layout de seção usa CSS Modules (media queries), primitivos usam inline
styles — porte literal do handoff, o `.d.ts` de lá é o contrato de props.

## Estrutura

```
src/
├── app/                    layout (metadata, preload de fontes) + page (composição)
├── styles/
│   ├── globals.css         único entry point — lista de @import + regras de site
│   └── tokens/             copiados do handoff, verbatim (ver "Tokens adicionados")
├── lib/
│   ├── scroll.ts           useScrollProgress / usePinProgress / useReducedMotion / useMedia
│   ├── catalog.ts          armações, lentes, coleções, anatomia, galeria, depoimentos
│   └── format.ts           BRL
└── components/
    ├── core/ forms/ brand/ commerce/    os 19 componentes do design system
    ├── media/              ScrollVideo, LoopVideo, ProductFlip, GlassesFigure, ProductRender
    ├── sections/           as 8 seções + sections.module.css
    ├── SiteHeader / BagDrawer / BagProvider / SmoothScroll
```

## Motion

Um único loop de `requestAnimationFrame` compartilhado (`lib/scroll.ts`), com
IntersectionObserver por seção — só as seções perto da viewport gastam frames. Todo
progresso é 0→1 e reversível; nada dispara uma vez. Cada seção também expõe `--p` no
próprio elemento, para quem preferir animar em CSS.

Lenis a `lerp: 0.085`, desligado sob `prefers-reduced-motion`. Sob reduced motion os
trilhos de 360vh/400vh colapsam para 100vh — sem pin, o trilho é só scroll morto — e as
coleções caem no carrossel de scroll-snap.

## Decisões que fogem do handoff

1. **Hero e anatomia usam `ProductFlip`, não o vídeo.** O `turntable.mp4` entregue é
   1280×720 com o produto num plate branco de 405px pillarboxed em preto (x 437→841). Com
   `mix-blend-mode: multiply` as barras viram retângulos preto sólido na página; o único
   recorte que mostra plate e nada mais deixa ~400px de fonte para preencher 1700px de
   hero, o que fica visivelmente mole. As fotos reais recortadas são nítidas e o flip
   scrubbed lê como o mesmo objeto girando. Quando o clipe novo chegar (quadrado, fundo
   branco sem costura), é uma linha: `TURNTABLE.enabled = true` em
   `components/media/ProductRender.tsx`.
2. **`GlassesFigure` foi redesenhado como SVG.** O esquema de retângulos arredondados do
   protótipo lia como máscara de natação. A silhueta agora é traçada sobre
   `ebeach-front.png` — wayfarer, brow reto, aro e lente recoloríveis de verdade. As
   lentes ganharam `stops` em `catalog.ts` (mesmo gradiente, em formato SVG).
3. **`assets/product/*-clean.png`.** Os recortes originais traziam o reflexo de estúdio
   queimado em branco *dentro* da máscara — apareciam como manchas brancas sob as lentes e
   nas pontas das hastes, sobre a areia. Fiz key do branco (min-channel ≥ 242) com rampa
   suave e feathering da borda, que era 100% hard-edge. Os originais seguem intactos ao
   lado.
4. **Fontes self-hosted** em `public/fonts` (7 woff2 da Fontshare), com preload das duas
   faces acima da dobra. Era item 3 dos "Known gaps".
5. **Sem Tailwind.** Os componentes leem custom properties direto; transpor para o theme
   do Tailwind só adicionaria uma camada de tradução.

## Tokens adicionados

Nada foi hardcoded: onde faltava valor, entrou token.

- `--sky-100`, `--sky-200` — o céu de meio-dia do hero, que só existia inline no gradiente.
- `--fs-wordmark`, `--tr-wordmark`, `--ws-wordmark` — o lockup do hero é maior que
  `display-xl`.
- `--ws-display-xl`, `--ws-display`, `--ws-title` — compensação de word-space. O tracking
  negativo encolhe o glifo de espaço também e soldava as manchetes ("ENCAREALUZ",
  "R$439"). Cada `--ws-*` acompanha seu `--tr-*`.

## Em aberto

- **Menu mobile.** Abaixo de 860px os 4 links do header saem de cena (sobram logo e
  sacola). O design system não tem drawer de navegação e o handoff não especifica — dá para
  fazer, só precisa de direção.
- **Imagens de coleção e galeria** ainda são os placeholders tonais.
- **Vetor do logo** — só veio raster (939×209).
- **Fotos por colorway** substituiriam o `GlassesFigure` por produto real no configurador.
- **Checkout e newsletter** não têm backend: o botão de finalizar não faz nada e o
  "Assinar" só troca o rótulo.
