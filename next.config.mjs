import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: process.env.NODE_ENV == 'development' ? 'standalone' : 'export',
    distDir: process.env.NODE_ENV == 'development' ? '.dev' : '.next',
    cleanDistDir: true,
    images: {
        domains: ['avatars.githubusercontent.com', 'www.reshot.com'],
        dangerouslyAllowSVG: true,
    },
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    },
});

export default withMDX(nextConfig);
