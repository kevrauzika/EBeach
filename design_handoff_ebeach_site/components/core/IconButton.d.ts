import * as React from 'react';
/** Circular icon-only control. */
export interface IconButtonProps {
  /** Lucide icon name, e.g. "arrow-right". */
  name: string;
  /** Accessible label — required, the button has no text. */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'ink' | 'foam' | 'sun';
  onClick?: (e: React.MouseEvent) => void;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
