/**
 * Tall collection panel for the horizontally-pinned collections rail.
 */
export interface CollectionCardProps {
  /** Collection name, rendered uppercase: MARÉ, DUNA, SOL POENTE, RECIFE. */
  title: string;
  index?: number;
  /** One or two sentences; revealed on hover. */
  blurb?: string;
  image?: string;
  accent?: string;
  onClick?: () => void;
}
export declare function CollectionCard(props: CollectionCardProps): JSX.Element;
