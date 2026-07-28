/* The E-BEACH wordmark. Ink on sand/light, foam on sea/abyssal.
   Never recoloured, gradient-filled, distorted, rotated or outlined.
   Source files are raster (the brand has not supplied vector yet). */

const SRC = {
  ink: { full: { src: '/assets/logo-ink.png', w: 939, h: 209 }, mark: { src: '/assets/mark-ink.png', w: 203, h: 209 } },
  foam: { full: { src: '/assets/logo-foam.png', w: 939, h: 210 }, mark: { src: '/assets/mark-foam.png', w: 203, h: 210 } },
} as const;

export type LogoProps = {
  tone?: 'ink' | 'foam';
  variant?: 'full' | 'mark';
  height?: number;
  alt?: string;
  priority?: boolean;
};

export function Logo({ tone = 'ink', variant = 'full', height = 28, alt = 'E-BEACH', priority = false }: LogoProps) {
  const f = SRC[tone][variant];
  return (
    // eslint-disable-next-line @next/next/no-img-element -- fixed-height raster lockup, no responsive sizes needed
    <img
      src={f.src}
      alt={alt}
      width={f.w}
      height={f.h}
      draggable={false}
      fetchPriority={priority ? 'high' : undefined}
      style={{ height, width: 'auto', display: 'block', userSelect: 'none' }}
    />
  );
}
