import { Composition } from 'remotion';
import { ReelVideo } from './HeroReel';
import { HERO, MODELS } from './reels';
import { FPS, H, W } from './timing';

export const Root = () => (
  <>
    <Composition id="HeroReel" component={ReelVideo} defaultProps={{ reel: HERO }} durationInFrames={HERO.total} fps={FPS} width={W} height={H} />
    <Composition id="ModelReel" component={ReelVideo} defaultProps={{ reel: MODELS }} durationInFrames={MODELS.total} fps={FPS} width={W} height={H} />
  </>
);
