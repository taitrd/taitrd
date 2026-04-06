import type { NextRequest } from "next/server";
import { collectPlatformContributions } from "@/data/contributions/collect-platform-contributions";
import { revalidateTag } from "next/cache";
import { CacheTag } from "@/lib/enums/cach-tag";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }
  revalidateTag(CacheTag.ContributionsHistory);
  await collectPlatformContributions();
  return Response.json({ revalidated: true, now: Date.now() });
}
