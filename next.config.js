const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'beautyshop.fly.dev',
                port: '',
            }
        ],
    }
    ,
}

module.exports = withNextIntl(nextConfig)
