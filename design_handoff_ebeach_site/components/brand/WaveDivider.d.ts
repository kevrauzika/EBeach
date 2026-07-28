/** Looping wave seam. */
export interface WaveDividerProps {
  /** Colour of the section BELOW the seam. */
  fill?: string;
  height?: number;
  /** Seconds per loop. */
  speed?: number;
  flip?: boolean;
}
export declare function WaveDivider(props: WaveDividerProps): JSX.Element;
