/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/soccer-schedule-app' : '',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
