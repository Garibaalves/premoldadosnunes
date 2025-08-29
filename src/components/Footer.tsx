import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#1a1a1a] to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="text-2xl font-bold text-[#df1a31] mb-4">
              Premoldados Nunes
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especialistas em premoldados de concreto com mais de 20 anos de experiência. 
              Oferecemos soluções completas para construção civil com qualidade e agilidade.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/premoldadosnunes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#df1a31] transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/premoldadosnunes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#df1a31] transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#df1a31] transition-colors duration-200"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#df1a31] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/institucional" className="text-gray-300 hover:text-[#df1a31] transition-colors duration-200">
                  Institucional
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="text-gray-300 hover:text-[#df1a31] transition-colors duration-200">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/logistica" className="text-gray-300 hover:text-[#df1a31] transition-colors duration-200">
                  Logística
                </Link>
              </li>
              <li>
                <Link href="/qualidade" className="text-gray-300 hover:text-[#df1a31] transition-colors duration-200">
                  Qualidade
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-[#df1a31] transition-colors duration-200">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#df1a31]" />
                <span className="text-gray-300">(31) 3742-3090</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#df1a31]" />
                <span className="text-gray-300">vendas@premoldadosnunes.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#df1a31] mt-1" />
                <span className="text-gray-300">
                  Alameda Fernando de Oliveira e Silva, 1675<br />
                  Metalúrgico - Ouro Branco - MG<br />
                  CEP: 36420-000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Premoldados Nunes. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Desenvolvido por: Codenow Soluções Digitais
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/politica-privacidade" className="text-gray-400 hover:text-[#df1a31] text-sm transition-colors duration-200">
                Política de Privacidade
              </Link>
              <Link href="/termos-uso" className="text-gray-400 hover:text-[#df1a31] text-sm transition-colors duration-200">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}