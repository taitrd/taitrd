import PullRequestAPI from "@/lib/github-apis/pull-request";
export const getPrData = async () => {
  const { allPulls: listPullRequests } =
    await PullRequestAPI().getListPullRequest();
  const prDataForChart = listPullRequests.map(
    ({ id, state, closed_at, merged_at, title }) => ({
      id,
      state,
      closed_at,
      merged_at,
      title,
    }),
  );
  return prDataForChart;
};
