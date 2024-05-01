import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV == 'development' ? 'standalone' : 'export',
    distDir: process.env.NODE_ENV == 'development' ? '.dev' : '.next',
    cleanDistDir: true,
    images: {
        domains: ['avatars.githubusercontent.com'],
    },
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
