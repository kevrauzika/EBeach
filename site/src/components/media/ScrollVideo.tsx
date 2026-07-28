'use client';

import { useEffect, useRef, useState } from 'react';

/* The turntable clip is fetched as a Blob before it is mounted: an object URL is
   fully buffered and therefore seekable on any host, which is exactly what
   frame-accurate scrubbing needs. The file is ~460 KB, so this costs nothing. */
function useBlobVideo(src: string) {
  const [url, setUrl] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let dead = false;
    let made: string | null = null;

    fetch(src)
      .then((r) => (r.ok ? r.blob() : Promise.reject(r.status)))
      .then((b) => {
        if (dead) return;
        made = URL.createObjectURL(b);
        setUrl(made);
      })
      .catch(() => !dead && setFailed(true));

    return () => {
      dead = true;
      if (made) URL.revokeObjectURL(made);
    };
  }, [src]);

  return { url, failed, setFailed };
}

export type ScrollVideoProps = {
  /** 0..1 scroll progress, mapped onto the clip's timeline. */
  t: number;
  src: string;
  width?: number | string;
  /** The CROP WINDOW, not the clip's own ratio. */
  aspect?: string;
  /** Scales the source inside the window so baked-in letterboxing is clipped, never painted. */
  zoom?: number;
  offsetY?: number;
  blend?: React.CSSProperties['mixBlendMode'];
  fallback?: React.ReactNode;
};

export function ScrollVideo({
  t,
  src,
  width = 640,
  aspect = '1 / 1',
  zoom = 1.32,
  offsetY = 0,
  blend = 'multiply',
  fallback = null,
}: ScrollVideoProps) {
  const { url, failed, setFailed } = useBlobVideo(src);
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  // Some browsers stall silently instead of firing `error` (no H.264 decoder).
  // Give up after 8s so the photo fallback owns the frame outright.
  useEffect(() => {
    if (!url || ready) return;
    const id = setTimeout(() => {
      if (!ref.current || ref.current.readyState === 0) setFailed(true);
    }, 8000);
    return () => clearTimeout(id);
  }, [url, ready, setFailed]);

  useEffect(() => {
    const v = ref.current;
    if (!v || !ready) return;
    const d = v.duration;
    if (!d || !isFinite(d)) return;
    const target = Math.min(d - 0.02, Math.max(0, t * d));
    if (Math.abs(v.currentTime - target) > 0.008) v.currentTime = target;
  }, [t, ready]);

  if (failed) return <>{fallback}</>;

  return (
    <div style={{ width, aspectRatio: aspect, position: 'relative', overflow: 'hidden' }}>
      {!ready && fallback && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {fallback}
        </div>
      )}
      {url && (
        <video
          ref={ref}
          src={url}
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setReady(true)}
          onError={() => setFailed(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transform: `scale(${zoom}) translateY(${offsetY}%)`,
            transformOrigin: 'center',
            mixBlendMode: blend,
            opacity: ready ? 1 : 0,
            transition: 'opacity var(--dur-slow) var(--ease-tide)',
          }}
        />
      )}
    </div>
  );
}

export type LoopVideoProps = {
  src: string;
  poster?: string;
  style?: React.CSSProperties;
};

/** Ambient looping background plate. Streamed, not buffered — it is 12 MB. */
export function LoopVideo({ src, poster, style }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    ref.current?.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      style={style}
    />
  );
}
