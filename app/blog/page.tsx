import ListLayout from "@layouts/ListLayoutWithTags";
import { genPageMetadata } from "data/seo";
import getBlogs from "@data/blogs";
import { POSTS_PER_PAGE } from "@/lib/constants/pagination";
const blogs = getBlogs;
export const metadata = genPageMetadata({ title: "Blog" });

export default function BlogPage(props: any) {
  const posts = blogs.map((i) => i.content)
    .sort((a, b) => b.date.localeCompare(a.date));
  const pageNumber = 1;
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.round(blogs.length / POSTS_PER_PAGE),
  };
  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  );
}
