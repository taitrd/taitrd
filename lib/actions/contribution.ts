"use server";

import { collectBitbucketContributions } from "@/data/contributions/bitbucket";
import { collectGithubContributions } from "@/data/contributions/github";
import { collectGitlabContributions } from "@/data/contributions/gitlab";

export const getContributions = async () => {
  try {
    const github_contributions = await collectGithubContributions();
    const gitlab_contributions = await collectGitlabContributions();
    const bitbucket_contributions = await collectBitbucketContributions();

    return {
      success: true,
      data: {
        github_contributions,
        bitbucket_contributions,
        gitlab_contributions,
      },
    };
  } catch (error) {
    console.error("Error occurred:", error);
    return { success: false, message: "Failed to get contributions" };
  }
};
