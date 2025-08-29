'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import SEO from '@/components/SEO';
import { Product } from '@/types';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products');
        if (response.ok) {
          const result = await response.json();
          const products = result.data || [];
          setFeaturedProducts(products.slice(0, 3)); // Show only first 3 products
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <SEO
        title="Especialistas em Premoldados de Concreto - São Paulo"
        description="Premoldados Nunes: Mais de 20 anos fabricando lajes, vigas e pilares premoldados de concreto. Qualidade, agilidade e preços competitivos em São Paulo. Solicite seu orçamento!"
        keywords="premoldados de concreto, lajes premoldadas, vigas premoldadas, pilares premoldados, construção civil, concreto armado, São Paulo, orçamento premoldados, fábrica premoldados"
        url="/"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1a1a1a] to-black text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Especialistas em
              <span className="text-[#df1a31] block">Premoldados de Concreto</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Mais de 20 anos de experiência oferecendo soluções completas 
              para construção civil com qualidade e agilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/produtos">
                  Ver Produtos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contato">
                  Solicitar Orçamento
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Por que escolher a Premoldados Nunes?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Somos uma empresa especializada em premoldados de concreto, 
                oferecendo soluções inovadoras e de alta qualidade para seus projetos.
              </p>
              <div className="space-y-4">
                {[
                  'Mais de 20 anos de experiência no mercado',
                  'Produtos de alta qualidade e durabilidade',
                  'Equipe técnica especializada',
                  'Entrega rápida e pontual',
                  'Preços competitivos',
                  'Suporte técnico completo'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#df1a31]" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/institucional">
                    Conheça Nossa História
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 lg:h-full">
              <Image
                src="/images/about-hero.jpg"
                alt="Premoldados Nunes - Equipe e instalações"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Produtos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça nossa linha completa de premoldados de concreto, 
              desenvolvidos com tecnologia de ponta e rigoroso controle de qualidade.
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                  <div className="h-48 bg-gray-300 rounded mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">Nenhum produto cadastrado ainda.</p>
              <p className="text-sm text-gray-500">
                Os produtos aparecerão aqui após serem cadastrados no painel administrativo.
              </p>
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/produtos">
                Ver Todos os Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#df1a31] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para seu próximo projeto?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e solicite um orçamento personalizado. 
              Nossa equipe está pronta para atender suas necessidades.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p>(31) 3742-3090</p>
            </div>
            <div className="text-center">
              <Mail className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>vendas@premoldadosnunes.com.br</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Localização</h3>
              <p>São Paulo - SP</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contato">
                Entrar em Contato
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
