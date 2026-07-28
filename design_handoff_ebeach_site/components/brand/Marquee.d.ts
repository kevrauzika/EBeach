import * as React from 'react';
/**
 * Infinite ticker.
 */
export interface MarqueeProps {
  items?: React.ReactNode[];
  /** Seconds per full loop. Higher = slower. Default 42 — deliberately calm. */
  speed?: number;
  separator?: string;
  onDark?: boolean;
  children?: React.ReactNode;
}
export declare function Marquee(props: MarqueeProps): JSX.Element;
