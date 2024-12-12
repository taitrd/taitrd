import PullRequestAPI from "@/lib/github-apis/pull-request";
import { unstable_cache } from "next/cache";
export const getPrData = unstable_cache(async () => {
  const { allPulls: listPullRequests } =
    await PullRequestAPI().getListPullRequest();
  const prDataForChart = listPullRequests.map(
    ({ id, state, closed_at, merged_at, title }) => ({
      id,
      state,
      closed_at,
      merged_at,
      title,
    })
  );
  return prDataForChart;
}, ["github_list_pr"]);
