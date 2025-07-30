import { unstable_cache } from "next/cache";
import { getDateKeyValue } from "@/lib/dynamodb/key-values";
import { CACHE_VERSION } from "@/lib/constants/cache";
import { getCommandWithEntry } from "./contribution-api";
import { CacheTag } from "@/lib/enums/cach-tag";
const keyValue = getDateKeyValue();
export const getGithubEntryContributions = unstable_cache(
  getCommandWithEntry,
  [CACHE_VERSION, "contributes_entry", keyValue],
  { revalidate: 3600, tags: [CacheTag.Contributions] }
);
export const getGitlabEntryContributions = unstable_cache(
  getCommandWithEntry,
  [CACHE_VERSION, "gitlab_contributes_entry", keyValue],
  { revalidate: 3600, tags: [CacheTag.Contributions] }
);
export const getBitbucketEntryContributions = unstable_cache(
  getCommandWithEntry,
  [CACHE_VERSION, "bitbucket_contributes_entry", keyValue],
  { revalidate: 3600, tags: [CacheTag.Contributions] }
);
