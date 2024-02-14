
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  distDir: 'build',
  reactStrictMode: true,
};

if (process.env.NODE_ENV !== 'development') {
  nextConfig.assetPrefix = '/Frontend_Mentor/link-sharing-app';
  nextConfig.basePath = '/Frontend_Mentor/link-sharing-app';
}


module.exports = nextConfig;
