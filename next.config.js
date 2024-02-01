
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
  nextConfig.assetPrefix = '/Frontend_Mentor/chat-app-css-illustration-master';
  nextConfig.basePath = '/Frontend_Mentor/chat-app-css-illustration-master';
}


module.exports = nextConfig;
