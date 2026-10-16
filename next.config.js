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
  experimental: {
    // Node 24 auf Vercel: @portabletext/toolkit liefert ESM in .js-Dateien,
    // deshalb Server-Pakete per require (CommonJS) laden
    esmExternals: false,
  },
}


module.exports = nextConfig
