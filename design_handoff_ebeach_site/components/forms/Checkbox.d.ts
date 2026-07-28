import * as React from 'react';
/** Consent / option checkbox. */
export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  onDark?: boolean;
  id?: string;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
