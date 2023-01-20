/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"]
  },
  i18n: {
    locales: ["de"],
    defaultLocale: "de",
  },
}


module.exports = nextConfig
