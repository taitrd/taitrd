import { unstable_cache } from "next/cache";

export const getCommits = unstable_cache(async () => {
  return [];
}, ["github_list_commits"]);
