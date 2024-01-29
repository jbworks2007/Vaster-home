/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "teemingpopcorn.backendless.app",
      },
    ],
  },
};

module.exports = nextConfig;
