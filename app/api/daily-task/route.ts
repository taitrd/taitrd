import { collectBitbucketContributions } from "@/data/collectors/collect-bitbucket-events";
import { collectGithubContributions } from "@/data/collectors/collect-github-events";
import { collectGitlabContributions } from "@/data/collectors/collect-gitlab-events";
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
