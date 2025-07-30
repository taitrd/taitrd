import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
export const maxDuration = 5;
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  const tag = request.nextUrl.searchParams.get("tag");
  if (tag) {
    revalidateTag(tag);
    console.info("revalidate", tag);
  }
  return Response.json({ revalidated: true, now: Date.now() });
}
