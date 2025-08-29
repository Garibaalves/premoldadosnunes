import { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';

export const metadata: Metadata = {
  title: 'Produtos em Premoldados de Concreto | Lajes, Vigas e Pilares - São Paulo',
  description: 'Catálogo completo de premoldados de concreto: lajes, vigas, pilares e estruturas personalizadas. Mais de 20 anos de experiência em São Paulo. Orçamento grátis!',
  keywords: 'produtos premoldados, lajes premoldadas, vigas concreto, pilares premoldados, estruturas premoldadas, catálogo premoldados, São Paulo, construção civil, concreto armado',
  openGraph: {
    title: 'Produtos em Premoldados de Concreto - Premoldados Nunes',
    description: 'Catálogo completo de premoldados de concreto: lajes, vigas, pilares e estruturas personalizadas. Mais de 20 anos de experiência.',
    type: 'website',
    url: '/produtos',
  },
  alternates: {
    canonical: '/produtos',
  },
};

async function getProducts(): Promise<Product[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/products`, {
      cache: 'no-store', // Always fetch fresh data
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const result = await res.json();
    return result.data || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function ProdutosPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#df1a31] to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Produtos
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Descubra nossa linha completa de premoldados de concreto com qualidade e durabilidade garantidas
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {products.length > 0 ? (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Produtos Disponíveis
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Encontre o produto ideal para sua obra. Todos os nossos premoldados são fabricados 
                    com materiais de alta qualidade e seguem rigorosos padrões de controle.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-12 h-12 text-gray-400"
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
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Produtos em Breve
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Estamos preparando nosso catálogo de produtos. Em breve você poderá 
                    conhecer toda nossa linha de premoldados de concreto.
                  </p>
                  <a
                    href="/contato"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#df1a31] text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Entre em Contato
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Por que escolher nossos produtos?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#df1a31] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Qualidade Certificada</h3>
                <p className="text-gray-600 text-sm">
                  Produtos testados e aprovados seguindo normas técnicas rigorosas
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#df1a31] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Entrega Rápida</h3>
                <p className="text-gray-600 text-sm">
                  Prazos de entrega otimizados para não atrasar sua obra
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#df1a31] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Alta Resistência</h3>
                <p className="text-gray-600 text-sm">
                  Produtos desenvolvidos para suportar grandes cargas e intempéries
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#df1a31] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Suporte Técnico</h3>
                <p className="text-gray-600 text-sm">
                  Equipe especializada para orientar na escolha e aplicação
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#df1a31] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Precisa de um orçamento personalizado?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nossa equipe está pronta para atender suas necessidades específicas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contato"
                className="bg-white text-[#df1a31] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Solicitar Orçamento
              </a>
              <a
                href="/obras"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#df1a31] transition-colors"
              >
                Ver Obras Realizadas
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}