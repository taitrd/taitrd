import siteMetadata from "@data/siteMetadata";
import ListLayout from "@layouts/ListLayoutWithTags";
import tagData from "@data/tag-data.json";
import { genPageMetadata } from "@data/seo";
import { Metadata } from "next";
import { POSTS_PER_PAGE } from "@/lib/constants/pagination";
import getBlogs from "@data/blogs";
const blogs = getBlogs;
export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}): Promise<Metadata> {
  const tag = decodeURI(params.tag);
  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged content`,
    alternates: {
      canonical: "./",
      types: {
        "application/rss+xml": `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  });
}
export async function generateStaticParams() {
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const paths = tagKeys.map((tag) => ({
    tag: encodeURI(tag),
  }));
  return paths;
}
export default function TagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURI(params.tag);
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(" ").join("-").slice(1);
  const posts = blogs
    .filter((i) => (i.content?.tags || []).includes(tag))
    .map((i) => i.content);
  const pageNumber = 1;
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.round(posts.length / POSTS_PER_PAGE),
  };
  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      title={title}
      pagination={pagination}
    />
  );
}
