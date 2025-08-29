'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Upload, 
  X,
  Save,
  Eye,
  Trash2
} from 'lucide-react';
import Button from '@/components/Button';
import { Product } from '@/types';
import { generateSlug } from '@/lib/utils';

interface FormData {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export default function EditarProduto() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const productId = params.id as string;
  
  const [product, setProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    image: '',
    slug: ''
  });
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === 'loading') return;
    if (!session) {
      router.push('/admin/login');
      return;
    }
  }, [session, status, router]);

  // Fetch product data
  useEffect(() => {
    if (session && productId) {
      fetchProduct();
    }
  }, [session, productId]);

  const fetchProduct = async () => {
    try {
      setFetchLoading(true);
      const response = await fetch('/api/products');
      if (response.ok) {
        const result = await response.json();
        const products = result.data || [];
        const foundProduct = products.find((p: Product) => p.id === productId);
        
        if (foundProduct) {
          setProduct(foundProduct);
          setFormData({
            title: foundProduct.title,
            description: foundProduct.description,
            image: foundProduct.image_url || '',
            slug: foundProduct.slug
          });
          setImagePreview(foundProduct.image_url || '');
        } else {
          router.push('/admin');
        }
      } else {
        console.error('Failed to fetch product');
        router.push('/admin');
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      router.push('/admin');
    } finally {
      setFetchLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Auto-generate slug when title changes (but only if it's different from original)
      ...(name === 'title' && value !== product?.title && { slug: generateSlug(value) })
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData(prev => ({ ...prev, image: value }));
    setImagePreview(value);
    
    if (errors.image) {
      setErrors(prev => ({ ...prev, image: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Título é obrigatório';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Descrição é obrigatória';
    }

    if (!formData.image.trim()) {
      newErrors.image = 'URL da imagem é obrigatória';
    } else {
      // Basic URL validation
      try {
        new URL(formData.image);
      } catch {
        newErrors.image = 'URL da imagem inválida';
      }
    }

    if (!formData.slug.trim()) {
      newErrors.slug = 'Slug é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          slug: formData.slug,
          description: formData.description,
          image_url: formData.image,
          price: null,
          category: 'Pilares',
          featured: false
        }),
      });

      if (response.ok) {
        router.push('/admin');
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Erro ao atualizar produto');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Erro ao atualizar produto');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteConfirm) {
      setDeleteConfirm(true);
      return;
    }

    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        router.push('/admin');
      } else {
        alert('Erro ao excluir produto');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Erro ao excluir produto');
    }
  };

  const clearImagePreview = () => {
    setImagePreview('');
    setFormData(prev => ({ ...prev, image: '' }));
  };

  if (status === 'loading' || fetchLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#df1a31] mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Produto não encontrado</h2>
          <Button asChild>
            <Link href="/admin">Voltar ao Painel</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Button
                asChild
                variant="ghost"
                size="sm"
              >
                <Link href="/admin" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Editar Produto
                </h1>
                <p className="text-sm text-gray-600">
                  {product.title}
                </p>
              </div>
            </div>
            
            {/* Delete Button */}
            <div className="flex items-center space-x-2">
              {deleteConfirm ? (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setDeleteConfirm(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleDelete}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Confirmar Exclusão
                  </Button>
                </>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setDeleteConfirm(true)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 flex items-center space-x-2"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Excluir</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Fields */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">
                  Informações Básicas
                </h2>
                
                <div className="space-y-4">
                  {/* Title */}
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                      Título do Produto *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#df1a31] focus:border-transparent ${
                        errors.title ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Ex: Bloco de Concreto 14x19x39"
                    />
                    {errors.title && (
                      <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                    )}
                  </div>

                  {/* Slug */}
                  <div>
                    <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                      Slug (URL) *
                    </label>
                    <input
                      type="text"
                      id="slug"
                      name="slug"
                      value={formData.slug}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#df1a31] focus:border-transparent ${
                        errors.slug ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="bloco-de-concreto-14x19x39"
                    />
                    {errors.slug && (
                      <p className="mt-1 text-sm text-red-600">{errors.slug}</p>
                    )}
                    <p className="mt-1 text-sm text-gray-500">
                      URL do produto: /produtos/{formData.slug || 'slug-do-produto'}
                    </p>
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Descrição *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={6}
                      value={formData.description}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#df1a31] focus:border-transparent ${
                        errors.description ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Descreva as características, dimensões, aplicações e benefícios do produto..."
                    />
                    {errors.description && (
                      <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">
                  Imagem do Produto
                </h2>
                
                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                    URL da Imagem *
                  </label>
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleImageChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#df1a31] focus:border-transparent ${
                      errors.image ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="https://exemplo.com/imagem-do-produto.jpg"
                  />
                  {errors.image && (
                    <p className="mt-1 text-sm text-red-600">{errors.image}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    Cole a URL de uma imagem hospedada online
                  </p>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 sticky top-8">
                <h2 className="text-lg font-medium text-gray-900 mb-6">
                  Pré-visualização
                </h2>
                
                {/* Image Preview */}
                <div className="mb-4">
                  {imagePreview ? (
                    <div className="relative">
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-lg"
                        onError={() => setImagePreview('')}
                      />
                      <button
                        type="button"
                        onClick={clearImagePreview}
                        className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">Imagem do produto</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Info Preview */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    {formData.title || 'Título do Produto'}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {formData.description || 'Descrição do produto aparecerá aqui...'}
                  </p>
                </div>

                {/* Preview Link */}
                {formData.slug && (
                  <div className="mt-4 pt-4 border-t">
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="w-full"
                    >
                      <Link 
                        href={`/produtos/${formData.slug}`} 
                        target="_blank"
                        className="flex items-center justify-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Visualizar Página</span>
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end space-x-4 pt-6 border-t">
            <Button
              asChild
              variant="ghost"
            >
              <Link href="/admin">
                Cancelar
              </Link>
            </Button>
            
            <Button
              type="submit"
              disabled={loading}
              className="flex items-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Salvando...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Salvar Alterações</span>
                </>
              )}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}