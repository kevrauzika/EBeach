import * as React from 'react';
/** Spec table row (material, lens, UV rating). */
export interface SpecRowProps {
  /** Uppercase label, e.g. "Lente". */
  term: string;
  value?: React.ReactNode;
  onDark?: boolean;
}
export declare function SpecRow(props: SpecRowProps): JSX.Element;
