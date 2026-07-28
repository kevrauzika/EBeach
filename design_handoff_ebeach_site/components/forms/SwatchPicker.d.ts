/**
 * Frame / lens colour chooser.
 */
export interface SwatchOption { value: string; label: string; /** any CSS background — solid or gradient for mirrored lenses */ swatch: string }
export interface SwatchPickerProps {
  label?: string;
  options?: SwatchOption[];
  value?: string;
  onChange?: (value: string) => void;
  onDark?: boolean;
  size?: number;
}
export declare function SwatchPicker(props: SwatchPickerProps): JSX.Element;
