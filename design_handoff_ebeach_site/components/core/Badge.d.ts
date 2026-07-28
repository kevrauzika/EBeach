import * as React from 'react';
/** Status flag on product imagery and cards. */
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'sun' | 'sea' | 'sand' | 'deep' | 'outline';
}
export declare function Badge(props: BadgeProps): JSX.Element;
