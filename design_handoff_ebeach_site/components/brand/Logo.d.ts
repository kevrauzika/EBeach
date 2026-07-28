/**
 * The E-BEACH logo lockup.
 */
export interface LogoProps {
  /** `ink` on sand/light, `foam` on sea/abyssal. */
  tone?: 'ink' | 'foam';
  /** `full` = mark + wordmark; `mark` = the swoosh alone (favicon, small spaces). */
  variant?: 'full' | 'mark';
  /** Rendered height in px. Minimum 20px for `full`. */
  height?: number;
  /** Path prefix to the design-system root, e.g. "../.." */
  base?: string;
  alt?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
