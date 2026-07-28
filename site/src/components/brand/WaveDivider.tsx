import s from './brand.module.css';

const D = 'M0,40 C160,90 320,0 480,40 C640,80 800,10 960,40 C1120,70 1280,20 1440,40 L1440,120 L0,120 Z';

export type WaveDividerProps = {
  fill?: string;
  height?: number;
  /** Seconds for one full pass. */
  speed?: number;
  flip?: boolean;
};

/** Animated wave seam between a light section and the abyssal footer. */
export function WaveDivider({ fill = 'var(--sea-900)', height = 90, speed = 14, flip = false }: WaveDividerProps) {
  return (
    <div aria-hidden="true" style={{ lineHeight: 0, transform: flip ? 'scaleY(-1)' : undefined }}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height }}>
        <g className={s.waveGroup} style={{ ['--wave-speed' as string]: `${speed}s` }}>
          <path d={D} fill={fill} />
          <path d={D} fill={fill} transform="translate(1440,0)" />
        </g>
      </svg>
    </div>
  );
}
