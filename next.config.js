/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  distDir: 'build',
  assetPrefix: '/Frontend_Mentor/fylo-dark-theme-landing-page-master/',
  reactStrictMode: true,
}

module.exports = nextConfig
