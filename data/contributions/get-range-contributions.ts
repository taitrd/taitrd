import { unstable_cache } from "next/cache";
import { getDateKeyValue } from "@/lib/dynamodb/key-values";
import { CACHE_VERSION } from "@/lib/constants/cache";
import { scanCommand } from "./contribution-api";
const keyValue = getDateKeyValue();
export const getGithubRangeContributions = unstable_cache(
  scanCommand,
  [CACHE_VERSION, "github_range_contributes", keyValue],
  { revalidate: 3600 }
);

export const getGitlabRangeContributions = unstable_cache(
  scanCommand,
  [CACHE_VERSION, "gitlab_range_contributes", keyValue],
  { revalidate: 3600 }
);

export const getBitbucketRangeContributions = unstable_cache(
  scanCommand,
  [CACHE_VERSION, "bitbucket_range_contributes", keyValue],
  { revalidate: 3600 }
);
