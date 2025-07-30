// import PageTitle from '@components/PageTitle'
import PostSimple from '@layouts/PostSimple'
import PostLayout from '@layouts/PostLayout'
import PostBanner from '@layouts/PostBanner'
import siteMetadata from '@data/siteMetadata'
import { notFound } from 'next/navigation'
import { useMDXComponents } from 'mdx-components'
import MDXLayoutRenderer from '@components/MDXLayoutRenderer'
import blogs from '@data/blogs'
import { Metadata } from 'next'
const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}
const allBlogs = blogs.map(i => i.content)
const allAuthors: any[] = []
type PageParams = Promise<{ slug: string[] }>;
export async function generateMetadata({
  params: asyncParams,
}: {
  params: PageParams
}): Promise<Metadata | undefined> {
  const params = await asyncParams;
  const slug = decodeURI(params.slug.join('/'))
  const post = allBlogs.find((p) => p.slug === slug)
  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author: any) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return authorResults || {}
  })
  if (!post) {
    return undefined
  }

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const authors = authorDetails.map((author: any) => author?.name)
  let imageList = [siteMetadata.socialBanner]
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export function generateStaticParams() {
  const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }))
  return paths
}
export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { components } = useMDXComponents({ components: {} as any });
  const slug = decodeURI(params.slug.join('/'))
  // Filter out drafts in production
  const sortedCoreContents = allBlogs

  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
  if (postIndex === -1) {
    return notFound()
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]
  const post = allBlogs.find((p) => p.slug === slug)
  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author: any) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return authorResults || {}
  })
  const mainContent = post
  const jsonLd = post.structuredData
  jsonLd['author'] = authorDetails.map((author: any) => {
    return {
      '@type': 'Person',
      name: author?.name,
    }
  })
  const Layout = layouts[defaultLayout]
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
        <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} path={post.file}/>
      </Layout>
    </>
  )
}
