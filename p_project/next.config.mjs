/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the output: 'export' setting for development
  // We'll only use it for production builds
  ...(process.env.NODE_ENV === 'production' ? { 
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/MainRepo/p_project' : '',
    images: {
      unoptimized: true,
    }
  } : {}),
};

export default nextConfig;
