import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fcizlpjsapyhdzjaziqz.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  // Ignorar erros de TypeScript durante build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ignorar erros de ESLint durante build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
