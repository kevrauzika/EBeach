// Renders a reel in chunks and joins them without re-encoding.
//
//   node render.mjs [CompositionId] [out.mp4]      (default: ModelReel → out/model-reel.mp4)
//
// - Bundles once and keeps one GPU-composited Chrome open across all chunks
//   (the CLI rebundles and relaunches per call).
// - Chunks start on slot boundaries, where the carousel is at rest, so the keyframe
//   that opens each chunk lands on the stillest frame.
// - Remotion's frame cache goes to ./.tmp: chunks keep peak temp disk to ~250 MB, and
//   OS temp cleanup (Storage Sense on a full disk) can't pull frames mid-stitch.
import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const tmp = resolve('.tmp');
Object.assign(process.env, { TMP: tmp, TEMP: tmp, TMPDIR: tmp });

const { bundle } = await import('@remotion/bundler');
const { openBrowser, renderMedia, selectComposition } = await import('@remotion/renderer');

const id = process.argv[2] ?? 'ModelReel';
const output = process.argv[3] ?? `out/${id === 'HeroReel' ? 'hero-reel' : 'model-reel'}.mp4`;
const SLOTS_PER_CHUNK = 2;

const started = Date.now();
const elapsed = () => `${((Date.now() - started) / 1000).toFixed(0)}s`;

rmSync(tmp, { recursive: true, force: true });
mkdirSync(tmp, { recursive: true });
mkdirSync('out', { recursive: true });

const serveUrl = await bundle({ entryPoint: resolve('src/index.ts') });
const chromiumOptions = { gl: 'angle' };
const browser = await openBrowser('chrome', { chromiumOptions });

try {
  const composition = await selectComposition({ serveUrl, id, puppeteerInstance: browser, chromiumOptions });
  const { slot } = composition.props.reel;
  const chunk = slot * SLOTS_PER_CHUNK;
  console.log(`${id}: ${composition.durationInFrames} frames @ ${composition.fps}fps, chunks of ${chunk}`);

  const parts = [];
  for (let start = 0; start < composition.durationInFrames; start += chunk) {
    const end = Math.min(start + chunk, composition.durationInFrames) - 1;
    const part = resolve(`out/.part-${start}.mp4`);
    let last = -1;
    await renderMedia({
      serveUrl,
      composition,
      puppeteerInstance: browser,
      chromiumOptions,
      outputLocation: part,
      frameRange: [start, end],
      codec: 'h264',
      crf: 16,
      x264Preset: 'slow',
      pixelFormat: 'yuv420p',
      colorSpace: 'bt709',
      imageFormat: 'jpeg',
      jpegQuality: 100,
      concurrency: 3,
      muted: true,
      overwrite: true,
      onProgress: ({ progress }) => {
        const pct = Math.floor(progress * 4) * 25;
        if (pct !== last) console.log(`  frames ${start}-${end}: ${(last = pct)}%`);
      },
    });
    // Remotion drops each chunk's frames itself; .tmp also holds the shared
    // browser's profile, which Windows keeps locked until the browser closes.
    parts.push(part);
    console.log(`  chunk ${start}-${end} done (${elapsed()})`);
  }

  const list = resolve('out/.parts.txt');
  writeFileSync(list, parts.map((p) => `file '${p.replace(/\\/g, '/')}'`).join('\n'));
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', list, '-c', 'copy', '-movflags', '+faststart', output], { stdio: 'inherit' });
  for (const p of [...parts, list]) rmSync(p);
  console.log(`${output} ready (${elapsed()})`);
} finally {
  await browser.close({ silent: true });
  try {
    rmSync(tmp, { recursive: true, force: true, maxRetries: 10, retryDelay: 500 });
  } catch {
    console.warn(`could not clear ${tmp} — safe to delete by hand`);
  }
}
