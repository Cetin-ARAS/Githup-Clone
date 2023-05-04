/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  env: {
    NEXT_API_BASE: process.env.NEXT_API_BASE,
    NEXT_PUBLIC: process.env.NEXT_PUBLIC,
    NEXT_AUTH_SECRET_KEY: process.env.NEXT_AUTH_SECRET_KEY,
    NEXT_AUTH_JWT_SECRET_KEY: process.env.NEXT_AUTH_JWT_SECRET_KEY,
    NEXT_AUTH_CLIENT_TOKEN_WEB: process.env.NEXT_AUTH_CLIENT_TOKEN_WEB,
    NEXT_AUTH_CLIENT_TOKEN_MOBILE: process.env.NEXT_AUTH_CLIENT_TOKEN_MOBILE,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXT_PUBLIC_APP_LOGO: process.env.NEXT_PUBLIC_APP_LOGO,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
