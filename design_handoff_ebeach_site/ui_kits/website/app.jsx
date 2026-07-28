const { GrainOverlay } = window.EBEACHDesignSystem_3fff58;

function App() {
  const [bag, setBag] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const els = document.querySelectorAll('[data-dark-section]');
      let d = false;
      els.forEach((el) => { const r = el.getBoundingClientRect(); if (r.top <= 40 && r.bottom >= 40) d = true; });
      setDark(d);
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const add = (item) => { setBag((b) => [...b, item]); setOpen(true); };

  return (
    <>
      <SiteHeader dark={dark} bagCount={bag.length} onBag={() => setOpen(true)} />
      <Hero />
      <Manifesto />
      <Anatomy />
      <div data-dark-section><Collections /></div>
      <Configurator onAdd={add} />
      <Gallery />
      <Proof />
      <div data-dark-section><SiteFooter /></div>
      <BagDrawer open={open} items={bag} onClose={() => setOpen(false)} onRemove={(i) => setBag((b) => b.filter((_, j) => j !== i))} />
      <GrainOverlay />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
