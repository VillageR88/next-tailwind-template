
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  //output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  distDir: 'serverApp',
  reactStrictMode: true,
};

//if (process.env.NODE_ENV !== 'development') {
// nextConfig.assetPrefix = '/server/app';
// nextConfig.basePath = '/server/app';
//}


module.exports = nextConfig;
