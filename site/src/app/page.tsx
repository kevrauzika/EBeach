import { BagProvider } from '@/components/BagProvider';
import { BagDrawer } from '@/components/BagDrawer';
import { ShowcaseProvider } from '@/components/ShowcaseProvider';
import { SiteHeader } from '@/components/SiteHeader';
import { SmoothScroll } from '@/components/SmoothScroll';
import { GrainOverlay } from '@/components/brand/GrainOverlay';
import { Hero } from '@/components/sections/Hero';
import { Manifesto } from '@/components/sections/Manifesto';
import { Collections } from '@/components/sections/Collections';
import { Showcase } from '@/components/sections/Showcase';
import { SiteFooter } from '@/components/sections/SiteFooter';

/* One page, five sections, one continuous scroll. */
export default function Page() {
  return (
    <BagProvider>
      <ShowcaseProvider>
        <SmoothScroll />
        <a className="eb-skip" href="#manifesto-title">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main>
          <Hero />
          <Manifesto />
          <Collections />
          <Showcase />
        </main>
        <SiteFooter />
        <BagDrawer />
        <GrainOverlay />
      </ShowcaseProvider>
    </BagProvider>
  );
}
