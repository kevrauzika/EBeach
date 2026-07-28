import * as React from 'react';
/** Numbered section eyebrow: 01 — MANIFESTO */
export interface SectionLabelProps {
  /** Section number; rendered zero-padded in sun orange. */
  index?: number;
  children?: React.ReactNode;
  onDark?: boolean;
}
export declare function SectionLabel(props: SectionLabelProps): JSX.Element;
