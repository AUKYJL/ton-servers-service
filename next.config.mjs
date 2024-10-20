/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  // output: "export",
  images: {
    domains: ["api.telegram.org"], // Добавьте сюда домен, с которого загружаются изображения
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
