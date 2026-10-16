import { Config } from '@remotion/cli/config';

// Hero reel goes straight onto the site: favour fidelity over render speed.
// JPEG at 100 is indistinguishable after the CRF 16 encode and needs ~¼ of PNG's
// temp disk (frames sit in %TEMP% until stitching).
Config.setVideoImageFormat('jpeg');
Config.setJpegQuality(100);
Config.setCodec('h264');
Config.setPixelFormat('yuv420p');
Config.setCrf(16);
Config.setX264Preset('slow');
Config.setColorSpace('bt709');
Config.setOverwriteOutput(true);
// GPU compositing (ANGLE). Headless Chrome defaults to software rendering, which is
// ~10× slower on this scene's blurs, blend modes and masks — same pixels either way.
Config.setChromiumOpenGlRenderer('angle');
