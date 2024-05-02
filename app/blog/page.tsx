import ListLayout from '@layouts/ListLayoutWithTags'
import { genPageMetadata } from 'data/seo'
import getBlogs from '@data/blogs'
const POSTS_PER_PAGE = 5
const blogs = getBlogs;
export const metadata = genPageMetadata({ title: 'Blog' })

export default function BlogPage() {
  const posts = blogs.map(i => i.content)
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
