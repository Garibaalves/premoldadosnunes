import { Metadata } from 'next';
import { Settings, FlaskConical, TrendingUp, Award, CheckCircle, Cog } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Controle de Qualidade | Produção 100% Automatizada - Premoldados Nunes',
  description: 'Sistema de produção 100% automatizado com controle total dos processos e testes laboratoriais contínuos. Garantia de qualidade em premoldados de concreto em São Paulo.',
  keywords: 'controle qualidade premoldados, produção automatizada, testes laboratoriais, qualidade concreto, automação industrial, certificação qualidade, premoldados são paulo',
  openGraph: {
    title: 'Controle de Qualidade - Produção 100% Automatizada',
    description: 'Sistema de produção 100% automatizado com controle total dos processos e testes laboratoriais contínuos.',
    type: 'website',
    url: '/qualidade',
  },
  alternates: {
    canonical: '/qualidade',
  },
};

export default function QualidadePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#df1a31] to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Qualidade
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Excelência em cada produto através de automação e controle rigoroso
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Automação */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-[#df1a31] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Settings className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Automação</h2>
              <p className="text-gray-700 leading-relaxed">
                O sistema de produção 100% automatizado permite total controle dos processos, 
                garantindo ao cliente, sempre, o mesmo padrão de qualidade.
              </p>
            </div>

            {/* Controle de Qualidade */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-[#df1a31] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <FlaskConical className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Controle de Qualidade</h2>
              <p className="text-gray-700 leading-relaxed">
                Testes laboratoriais são feitos contínua e sistematicamente para a garantia 
                de todo o processo, desde a matéria prima até o produto final.
              </p>
            </div>

            {/* Alta Produção */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-[#df1a31] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Alta Produção</h2>
              <p className="text-gray-700 leading-relaxed">
                Devido ao investimento constante em tecnologia e total automação do processo produtivo, 
                nossos equipamentos possuem uma das maiores capacidades produtivas do mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso Processo de Qualidade
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cada etapa do nosso processo é cuidadosamente monitorada para garantir a excelência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-[#df1a31]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Matéria Prima</h3>
              <p className="text-gray-600 text-sm">Seleção rigorosa dos melhores materiais</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Cog className="h-8 w-8 text-[#df1a31]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Produção</h3>
              <p className="text-gray-600 text-sm">Processo 100% automatizado e controlado</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FlaskConical className="h-8 w-8 text-[#df1a31]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Testes</h3>
              <p className="text-gray-600 text-sm">Análises laboratoriais contínuas</p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-[#df1a31]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Produto Final</h3>
              <p className="text-gray-600 text-sm">Qualidade garantida e certificada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#df1a31] mb-2">100%</div>
              <div className="text-lg font-medium text-gray-900">Automação</div>
              <div className="text-gray-600">Processo totalmente automatizado</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#df1a31] mb-2">24/7</div>
              <div className="text-lg font-medium text-gray-900">Monitoramento</div>
              <div className="text-gray-600">Controle contínuo da qualidade</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#df1a31] mb-2">20+</div>
              <div className="text-lg font-medium text-gray-900">Anos de Experiência</div>
              <div className="text-gray-600">Tradição em qualidade</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}