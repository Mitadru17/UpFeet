/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'vercel.app'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  eslint: {
    ignoreDuringBuilds: true // Temporarily ignore ESLint during build
  },
  typescript: {
    ignoreBuildErrors: true // Temporarily ignore TypeScript errors during build
  }
}

module.exports = nextConfig 