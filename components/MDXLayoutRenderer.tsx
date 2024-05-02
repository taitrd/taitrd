import dynamic from "next/dynamic"
import CustomLink from "./Link"
import { useMemo } from "react"
import Image from "./Image"

export const MDXComponents = {
    Image,
    a: CustomLink,
    wrapper: ({ components, layout, ...rest }: any) => {
        const Layout = require(`../layouts/${layout}`).default
        return <Layout {...rest} />
    },
}

const MDXLayoutRenderer = (props: any) => {
    const { layout, mdxSource, path, ...rest } = props
    const MDXLayout = useMemo(() => dynamic(() => import(`../data/blog/${path}`)), [path])
    return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
export default MDXLayoutRenderer