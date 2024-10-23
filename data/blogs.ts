import { readdir } from 'node:fs/promises';
import path from 'node:path';
const getBlogs = async () => {
    try {
        const fileNames = await readdir(path.resolve(process.cwd(), 'data', 'blog'), { recursive: true });
        const files = fileNames.filter(i => i.endsWith('.mdx'));
        const blogs = []
        for (const file of files) {
            const { frontmatter } = await import(`./blog/${file}`);
            const fileName = file.replace('.mdx', '');
            blogs.push({
                content: {
                    structuredData: {},
                    body: {
                        code: '',
                    },
                    slug: fileName,
                    path: `blog/${fileName}`,
                    file_path: `blog/${file}`,
                    file,
                    ...frontmatter,
                },
            })
        }
        return blogs;

    } catch (err) {
        console.error(err);
    }
    return [];
}
export default (await getBlogs());