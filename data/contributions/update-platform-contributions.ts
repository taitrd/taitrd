import { Contributions } from "@/lib/types/contribution.type";
import { getContributionsByPlatformCommand } from "./commands/get-contributions-by-platform";
import { putContributionsByPlatform } from "./commands/put-contributions-by-platform";
import {
  getBitbucketRangeContributions,
  getGithubRangeContributions,
  getGitlabRangeContributions,
} from "./get-range-contributions";
import { mergeOldGroups } from "./utils/merge-old-groups";
import { mergeOldEntries } from "./utils/merge-old-entries";

export const collectPlatformContributions = async () => {
  /** Github data instance */
  const gitHubData = await getContributionsByPlatformCommand("github", {
    status: "open",
  });

  if (gitHubData) {
    /** Scan and get events in old range with key starts "contributions_" */
    const oldContributes =
      (await getGithubRangeContributions()) as Contributions[];

    const mergedGroupedEvents = mergeOldGroups(gitHubData, oldContributes);
    const mergedEntryEvents = mergeOldEntries(gitHubData, oldContributes);

    await putContributionsByPlatform("github", {
      groupedEvents: mergedGroupedEvents,
      entryEvents: mergedEntryEvents,
      allEvents: [],
    });

    /** Scan and get events in old range with key starts "github_contributions" */
    const oldGithubContributes = (await getGithubRangeContributions(
      "github_contributions",
    )) as Contributions[];

    const mergedGithubGroupedEvents = mergeOldGroups(
      gitHubData,
      oldGithubContributes,
    );

    const mergedGithubEntryEvents = mergeOldEntries(
      gitHubData,
      oldGithubContributes,
    );

    await putContributionsByPlatform("github", {
      groupedEvents: mergedGithubGroupedEvents,
      entryEvents: mergedGithubEntryEvents,
      allEvents: [],
    });
  }

  /** gitlab data instance */
  const gitlabData = await getContributionsByPlatformCommand("gitlab", {
    status: "open",
  });

  if (gitlabData) {
    /** Scan and get events in old range */
    const oldGitlabContributes = (await getGitlabRangeContributions(
      "gitlab_contributions",
    )) as Contributions[];

    const mergedGitlabGroupedEvents = mergeOldGroups(
      gitlabData,
      oldGitlabContributes,
    );

    await putContributionsByPlatform("gitlab", {
      groupedEvents: mergedGitlabGroupedEvents,
      allEvents: [],
    });
  }

  /** bitbucket data instance */
  const bitbucketData = await getContributionsByPlatformCommand("bitbucket", {
    status: "open",
  });

  if (bitbucketData) {
    /** Scan and get events in old range */
    const oldBitbucketContributes = (await getBitbucketRangeContributions(
      "bitbucket_contributions",
    )) as Contributions[];

    const mergedBitbucketGroupedEvents = mergeOldGroups(
      bitbucketData,
      oldBitbucketContributes,
    );

    await putContributionsByPlatform("bitbucket", {
      groupedEvents: mergedBitbucketGroupedEvents,
      allEvents: [],
    });
  }
};
