import * as React from 'react';

/**
 * E-BEACH primary action button.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual treatment. Use `solid` for the single primary CTA per view. */
  variant?: 'solid' | 'sea' | 'outline' | 'ghost' | 'onDark' | 'outlineDark';
  size?: 'sm' | 'md' | 'lg';
  /** Cursor-following nudge. Reserve for hero / final CTAs. */
  magnetic?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  as?: 'button' | 'a';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
  iconAfter?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
