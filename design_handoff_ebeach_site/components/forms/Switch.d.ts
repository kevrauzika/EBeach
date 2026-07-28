/** Pill toggle. */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  onDark?: boolean;
  id?: string;
}
export declare function Switch(props: SwitchProps): JSX.Element;
