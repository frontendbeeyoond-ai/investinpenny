/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // enables static export to 'out/'

  images: {
    unoptimized: true,  // 🚀 disables optimization for static export
  },
    reactStrictMode: true,

images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'stelar-herbert-sinlike.ngrok-free.dev',
    },
  ],
},
};

module.exports = nextConfig;
