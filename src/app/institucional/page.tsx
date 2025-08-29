import { Metadata } from 'next';
import Image from 'next/image';
import { Building2, Users, Award, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre a Premoldados Nunes | 20+ Anos em Premoldados de Concreto - São Paulo',
  description: 'Conheça a história da Premoldados Nunes: mais de 20 anos fabricando premoldados de concreto em São Paulo. Nossa missão, valores e compromisso com a qualidade.',
  keywords: 'sobre premoldados nunes, história empresa, missão valores, premoldados concreto são paulo, empresa premoldados, quem somos, institucional',
  openGraph: {
    title: 'Sobre a Premoldados Nunes - 20+ Anos de Experiência',
    description: 'Conheça a história da Premoldados Nunes: mais de 20 anos fabricando premoldados de concreto em São Paulo.',
    type: 'website',
    url: '/institucional',
  },
  alternates: {
    canonical: '/institucional',
  },
};

export default function InstitucionalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#df1a31] to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quem Somos
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Conheça a história e os valores que fazem da Premoldados Nunes referência em premoldados de concreto
            </p>
          </div>
        </div>
      </section>

      {/* História da Empresa */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nossa História
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    A Premoldados Nunes nasceu da visão de oferecer soluções inovadoras e de alta qualidade 
                    em premoldados de concreto. Fundada com o compromisso de atender às necessidades específicas 
                    de cada cliente, nossa empresa se consolidou como referência no mercado.
                  </p>
                  <p>
                    Ao longo dos anos, investimos continuamente em tecnologia, capacitação da equipe e 
                    aprimoramento de nossos processos produtivos. Essa dedicação nos permitiu crescer e 
                    conquistar a confiança de clientes em diversos segmentos.
                  </p>
                  <p>
                    Hoje, somos reconhecidos pela excelência em nossos produtos e pela agilidade na entrega, 
                    sempre mantendo os mais altos padrões de qualidade e segurança.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center">
                  <Building2 className="w-24 h-24 text-gray-400" />
                  <span className="sr-only">Imagem da empresa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Missão, Visão e Valores
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Missão */}
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-[#df1a31] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Missão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fornecer soluções em premoldados de concreto com excelência, 
                  inovação e sustentabilidade, superando as expectativas de nossos clientes 
                  e contribuindo para o desenvolvimento da construção civil.
                </p>
              </div>

              {/* Visão */}
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-[#df1a31] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visão</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ser reconhecida como a empresa líder em premoldados de concreto, 
                  referência em qualidade, inovação e atendimento, expandindo nossa 
                  atuação e consolidando parcerias duradouras.
                </p>
              </div>

              {/* Valores */}
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-[#df1a31] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Valores</h3>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• Qualidade em todos os processos</li>
                  <li>• Compromisso com prazos</li>
                  <li>• Inovação constante</li>
                  <li>• Sustentabilidade</li>
                  <li>• Transparência</li>
                  <li>• Respeito às pessoas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Nossos Diferenciais
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#df1a31] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Qualidade Garantida</h3>
                <p className="text-gray-600 text-sm">
                  Produtos com certificação e controle rigoroso de qualidade
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#df1a31] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Prazos Cumpridos</h3>
                <p className="text-gray-600 text-sm">
                  Entrega pontual e planejamento eficiente de produção
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#df1a31] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Equipe Especializada</h3>
                <p className="text-gray-600 text-sm">
                  Profissionais capacitados e experientes no setor
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#df1a31] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Tecnologia Avançada</h3>
                <p className="text-gray-600 text-sm">
                  Equipamentos modernos e processos inovadores
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
              Pronto para conhecer nossos produtos?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco e descubra como podemos ajudar em seu projeto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/produtos"
                className="bg-white text-[#df1a31] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Ver Produtos
              </a>
              <a
                href="/contato"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#df1a31] transition-colors"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}