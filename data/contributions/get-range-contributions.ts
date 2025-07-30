import { unstable_cache } from "next/cache";
import { getDateKeyValue } from "@/lib/dynamodb/key-values";
import { CACHE_VERSION } from "@/lib/constants/cache";
import { scanCommand } from "./contribution-api";
import { CacheTag } from "@/lib/enums/cach-tag";
const keyValue = getDateKeyValue();
export const getGithubRangeContributions = unstable_cache(
  scanCommand,
  [CACHE_VERSION, "github_range_contributes", keyValue],
  { revalidate: 3600, tags: [CacheTag.Contributions] }
);

export const getGitlabRangeContributions = unstable_cache(
  scanCommand,
  [CACHE_VERSION, "gitlab_range_contributes", keyValue],
  { revalidate: 3600, tags: [CacheTag.Contributions] }
);

export const getBitbucketRangeContributions = unstable_cache(
  scanCommand,
  [CACHE_VERSION, "bitbucket_range_contributes", keyValue],
  { revalidate: 3600, tags: [CacheTag.Contributions] }
);
