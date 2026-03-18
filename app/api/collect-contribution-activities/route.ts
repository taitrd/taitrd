import type { NextRequest } from "next/server";
import { collectBitbucketContributions } from "@/data/contributions/bitbucket";
import { collectGithubContributions } from "@/data/contributions/github";
import { collectGitlabContributions } from "@/data/contributions/gitlab";
import { revalidateTag } from "next/cache";
import { CacheTag } from "@/lib/enums/cach-tag";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }
  revalidateTag(CacheTag.Contributions);
  revalidateTag(CacheTag.Github);
  revalidateTag(CacheTag.Gitlab);
  revalidateTag(CacheTag.Bitbucket);
  await collectGithubContributions();
  await collectGitlabContributions();
  await collectBitbucketContributions();

  return Response.json({ revalidated: true, now: Date.now() });
}
