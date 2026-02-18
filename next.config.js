/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // enables static export to 'out/'

  images: {
    unoptimized: true,  // 🚀 disables optimization for static export
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
  domains: ["stelar-herbert-sinlike.ngrok-free.dev"],
}
};

module.exports = nextConfig;
