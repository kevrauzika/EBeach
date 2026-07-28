/** Global grain film — the brand's tactile "sand" layer. */
export interface GrainOverlayProps {
  /** Keep between 0.03 and 0.06. Above that it reads as noise, not texture. */
  opacity?: number;
  blend?: 'multiply' | 'overlay' | 'soft-light';
}
export declare function GrainOverlay(props: GrainOverlayProps): JSX.Element;
