/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "tailwindui.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  env: {
    AUTH_URL: process.env.NEXTAUTH_URL,
  },
};

module.exports = nextConfig;
