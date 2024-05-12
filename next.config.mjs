/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
            port: '',
            pathname: '/products/**',
        },
        ],
        domains: [ "fakestoreapi.com" ],
        unoptimized: true,
    },
};

export default nextConfig;
