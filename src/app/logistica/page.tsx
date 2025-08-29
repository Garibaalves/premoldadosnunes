import { Metadata } from 'next';
import { Truck, Shield, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Logística e Entrega | Frota Própria 30+ Veículos - Premoldados Nunes',
  description: 'Frota própria com mais de 30 veículos modernos e adaptados para entrega de premoldados. Logística especializada em São Paulo com segurança e agilidade garantidas.',
  keywords: 'logística premoldados, frota própria, entrega premoldados, transporte concreto, logística são paulo, entrega segura, veículos adaptados',
  openGraph: {
    title: 'Logística e Entrega - Frota Própria 30+ Veículos',
    description: 'Frota própria com mais de 30 veículos modernos e adaptados para entrega de premoldados com segurança e agilidade.',
    type: 'website',
    url: '/logistica',
  },
  alternates: {
    canonical: '/logistica',
  },
};

export default function LogisticaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#df1a31] to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Logística
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Frota própria para garantir qualidade, segurança e agilidade na entrega
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frota Própria
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A Premoldados Nunes possui uma das maiores frotas do segmento, 
                mais de 30 veículos modernos e adaptados para transportar nossos produtos, 
                assim garantimos mais qualidade, segurança e agilidade na nossa entrega.
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#df1a31] p-3 rounded-lg">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Frota Moderna</h3>
                    <p className="text-gray-600">Mais de 30 veículos adaptados especialmente para nossos produtos</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#df1a31] p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Segurança</h3>
                    <p className="text-gray-600">Transporte seguro garantindo a integridade dos produtos</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#df1a31] p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Agilidade</h3>
                    <p className="text-gray-600">Entregas rápidas e pontuais em toda a região</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#df1a31] p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cobertura</h3>
                    <p className="text-gray-600">Atendimento em toda a Grande São Paulo e interior</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Placeholder */}
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Truck className="h-24 w-24 mx-auto mb-4" />
                <p className="text-lg font-medium">Imagem da Frota</p>
                <p className="text-sm">Veículos modernos e adaptados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#df1a31] mb-2">30+</div>
              <div className="text-lg font-medium text-gray-900">Veículos na Frota</div>
              <div className="text-gray-600">Modernos e adaptados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#df1a31] mb-2">100%</div>
              <div className="text-lg font-medium text-gray-900">Frota Própria</div>
              <div className="text-gray-600">Controle total da logística</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#df1a31] mb-2">24h</div>
              <div className="text-lg font-medium text-gray-900">Disponibilidade</div>
              <div className="text-gray-600">Entregas quando você precisar</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}