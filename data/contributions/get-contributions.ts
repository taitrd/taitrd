import { unstable_cache } from "next/cache";
import { CACHE_VERSION } from "@/lib/constants/cache";
import { getDateKeyValue } from "@/lib/dynamodb/key-values";
import { getCommand } from "./contribution-api";
const keyValue = getDateKeyValue();
export const getGithubContributions = unstable_cache(
  getCommand,
  [CACHE_VERSION, "github_contributes", keyValue],
  {
    tags: ['github', 'contributions_item'],
    revalidate: 3600,
  }
);

export const getGitlabContributions = unstable_cache(
  getCommand,
  [CACHE_VERSION, "gitlab_contributes", keyValue],
  {
    tags: ['gitlab', 'contributions_item'],
    revalidate: 3600,
  }
);

export const getBitbucketContributions = unstable_cache(
  getCommand,
  [CACHE_VERSION, "bitbucket_contributes", keyValue],
  {
    tags: ['bitbucket', 'contributions_item'],
    revalidate: 3600,
  }
);
