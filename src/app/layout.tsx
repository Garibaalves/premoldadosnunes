import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Premoldados Nunes - Premoldados de Concreto de Alta Qualidade',
    template: '%s | Premoldados Nunes'
  },
  description: 'Especializada em premoldados de concreto de alta qualidade para construção civil. Blocos, lajes, vigas e soluções personalizadas em São Paulo.',
  keywords: [
    'premoldados',
    'concreto',
    'blocos de concreto',
    'lajes premoldadas',
    'vigas premoldadas',
    'construção civil',
    'São Paulo',
    'premoldados nunes',
    'premoldados de concreto',
    'construção',
    'materiais de construção',
    'concreto armado',
    'estruturas premoldadas'
  ],
  authors: [{ name: 'Premoldados Nunes' }],
  creator: 'Premoldados Nunes',
  publisher: 'Premoldados Nunes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://premoldadosnunes.com.br'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Premoldados Nunes - Premoldados de Concreto de Alta Qualidade',
    description: 'Especializada em premoldados de concreto de alta qualidade para construção civil. Blocos, lajes, vigas e soluções personalizadas.',
    url: 'https://premoldadosnunes.com.br',
    siteName: 'Premoldados Nunes',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Premoldados Nunes - Premoldados de Concreto',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premoldados Nunes - Premoldados de Concreto de Alta Qualidade',
    description: 'Especializada em premoldados de concreto de alta qualidade para construção civil.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'msapplication-TileColor': '#df1a31',
    'theme-color': '#df1a31',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
