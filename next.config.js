/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Configura el file-loader para manejar archivos MP3
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: isServer ? '/sounds/[name].[ext]' : 'public/sounds/[name].[ext]',
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
