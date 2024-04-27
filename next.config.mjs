/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV == 'development' ? 'standalone' : 'export',
    distDir: process.env.NODE_ENV == 'development' ? '.dev' : '.next',
    cleanDistDir: true,
};


export default nextConfig;
