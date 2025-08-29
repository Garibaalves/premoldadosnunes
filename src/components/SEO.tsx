import Head from 'next/head';
import { SEOProps } from '@/types';

interface SEOComponentProps extends SEOProps {
  children?: React.ReactNode;
}

export default function SEO({
  title,
  description,
  keywords,
  image = '/og-image.jpg',
  url,
  type = 'website',
  children
}: SEOComponentProps) {
  const siteTitle = 'Premoldados Nunes';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://premoldadosnunes.com.br';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteTitle,
    description: description,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    foundingDate: '2000',
    numberOfEmployees: '10-50',
    industry: 'Construction',
    areaServed: {
      '@type': 'State',
      name: 'São Paulo'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-99999-9999',
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      }
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressLocality: 'Ouro Branco',
      addressRegion: 'MG',
      streetAddress: 'Alameda Fernando de Oliveira e Silva, 1675',
      postalCode: '36420-000'
    },
    sameAs: [
      'https://www.facebook.com/premoldadosnunes',
      'https://www.instagram.com/premoldadosnunes'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Premoldados de Concreto',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Lajes Premoldadas',
            category: 'Construção Civil'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Vigas Premoldadas',
            category: 'Construção Civil'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Pilares Premoldados',
            category: 'Construção Civil'
          }
        }
      ]
    }
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Premoldados Nunes" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pt-BR" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#df1a31" />
      <meta name="msapplication-TileColor" content="#df1a31" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#df1a31" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* Additional head elements */}
      {children}
    </Head>
  );
}