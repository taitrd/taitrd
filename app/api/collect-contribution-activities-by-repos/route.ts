import type { NextRequest } from "next/server";
import { collectBitbucketContributions } from "@/data/contributions/collect-bitbucket-contributions";
import { collectGitlabContributions } from "@/data/contributions/collect-gitlab-contributions";
import { revalidateTag } from "next/cache";
import { CacheTag } from "@/lib/enums/cach-tag";
import { collectGithubContributionsByRepos } from "@/data/contributions/collect-github-contributions-by-repos";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }
  revalidateTag(CacheTag.Contributions);
  await collectGithubContributionsByRepos();
  await collectGitlabContributions();
  await collectBitbucketContributions();
  return Response.json({ revalidated: true, now: Date.now() });
}
