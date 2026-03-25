// import { GITHUB_USERNAME } from "@/data/github.constant";
import octokitClient from "../octokit";
import OrganizationAPI from "./organization";

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
    getListRepositories: async () => {
      const repos = await RepositoryAPI().getUserRepositories();
      const orgs = await OrganizationAPI().getUserOrganizations();
      const orgRepos = [];
      for (const org of orgs) {
        const reposByOrg = await RepositoryAPI().getOrgRepositories(org.login);
        orgRepos.push(...reposByOrg);
      }
      return {
        repos,
        orgRepos,
      };
    },
  };
};
export default RepositoryAPI;
