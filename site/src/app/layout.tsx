import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'E-BEACH — Óculos para a luz do Brasil',
  description:
    'Lente polarizada UV400, acetato italiano, montagem no litoral paulista. Monte o seu: armação, lente e polarização.',
  icons: { icon: '/assets/mark-ink.png' },
  openGraph: {
    title: 'E-BEACH — Óculos para a luz do Brasil',
    description: 'Lente polarizada UV400, acetato italiano, montagem no litoral paulista.',
    locale: 'pt_BR',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#F5E9D7',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* The two faces above the fold. */}
        <link rel="preload" href="/fonts/clash-display-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/general-sans-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
