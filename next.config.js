/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.youtube.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;

