const { i18n } = require("./next-i18next.config");
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV !== "production",
  runtimeCaching,
});

module.exports = withPWA({
  i18n,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi-production-15df.up.railway.app",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
    ],
  },
  experimental: {
    newNextLinkBehavior: false,
  },
});
