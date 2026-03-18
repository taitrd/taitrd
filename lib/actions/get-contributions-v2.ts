"use server";

import { unstable_cache } from "next/cache";
import { CacheTag } from "../enums/cach-tag";
import { getContributionsByPlatformCommand } from "@/data/contributions/commands/get-contributions-by-platform";
import { Contributions } from "../types/contribution.type";

export const getContributionsV2 = async () => {
  try {
    const contributions = await unstable_cache(
      async () => {
        const github_contributions =
          await getContributionsByPlatformCommand("github");
        const gitlab_contributions =
          await getContributionsByPlatformCommand("gitlab");
        const bitbucket_contributions =
          await getContributionsByPlatformCommand("bitbucket");
        return {
          github_contributions,
          bitbucket_contributions,
          gitlab_contributions,
        };
      },
      ["all_contributions_v2"],
      { tags: [CacheTag.Contributions], revalidate: 86400 },
    )();

    const bitbucket_grouped_events = Object.entries(
      contributions.bitbucket_contributions?.grouped_events || {},
    ).map(([_d, e]) => e);
    const bitbucket_contributions = contributions.bitbucket_contributions
      ? {
          ...contributions.bitbucket_contributions,
          contributions: {
            grouped_events: bitbucket_grouped_events.filter(
              (i) => i.events?.length,
            ),
            entry_events: bitbucket_grouped_events.filter(
              (i) => !i.events?.length,
            ),
          },
        }
      : undefined;

    const gitlab_grouped_events = Object.entries(
      contributions.gitlab_contributions?.grouped_events || {},
    ).map(([_d, e]) => e);
    const gitlab_contributions = contributions.gitlab_contributions
      ? {
          ...contributions.gitlab_contributions,
          contributions: {
            grouped_events: gitlab_grouped_events.filter(
              (i) => i.events?.length,
            ),
            entry_events: gitlab_grouped_events.filter(
              (i) => !i.events?.length,
            ),
          },
        }
      : undefined;

    const github_grouped_events = Object.entries(
      contributions.github_contributions?.grouped_events || {},
    ).map(([_d, e]) => e);
    const github_contributions = {
      ...contributions.github_contributions,
      contributions: {
        grouped_events: github_grouped_events.filter((i) => i.events?.length),
        entry_events: github_grouped_events.filter((i) => !i.events?.length),
      },
    } as Contributions;
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
