import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { truncateText } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  showDescription?: boolean;
  className?: string;
}

export default function ProductCard({ 
  product, 
  showDescription = true, 
  className = '' 
}: ProductCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <Link href={`/produtos/${product.slug}`}>
        <div className="relative h-48 w-full">
          {product.image_url ? (
            <Image
              src={product.image_url}
              alt={product.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-2"
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
                <p className="text-gray-500 text-sm">Sem imagem</p>
              </div>
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/produtos/${product.slug}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-[#df1a31] transition-colors duration-200">
            {product.title}
          </h3>
        </Link>
        
        {showDescription && product.description && (
          <p className="text-gray-600 text-sm mb-4">
            {truncateText(product.description, 120)}
          </p>
        )}
        
        <Link 
          href={`/produtos/${product.slug}`}
          className="inline-flex items-center text-[#df1a31] hover:text-red-700 font-medium text-sm transition-colors duration-200"
        >
          Ver detalhes
          <svg 
            className="ml-1 h-4 w-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}