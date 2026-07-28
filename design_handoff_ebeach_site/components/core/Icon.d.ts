/** Lucide glyph wrapper (intentional addition — the brand ships no icon set). */
export interface IconProps {
  /** Lucide icon name in kebab-case, e.g. "sun-medium". */
  name: string;
  size?: number;
  /** E-BEACH uses 1.5 throughout; do not vary per-icon. */
  strokeWidth?: number;
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
