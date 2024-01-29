
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  //images: { unoptimized: true },
  trailingSlash: true,
  distDir: 'build',
  reactStrictMode: true,
};

if (process.env.NODE_ENV !== 'development') {
  nextConfig.assetPrefix = '/Frontend_Mentor/ip-address-tracker-master';
  nextConfig.basePath = '/Frontend_Mentor/ip-address-tracker-master';
}


module.exports = nextConfig;
