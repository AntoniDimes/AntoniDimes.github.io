/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/MainRepo' : '',
  assetPrefix: isProd ? '/MainRepo/' : '',
  trailingSlash: true,
}

module.exports = nextConfig
