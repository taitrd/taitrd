import AuthorLayout from "@layouts/AuthorLayout";
import { genPageMetadata } from "data/seo";
import Author from "data/authors/default.mdx";
import siteMetadata from "@data/siteMetadata";
import { MDXComponents } from "mdx/types";
const { name, avatar, email, github, linkedin, company } = siteMetadata;
export const metadata = genPageMetadata({ title: "About" });
const h2 = ({ children }: any) => (
  <h2 className="dark:text-gray-200">{children}</h2>
);
const h3 = ({ children }: any) => (
  <h3 className="dark:text-gray-200 mb-1">{children}</h3>
);
const blockquote = ({ children }: any) => (
  <blockquote className="dark:text-gray-200">{children}</blockquote>
);
const strong = ({ children }: any) => (
  <strong className="dark:text-gray-200">{children}</strong>
);
const overrideComponents: MDXComponents = {
  h2,
  h3,
  strong,
  blockquote,
};
export default function Page() {
  return (
    <>
      <AuthorLayout
        content={{ name, avatar, email, github, linkedin, company }}
      >
        <Author components={overrideComponents} />
      </AuthorLayout>
    </>
  );
}
