/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["nicholas-e-wagner.com", "www.nicholas-e-wagner.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
