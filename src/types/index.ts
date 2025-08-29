// Database types for Supabase
export interface User {
  id: string;
  email: string;
  password?: string;
  name: string;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description?: string;
  image_url?: string;
  price?: number;
  category?: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  created_at: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  image_url?: string;
  category?: string;
  location?: string;
  completion_date?: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

// Form input types
export interface ProductCreateInput {
  title: string;
  slug: string;
  description?: string;
  image_url?: string;
  price?: number;
  category?: string;
  featured?: boolean;
}

export interface ProductUpdateInput {
  title?: string;
  slug?: string;
  description?: string;
  image_url?: string;
  price?: number;
  category?: string;
  featured?: boolean;
}

export interface ContactCreateInput {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ProjectCreateInput {
  title: string;
  description?: string;
  image_url?: string;
  category?: string;
  location?: string;
  completion_date?: string;
  featured?: boolean;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}