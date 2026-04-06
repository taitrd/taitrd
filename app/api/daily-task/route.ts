import { collectBitbucketContributions } from "@/data/contributions/collect-bitbucket-contributions";
import { collectGithubContributions } from "@/data/contributions/collect-github-contributions";
import { collectGitlabContributions } from "@/data/contributions/collect-gitlab-contributions";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  // Your scheduled logic here (e.g., database updates, sending emails)
  await collectGithubContributions();
  await collectGitlabContributions();
  await collectBitbucketContributions();

  console.log("Cron job ran at:", new Date().toISOString());

  return new Response("Cron job executed");
}
