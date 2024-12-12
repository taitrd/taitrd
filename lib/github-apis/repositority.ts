// import { GITHUB_USERNAME } from "@/data/github.constant";
import octokitClient from "../octokit";

const RepositoryAPI = () => {
  const client = octokitClient();
  return {
    getUserRepositories: async () => {
      const { data } = await client.request("GET /user/repos", {
        // username: GITHUB_USERNAME || "john",
        headers: {},
      });
      return data;
    },
    getOrgRepositories: async (org: string) => {
      const { data } = await client.request("GET /orgs/{org}/repos", {
        org,
        headers: {},
      });
      return data;
    },
  };
};
export default RepositoryAPI;
