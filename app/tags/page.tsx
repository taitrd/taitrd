import Link from "@components/Link";
import Tag from "@components/Tag";
import tagData from "@data/tag-data.json";
import { genPageMetadata } from "@data/seo";
import { slug } from "@taitrd/next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = genPageMetadata({
  title: "Tags",
  description: "Things I blog about",
});

export default async function Page() {
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  // const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);
  return (
    <>
      <div className="flex flex-col items-start justify-start ">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <Card className="flex flex-wrap bg-slate-50 dark:bg-gray-900 border-0 shadow pt-4">
          <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full flex-wrap">
            {tagKeys.length === 0 && "No tags found."}
            {tagKeys.map((t) => {
              return (
                <div key={t} className="">
                  <Tag text={t} />
                  <Link
                    href={`/tags/${slug(t)}`}
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                    aria-label={`View posts tagged ${t}`}
                  >
                    {` (${tagCounts[t]})`}
                  </Link>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
