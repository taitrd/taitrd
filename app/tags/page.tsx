
import { genPageMetadata } from "@data/seo";
import dynamic from "next/dynamic";

const Tags = dynamic(() => import("@/components/tags"));

export const metadata = genPageMetadata({
  title: "Tags",
  description: "Things I blog about",
});

export default async function TagsPage() {
  return (
    <Tags />
  );
}
