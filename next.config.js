
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

if (process.env.NODE_ENV !== 'development') {
  nextConfig.assetPrefix = '/malySkarb';
  nextConfig.basePath = '/malySkarb';
}

nextConfig.distDir = 'build';
nextConfig.reactStrictMode = true;

module.exports = nextConfig;
