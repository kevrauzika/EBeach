import * as React from 'react';
/** Filter chip — collection and lens filters. */
export interface TagProps {
  children?: React.ReactNode;
  active?: boolean;
  onDark?: boolean;
  onClick?: () => void;
}
export declare function Tag(props: TagProps): JSX.Element;
