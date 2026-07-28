// Shared scroll utilities. Everything is progress-driven, nothing fires once.
function useScrollProgress(ref, { start = 'top bottom', } = {}) {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const tick = () => {
      const el = ref.current;
      if (el) {
        const r = el.getBoundingClientRect();
        const total = r.height + window.innerHeight;
        const v = 1 - (r.bottom / total);
        setP(Math.min(1, Math.max(0, v)));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ref]);
  return p;
}

// Progress through a pinned/sticky section: 0 when its top hits the viewport top, 1 at its end.
function usePinProgress(ref) {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const tick = () => {
      const el = ref.current;
      if (el) {
        const r = el.getBoundingClientRect();
        const span = Math.max(1, r.height - window.innerHeight);
        setP(Math.min(1, Math.max(0, -r.top / span)));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ref]);
  return p;
}

function useReducedMotion() {
  const [r, setR] = React.useState(false);
  React.useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    const h = () => setR(m.matches); h();
    m.addEventListener('change', h); return () => m.removeEventListener('change', h);
  }, []);
  return r;
}

const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const range = (p, a, b) => clamp01((p - a) / (b - a));
const BRL = (n) => 'R$ ' + n.toLocaleString('pt-BR');

Object.assign(window, { useScrollProgress, usePinProgress, useReducedMotion, lerp, clamp01, range, BRL });
