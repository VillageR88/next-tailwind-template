
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  //output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  distDir: 'serverTestApp',
  reactStrictMode: true,
};

if (process.env.NODE_ENV !== 'development') {
  nextConfig.assetPrefix = '/serverTestApp';
  nextConfig.basePath = '/serverTestApp';
}


module.exports = nextConfig;
