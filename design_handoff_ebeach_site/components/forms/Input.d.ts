import * as React from 'react';
/** Underline text field (newsletter, checkout). */
export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'tel' | 'password';
  /** Flip to foam-on-abyssal for the footer newsletter. */
  onDark?: boolean;
  hint?: string;
  error?: string;
  id?: string;
}
export declare function Input(props: InputProps): JSX.Element;
