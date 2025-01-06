import getBlogs from "@data/blogs";
import dynamic from "next/dynamic";
const HomeProvider = dynamic(() => import("@/contexts/HomeProvider"));
const HomePage = dynamic(() => import("@/components/home"));

const blogs = getBlogs;
export default function Home() {
  const blogPosts = blogs
    .map((i) => i.content)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);
  return (
    <HomeProvider blogs={blogPosts}>
      <HomePage />
    </HomeProvider>
  );
}
