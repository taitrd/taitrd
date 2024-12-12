import ListLayout from "@layouts/ListLayoutWithTags";
import getBlogs from "@data/blogs";
import { POSTS_PER_PAGE } from "@/lib/constants/pagination";
const allBlogs = getBlogs;

export async function generateStaticParams() {
  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
  return paths;
}

export default function Page({ params }: { params: { page: string } }) {
  const posts = allBlogs.map((i) => i.content);
  const pageNumber = parseInt(params.page as string);
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(allBlogs.length / POSTS_PER_PAGE),
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
