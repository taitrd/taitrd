import { GITHUB_USERNAME } from "@/lib/constants/github.constant";
import octokitClient from "../octokit";
import RepositoryAPI from "./repositority";

const PullRequestAPI = () => {
  const client = octokitClient();
  return {
    getListPullRequest: async () => {
      const allPulls = [];
      const repos = await RepositoryAPI().getUserRepositories();
      for (const repo of repos) {
        const { data: pulls, url } = await client.request(
          "GET /repos/{owner}/{repo}/pulls",
          {
            owner: GITHUB_USERNAME || "john",
            repo: repo.name,
            headers: {},
            state: "all",
          }
        );
        allPulls.push(...pulls);
      }
      return {
        repos,
        allPulls
      };
    },
  };
};
export default PullRequestAPI;
