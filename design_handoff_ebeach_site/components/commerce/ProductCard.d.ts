/**
 * Product tile used in listings and related-product rails.
 */
export interface ProductCardProps {
  name: string;
  subtitle?: string;
  /** Pre-formatted, e.g. "R$ 389". */
  price?: string;
  image?: string;
  /** Short uppercase flag, e.g. "Novo". */
  badge?: string;
  tone?: 'sand' | 'deep';
  onClick?: () => void;
}
export declare function ProductCard(props: ProductCardProps): JSX.Element;
