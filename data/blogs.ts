import { readdir } from "node:fs/promises";
import path from "node:path";
export type Blog = {
  content: {
    date: string;
    file_path: string;
    file: string;
    images: string[];
    path: string;
    slug: string;
    summary: string;
    structuredData: any;
    tags: string[];
    title: string;
    authors: any[];
    body: any;
    toc: any;
  };
};
const getBlogs = async () => {
  try {
    const filePath = path.resolve(process.cwd(), "data", "blog");
    const fileNames = await readdir(filePath, { recursive: true });
    const files = fileNames
      .filter((i) => i.endsWith(".mdx"))
      .map((file) => file.replace("\\", "/"));
    const blogs = [];
    for (const file of files) {
      try {
        const { frontmatter } = await import(`./blog/${file}`);
        const fileName = file.replace(".mdx", "");
        blogs.push({
          content: {
            structuredData: {},
            body: {
              code: "",
            },
            slug: fileName,
            path: `blog/${fileName}`,
            file_path: `blog/${file}`,
            file,
            ...frontmatter,
          },
        });
      } catch (error) {
        console.error(error);
      }
    }
    return blogs as Blog[];
  } catch (err) {
    console.error(err);
  }
  return [];
};
export default await getBlogs();
