/** Fixed sand-grain film over the whole viewport. Mounted once, at the root.
    A brand signature, not decoration — do not remove it. */
export function GrainOverlay({ opacity = 0.045, blend = 'multiply' as const }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        opacity,
        mixBlendMode: blend,
        backgroundImage: 'var(--grain-url)',
      }}
    />
  );
}
