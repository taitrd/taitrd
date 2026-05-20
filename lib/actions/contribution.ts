"use server";

import { collectBitbucketContributions } from "@/data/collectors/collect-bitbucket-events";
import { collectGithubContributions } from "@/data/collectors/collect-github-events";
import { collectGitlabContributions } from "@/data/collectors/collect-gitlab-events";
import { unstable_cache } from "next/cache";
import { CacheTag } from "../enums/cach-tag";

/**
 * @deprecated using v2
 * @returns
 */
export const getContributions = async () => {
  try {
    const data = await unstable_cache(
      async () => {
        const github_contributions = await collectGithubContributions();
        const gitlab_contributions = await collectGitlabContributions();
        const bitbucket_contributions = await collectBitbucketContributions();
        return {
          github_contributions,
          bitbucket_contributions,
          gitlab_contributions,
        };
      },
      ["all_contributions"],
      { tags: [CacheTag.Contributions], revalidate: 86400 },
    )();

    return {
      success: true,
      data: data,
    };
  } catch (error) {
    console.error("Error occurred:", error);
    return { success: false, message: "Failed to get contributions" };
  }
};
