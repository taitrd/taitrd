/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: process.env.NODE_ENV == 'development' ? '.dev' : '.next',
};

export default nextConfig;
