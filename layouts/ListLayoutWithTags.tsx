"use client";

import { usePathname } from "next/navigation";
import Link from "@components/Link";
import tagData from "@data/tag-data.json";
import { slug } from "@taitrd/next";
import dayjs from "dayjs";
import { DATE_LOCALE_FORMAT } from "@/lib/constants/format";
import { Button } from "@/components/ui/button";
import Image from "@/components/Image";
import { arise, cards, fadeInLeft, fadeInRight } from "@/lib/motion/variants";
import dynamic from "next/dynamic";
const MotionBlock = dynamic(() => import("@/components/motions/Block"));
const MotionListItem = dynamic(() => import("@/components/motions/ListItem"));
const Tag = dynamic(() => import("@components/Tag"));

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}
interface ListLayoutProps {
  posts: any[];
  title: string;
  initialDisplayPosts?: any[];
  pagination: PaginationProps;
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const basePath = pathname.split("/")[1];
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <MotionBlock variants={arise} className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!prevPage}
          >
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={
              currentPage - 1 === 1
                ? `/${basePath}/`
                : `/${basePath}/page/${currentPage - 1}`
            }
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}
          >
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </MotionBlock>
  );
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname();
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);

  const displayPosts =
    initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;

  return (
    <>
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="flex sm:space-x-8">
          <MotionBlock variants={fadeInLeft} className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
            <div className="px-6 py-4">
              {pathname.startsWith("/blog") ? (
                <h3 className="font-bold uppercase text-primary-500">
                  All Posts
                </h3>
              ) : (
                <Link
                  href={`/blog`}
                  className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                >
                  All Posts
                </Link>
              )}
              <ul>
                {sortedTags.map((t) => {
                  return (
                    <li key={t} className="my-3">
                      {pathname.split("/tags/")[1] === slug(t) ? (
                        <h3 className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500">
                          {`${t} (${tagCounts[t]})`}
                        </h3>
                      ) : (
                        <Link
                          href={`/tags/${slug(t)}`}
                          className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                          aria-label={`View posts tagged ${t}`}
                        >
                          {`${t} (${tagCounts[t]})`}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </MotionBlock>
          <MotionBlock variants={fadeInRight} className="bg-slate-100 dark:bg-slate-700 px-6 rounded shadow min-w-96">
            <ul>
              {displayPosts.map((post, k) => {
                const { path, date, title, summary, tags, images } = post;
                return (
                  <MotionListItem key={path} variants={cards} transition={{duration: 0.9, delay: 0.1 * k}} className="py-5">
                    <article className="flex flex-col xl:flex-row gap-2 items-center">
                      <div className="flex flex-col space-y-2 xl:space-y-0 xl:w-9/12">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime={date}>
                              {dayjs(date, "YYYY-MM-DD").format(
                                DATE_LOCALE_FORMAT
                              )}
                            </time>
                          </dd>
                        </dl>
                        <div className="space-y-3">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/${path}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags?.map((tag: any) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                      </div>
                      <Link href={`/${path}`} className="xl:w-3/12">
                        <Image
                          src={
                            (post.images && post.images[0]) ||
                            "/placeholder.jpg"
                          }
                          alt={post.images && post.images[0] ? post.title : 'Placeholder'}
                          height={400}
                          width={600}
                          className="object-cover rounded-md"
                        />
                      </Link>
                    </article>
                  </MotionListItem>
                );
              })}
              {!displayPosts.length && (
                <>
                  <p className="mb-6">No posts here</p>
                  <Button variant={"link"}>
                    <Link href="/blog">Back</Link>
                  </Button>
                </>
              )}
            </ul>
            {pagination?.totalPages > 0 && (
              <Pagination
                currentPage={pagination?.currentPage}
                totalPages={pagination?.totalPages}
              />
            )}
          </MotionBlock>
        </div>
      </div>
    </>
  );
}
