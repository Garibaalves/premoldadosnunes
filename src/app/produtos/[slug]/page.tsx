import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Phone, Mail, MessageCircle } from 'lucide-react';
import { Product } from '@/types';
import Button from '@/components/Button';
import StructuredData from '@/components/StructuredData';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/products`, {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const result = await res.json();
    const products: Product[] = result.data || [];
    return products.find(product => product.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  
  if (!product) {
    return {
      title: 'Produto não encontrado - Premoldados Nunes',
    };
  }

  return {
    title: `${product.title} - Premoldados Nunes`,
    description: product.description,
    keywords: `${product.title}, premoldados, concreto, premoldados nunes`,
    openGraph: {
      title: `${product.title} - Premoldados Nunes`,
      description: product.description,
      images: product.image_url ? [{ url: product.image_url }] : [],
      type: 'website',
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.image_url,
    brand: {
      '@type': 'Brand',
      name: 'Premoldados Nunes'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Premoldados Nunes'
    }
  };

  return (
    <>
      <StructuredData type="product" product={product} />
      <StructuredData 
        type="breadcrumb" 
        items={[
          { name: 'Home', url: 'https://premoldadosnunes.com.br' },
          { name: 'Produtos', url: 'https://premoldadosnunes.com.br/produtos' },
          { name: product.title, url: `https://premoldadosnunes.com.br/produtos/${product.slug}` }
        ]}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#df1a31]">Home</Link>
              <span>/</span>
              <Link href="/produtos" className="hover:text-[#df1a31]">Produtos</Link>
              <span>/</span>
              <span className="text-gray-900">{product.title}</span>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/produtos" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar aos Produtos</span>
            </Link>
          </Button>
        </div>

        {/* Product Details */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="relative">
                  {product.image_url ? (
                    <div className="aspect-square relative">
                      <Image
                        src={product.image_url}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>
                  ) : (
                    <div className="aspect-square bg-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <svg
                          className="w-24 h-24 text-gray-400 mx-auto mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                        <p className="text-gray-500">Imagem do produto</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-6">
                    {product.title}
                  </h1>
                  
                  <div className="prose prose-gray max-w-none mb-8">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {product.description}
                    </p>
                  </div>

                  {/* Contact Actions */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Interessado neste produto?
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Button asChild className="w-full">
                        <a
                          href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o produto: {product.title}"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span>WhatsApp</span>
                        </a>
                      </Button>
                      
                      <Button asChild variant="outline" className="w-full">
                        <a
                          href="tel:+5511999999999"
                          className="flex items-center justify-center space-x-2"
                        >
                          <Phone className="w-5 h-5" />
                          <span>Ligar</span>
                        </a>
                      </Button>
                    </div>
                    
                    <Button asChild variant="ghost" className="w-full">
                      <Link
                        href="/contato"
                        className="flex items-center justify-center space-x-2"
                      >
                        <Mail className="w-5 h-5" />
                        <span>Enviar E-mail</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Por que escolher a Premoldados Nunes?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="w-16 h-16 bg-[#df1a31] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Qualidade Garantida</h3>
                  <p className="text-gray-600 text-sm">
                    Todos os produtos passam por rigoroso controle de qualidade
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-[#df1a31] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Entrega Rápida</h3>
                  <p className="text-gray-600 text-sm">
                    Prazos otimizados para não atrasar sua obra
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-[#df1a31] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Suporte Técnico</h3>
                  <p className="text-gray-600 text-sm">
                    Equipe especializada para orientar na aplicação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products CTA */}
        <div className="bg-[#df1a31] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Conheça outros produtos
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Explore nossa linha completa de premoldados de concreto
            </p>
            <Button asChild variant="secondary">
              <Link href="/produtos">
                Ver Todos os Produtos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}