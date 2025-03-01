"use client";

import Image from "next/legacy/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useHomeContext } from "@/contexts/home";
import { fadeInRight, heading } from "@/lib/motion/variants";
import Link from "next/link";
import dynamic from "next/dynamic";

const MotionBlock = dynamic(() => import("./motions/Block"));
const MotionSpan = dynamic(() => import("./motions/Span"));

export default function LatestBlogs() {
  const { blogs: blogPosts } = useHomeContext();
  const router = useRouter();
  return (
    <MotionBlock variants={{
      ...fadeInRight, animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: 0.4,
        },
      }
    }} >
      <Card className="bg-white dark:bg-slate-700 border-0">
        <CardHeader>
          <CardTitle><MotionSpan variants={heading}>Latest Blog Posts</MotionSpan></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <div key={index} className="flex space-x-4 hover:[&>a>div>img]:shadow">
                <Link href={`/blog/${post.name || post.title}`}>
                  <div className="relative h-24 flex-shrink-0">
                    <Image
                      src={(post.images && post.images[0]) || "/placeholder.svg"}
                      alt={post.images && post.images[0] ? post.title : 'Placeholder'}
                      className="object-cover rounded-md"
                      width={400}
                      height={100}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {post.excerpt}
                    </p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <Button
            onClick={() => router.push("/blog")}
            variant="outline"
            className="w-full mt-4 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            View posts
          </Button>
        </CardContent>
      </Card>
    </MotionBlock>
  );
}
