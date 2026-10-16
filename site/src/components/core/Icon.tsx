import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Check,
  X,
  ShoppingBag,
  Plus,
  Minus,
  type LucideProps,
} from 'lucide-react';

/* Lucide, pinned to the brand's 1.5 stroke weight so nothing drifts.
   The brand ships no glyph set — see BRAND.md › Iconography.
   Registry is explicit: only these glyphs are sanctioned (plus/minus for the bag's
   quantity stepper). */
const GLYPHS = {
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'chevron-down': ChevronDown,
  check: Check,
  x: X,
  'shopping-bag': ShoppingBag,
  plus: Plus,
  minus: Minus,
} as const;

export type IconName = keyof typeof GLYPHS;

export type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  style?: React.CSSProperties;
};

export function Icon({ name, size = 18, strokeWidth = 1.5, style }: IconProps) {
  const Glyph = GLYPHS[name] as React.ComponentType<LucideProps>;
  return (
    <Glyph
      aria-hidden="true"
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      color="currentColor"
      style={{ display: 'block', flex: '0 0 auto', ...style }}
    />
  );
}
