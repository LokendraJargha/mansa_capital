/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowedForwardedHosts: ['jubilant-waffle-4wpjqwpqg6p3xxx-3000.app.github.dev'],
          allowedOrigins: ["jubilant-waffle-4wpjqwpqg6p3xxx-3000.app.github.dev"],
        },
      },
};

export default nextConfig;
