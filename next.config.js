
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
  nextConfig.assetPrefix = '/Frontend_Mentor/skilled-elearning-landing-page';
  nextConfig.basePath = '/Frontend_Mentor/skilled-elearning-landing-page';
}


module.exports = nextConfig;
