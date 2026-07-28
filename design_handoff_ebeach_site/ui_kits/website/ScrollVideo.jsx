// Scroll-scrubbed <video>. The clip is fetched as a Blob first: the project server
// answers without Range support, so a plain src= stalls — an object URL is fully
// buffered and seekable, which is exactly what scrubbing needs.
function useBlobVideo(src) {
  const [url, setUrl] = React.useState(null);
  const [failed, setFailed] = React.useState(false);
  React.useEffect(() => {
    let dead = false, made = null;
    fetch(encodeURI(src))
      .then((r) => (r.ok ? r.blob() : Promise.reject(r.status)))
      .then((b) => { if (dead) return; made = URL.createObjectURL(b); setUrl(made); })
      .catch(() => !dead && setFailed(true));
    return () => { dead = true; if (made) URL.revokeObjectURL(made); };
  }, [src]);
  return { url, failed, setFailed };
}

// t: 0..1 scroll progress mapped onto the clip's timeline.
// aspect = the CROP WINDOW, not the clip's own ratio. The source is drawn with
// object-fit:cover and scaled by `zoom`, so any letterbox baked into the file is
// pushed outside the window and clipped — never painted (black bars + multiply
// blend would otherwise stamp solid black rectangles onto the page).
function ScrollVideo({ t = 0, src, width = 640, aspect = '1 / 1', zoom = 1.32, offsetY = 0, blend = 'multiply', fallback = null }) {
  const { url, failed, setFailed } = useBlobVideo(src);
  const ref = React.useRef(null);
  const [ready, setReady] = React.useState(false);

  // Some browsers stall silently instead of firing `error` (no H.264 decoder).
  // Give up after 8s so the photo fallback owns the frame outright.
  React.useEffect(() => {
    if (!url || ready) return;
    const id = setTimeout(() => { if (!ref.current || ref.current.readyState === 0) setFailed(true); }, 8000);
    return () => clearTimeout(id);
  }, [url, ready]);

  React.useEffect(() => {
    const v = ref.current;
    if (!v || !ready) return;
    const d = v.duration;
    if (!d || !isFinite(d)) return;
    const target = Math.min(d - 0.02, Math.max(0, t * d));
    if (Math.abs(v.currentTime - target) > 0.008) v.currentTime = target;
  }, [t, ready]);

  if (failed) return fallback;

  return (
    <div style={{ width, aspectRatio: aspect, position: 'relative', overflow: 'hidden' }}>
      {!ready && fallback && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{fallback}</div>
      )}
      {url && (
        <video
          ref={ref} src={url} muted playsInline preload="auto"
          onLoadedData={() => setReady(true)}
          onError={() => setFailed(true)}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: `scale(${zoom}) translateY(${offsetY}%)`, transformOrigin: 'center',
            mixBlendMode: blend, opacity: ready ? 1 : 0,
            transition: 'opacity var(--dur-slow) var(--ease-tide)'
          }}
        />
      )}
    </div>
  );
}

// Ambient looping background clip (beach plate).
function LoopVideo({ src, style, poster }) {
  const { url, failed } = useBlobVideo(src);
  const ref = React.useRef(null);
  React.useEffect(() => { const v = ref.current; if (v && url) v.play().catch(() => {}); }, [url]);
  if (failed || !url) return null;
  return <video ref={ref} src={url} poster={poster} muted loop playsInline preload="auto" style={style} />;
}

Object.assign(window, { ScrollVideo, LoopVideo, useBlobVideo });
