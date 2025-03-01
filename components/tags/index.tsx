"use client";
import Link from "@components/Link";
import Tag from "@components/Tag";
import { slug } from "@taitrd/next";
import { Card, CardContent } from "@/components/ui/card";
import tagData from "@data/tag-data.json";
import { fadeInLeft } from "@/lib/motion/variants";
import dynamic from "next/dynamic";
const MotionCard = dynamic(() => import("../motions/Card"));
const MotionHeading = dynamic(() => import("../motions/Heading"));

const Tags = () => {
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  return (
    <div className="flex flex-col items-start justify-start ">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <MotionHeading
          variants={fadeInLeft}
          className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
        >
          Tags
        </MotionHeading>
      </div>
      <Card className="flex flex-wrap bg-slate-50 dark:bg-gray-900 border-0 shadow pt-4 w-full">
        <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full flex-wrap">
          {tagKeys.length === 0 && "No tags found."}
          {tagKeys.map((t, k) => {
            return (
              <MotionCard
                transition={{ duration: 0.3, delay: 0.01 * k }}
                key={t}
                className=""
              >
                <Tag text={t} />
                <Link
                  href={`/tags/${slug(t)}`}
                  className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                  aria-label={`View posts tagged ${t}`}
                >
                  {` (${tagCounts[t]})`}
                </Link>
              </MotionCard>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};
export default Tags;
