"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useHomeContext } from "@/contexts/home";
import Link from "next/link";

export function LatestBlogs() {
  const { blogs: blogPosts } = useHomeContext();
  const router = useRouter();
  return (
    <Card className="bg-white dark:bg-slate-700 border-0">
      <CardHeader>
        <CardTitle>Latest Blog Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex space-x-4">
              <Link href={`/blog/${post.title}`}>
                <div className="relative h-24 w-24 flex-shrink-0">
                  <Image
                    src={(post.images && post.images[0]) || "/placeholder.svg"}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
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
          View All Posts
        </Button>
      </CardContent>
    </Card>
  );
}
