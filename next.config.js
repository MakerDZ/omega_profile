/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['us-east-1.tixte.net', 'cdn.discordapp.com', 'i.scdn.co'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
