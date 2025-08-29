import { Product } from '@/types';

interface OrganizationSchemaProps {
  type: 'organization';
}

interface ProductSchemaProps {
  type: 'product';
  product: Product;
}

interface WebsiteSchemaProps {
  type: 'website';
}

interface BreadcrumbSchemaProps {
  type: 'breadcrumb';
  items: Array<{
    name: string;
    url: string;
  }>;
}

type StructuredDataProps = 
  | OrganizationSchemaProps 
  | ProductSchemaProps 
  | WebsiteSchemaProps 
  | BreadcrumbSchemaProps;

export default function StructuredData(props: StructuredDataProps) {
  const generateSchema = () => {
    const baseUrl = 'https://premoldadosnunes.com.br';
    
    switch (props.type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': ['Organization', 'LocalBusiness'],
          name: 'Premoldados Nunes',
          alternateName: 'Premoldados Nunes Ltda',
          description: 'Especializada em premoldados de concreto de alta qualidade para construção civil. Blocos, lajes, vigas e soluções personalizadas.',
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          image: `${baseUrl}/og-image.jpg`,
          telephone: '+55 (31) 3742-3090',
          email: 'contato@premoldadosnunes.com.br',
          address: {
          '@type': 'PostalAddress',
          streetAddress: 'Alameda Fernando de Oliveira e Silva, 1675',
          addressLocality: 'Ouro Branco',
          addressRegion: 'MG',
          postalCode: '36420-000',
          addressCountry: 'BR'
        },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '-23.5505',
            longitude: '-46.6333'
          },
          openingHours: [
            'Mo-Fr 07:00-17:00',
            'Sa 07:00-12:00'
          ],
          sameAs: [
            'https://www.facebook.com/premoldadosnunes',
            'https://www.instagram.com/premoldadosnunes',
            'https://www.linkedin.com/company/premoldadosnunes'
          ],
          foundingDate: '2010',
          numberOfEmployees: {
            '@type': 'QuantitativeValue',
            minValue: 10,
            maxValue: 50
          },
          areaServed: {
            '@type': 'State',
            name: 'São Paulo'
          },
          serviceType: [
            'Premoldados de Concreto',
            'Blocos de Concreto',
            'Lajes Premoldadas',
            'Vigas Premoldadas',
            'Pilares Premoldados',
            'Construção Civil'
          ],
          priceRange: '$$',
          paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
          currenciesAccepted: 'BRL',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Catálogo de Premoldados',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Product',
                  name: 'Lajes Premoldadas',
                  category: 'Premoldados de Concreto'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Product',
                  name: 'Vigas Premoldadas',
                  category: 'Premoldados de Concreto'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Product',
                  name: 'Pilares Premoldados',
                  category: 'Premoldados de Concreto'
                }
              }
            ]
          }
        };

      case 'product':
        return {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: props.product.title,
          description: props.product.description,
          image: props.product.image_url,
          url: `${baseUrl}/produtos/${props.product.slug}`,
          brand: {
            '@type': 'Brand',
            name: 'Premoldados Nunes'
          },
          manufacturer: {
            '@type': 'Organization',
            name: 'Premoldados Nunes',
            url: baseUrl
          },
          category: 'Premoldados de Concreto',
          material: 'Concreto',
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'BRL',
            seller: {
              '@type': 'Organization',
              name: 'Premoldados Nunes'
            }
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '127',
            bestRating: '5',
            worstRating: '1'
          }
        };

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Premoldados Nunes',
          description: 'Premoldados de concreto de alta qualidade para construção civil',
          url: baseUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/produtos?search={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Premoldados Nunes',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/logo.png`
            }
          }
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: props.items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();

  if (!schema) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
}