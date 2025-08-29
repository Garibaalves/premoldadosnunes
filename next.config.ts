import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
  typescript: {
    // Ignora erros de TypeScript no build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignora erros do ESLint no build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
