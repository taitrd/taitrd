import { collectBitbucketContributions } from "@/data/contributions/bitbucket";
import { collectPlatformContributions } from "@/data/contributions/collect-platform-contributions";
import { collectGithubContributions } from "@/data/contributions/github";
import { collectGitlabContributions } from "@/data/contributions/gitlab";
import { CacheTag } from "@/lib/enums/cach-tag";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  // Your scheduled logic here (e.g., database updates, sending emails)
  revalidateTag(CacheTag.Contributions);
  revalidateTag(CacheTag.Github);
  revalidateTag(CacheTag.Gitlab);
  revalidateTag(CacheTag.Bitbucket);
  await collectGithubContributions();
  await collectGitlabContributions();
  await collectBitbucketContributions();
  await collectPlatformContributions();

  console.log("Cron job ran at:", new Date().toISOString());

  return new Response("Cron job executed");
}
