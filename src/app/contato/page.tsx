import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Contato - Orçamento Premoldados de Concreto | São Paulo',
  description: 'Entre em contato com a Premoldados Nunes para solicitar orçamento de lajes, vigas e pilares premoldados. Atendimento especializado em São Paulo. Ligue agora!',
  keywords: 'contato premoldados, orçamento premoldados, telefone premoldados nunes, premoldados são paulo, solicitar orçamento, contato construção civil',
  openGraph: {
    title: 'Contato - Premoldados Nunes',
    description: 'Entre em contato para solicitar orçamento de premoldados de concreto. Atendimento especializado em São Paulo.',
    type: 'website',
    url: '/contato',
  },
  alternates: {
    canonical: '/contato',
  },
};

export default function ContatoPage() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#df1a31] to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Estamos prontos para atender suas necessidades em premoldados de concreto
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações de Contato
                </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#df1a31] rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                        <p className="text-gray-600">(31) 3742-3090</p>
                        <p className="text-gray-600">(11) 3333-3333</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#df1a31] rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">E-mail</h3>
                        <p className="text-gray-600">financeiro@premoldadosnunes.com.br</p>
                        <p className="text-gray-600">vendas@premoldadosnunes.com.br</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#df1a31] rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                          <p className="text-gray-600">
                            Alameda Fernando de Oliveira e Silva, 1675<br />
                            Metalúrgico - Ouro Branco - MG<br />
                            CEP: 36420-000
                          </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#df1a31] rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h3>
                        <p className="text-gray-600">
                          Segunda a Sexta: 7h às 17h<br />
                          Sábado: 7h às 12h<br />
                          Domingo: Fechado
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Atendimento via WhatsApp
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Fale conosco agora mesmo e tire suas dúvidas
                      </p>
                      <Button asChild size="sm" className="bg-green-500 hover:bg-green-600">
                        <a
                          href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os premoldados."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Chamar no WhatsApp</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Services Info */}
              <div className="space-y-8">
                {/* Services */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Nossos Serviços
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#df1a31] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Orçamentos Personalizados</h3>
                        <p className="text-gray-600 text-sm">Desenvolvemos soluções sob medida para seu projeto</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#df1a31] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Entrega e Instalação</h3>
                        <p className="text-gray-600 text-sm">Serviço completo com frota própria e equipe especializada</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#df1a31] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Consultoria Técnica</h3>
                        <p className="text-gray-600 text-sm">Apoio técnico especializado em todas as etapas do projeto</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#df1a31] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Garantia de Qualidade</h3>
                        <p className="text-gray-600 text-sm">Produtos certificados com rigoroso controle de qualidade</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-[#df1a31] text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Atendimento de Emergência</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Para situações urgentes, entre em contato conosco:
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold">
                      📞 (31) 3742-3090
                    </p>
                    <p className="text-sm opacity-90">
                      Disponível 24h para emergências
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nossa Localização
              </h2>
              <p className="text-gray-600">
                Visite nossa fábrica e conheça de perto nossos processos produtivos
              </p>
            </div>
            
            {/* Google Maps Embed */}
            <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ height: '400px' }}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Mapa será carregado aqui<br />
                    <span className="text-sm">
                      (Integração com Google Maps será configurada com a API key)
                    </span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map Note */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                <strong>Como chegar:</strong> Estamos localizados no Distrito Industrial, 
                com fácil acesso pelas principais rodovias da região metropolitana de São Paulo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}