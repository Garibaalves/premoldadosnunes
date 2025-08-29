import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato - Premoldados Nunes | Entre em Contato Conosco',
  description: 'Entre em contato com a Premoldados Nunes. Solicite orçamentos, tire dúvidas sobre nossos produtos e serviços em premoldados de concreto.',
  keywords: 'contato, premoldados nunes, orçamento, telefone, email, endereço, premoldados concreto',
  openGraph: {
    title: 'Contato - Premoldados Nunes',
    description: 'Entre em contato com a Premoldados Nunes para orçamentos e informações.',
    type: 'website',
  },
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}