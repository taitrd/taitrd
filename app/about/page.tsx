
import AuthorLayout from '@layouts/AuthorLayout'
import { genPageMetadata } from 'data/seo'
import Author from 'data/authors/default.mdx'
import siteMetadata from '@data/siteMetadata'
import { MDXComponents } from 'mdx/types'
const { name, avatar, email, github, linkedin, company } = siteMetadata
export const metadata = genPageMetadata({ title: 'About' })
const overrideComponents: MDXComponents = {

}
export default function Page() {
  return (
    <>
      <AuthorLayout content={{ name, avatar, email, github, linkedin, company }}>
        <Author components={overrideComponents} />
      </AuthorLayout>
    </>
  )
}
