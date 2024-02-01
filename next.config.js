
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
  nextConfig.assetPrefix = '/Frontend_Mentor/static-job-listings-master';
  nextConfig.basePath = '/Frontend_Mentor/static-job-listings-master';
}


module.exports = nextConfig;
