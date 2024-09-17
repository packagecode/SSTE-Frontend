import TerserPlugin from "terser-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.sstu.ac.bd',
      },
      {
        protocol: 'https',
        hostname: 'sstu.ac.bd',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'intentplanning.ca',
      },
      {
        protocol: 'http',
        hostname: '103.159.2.40',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      }
    ],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ];
    }

    return config;
  },
};

export default nextConfig;
