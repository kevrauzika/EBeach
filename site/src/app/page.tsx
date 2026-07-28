import { BagProvider } from '@/components/BagProvider';
import { BagDrawer } from '@/components/BagDrawer';
import { SiteHeader } from '@/components/SiteHeader';
import { SmoothScroll } from '@/components/SmoothScroll';
import { GrainOverlay } from '@/components/brand/GrainOverlay';
import { Hero } from '@/components/sections/Hero';
import { Manifesto } from '@/components/sections/Manifesto';
import { Anatomy } from '@/components/sections/Anatomy';
import { Collections } from '@/components/sections/Collections';
import { Configurator } from '@/components/sections/Configurator';
import { Gallery } from '@/components/sections/Gallery';
import { Proof } from '@/components/sections/Proof';
import { SiteFooter } from '@/components/sections/SiteFooter';

/* One page, eight sections, one continuous scroll. */
export default function Page() {
  return (
    <BagProvider>
      <SmoothScroll />
      <a className="eb-skip" href="#manifesto-title">
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Manifesto />
        <Anatomy />
        <Collections />
        <Configurator />
        <Gallery />
        <Proof />
      </main>
      <SiteFooter />
      <BagDrawer />
      <GrainOverlay />
    </BagProvider>
  );
}
