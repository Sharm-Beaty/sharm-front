/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {  //temporary setting
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.pixabay.com',
          port: '',
          pathname: '/photo/**',
        },
      ],
    },
};

module.exports = nextConfig;
