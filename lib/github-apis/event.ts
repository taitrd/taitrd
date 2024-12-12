import { GITHUB_USERNAME } from "@/lib/constants/github.constant";
import octokitClient from "../octokit";
import RepositoryAPI from "./repositority";
import OrganizationAPI from "./organization";
const client = octokitClient();
const EventAPI = () => {
  return {
    getEventsForAuthenticatedUser: async () => {
      const allEvents = await client.paginate(
        client.rest.activity.listEventsForAuthenticatedUser,
        {
          username: GITHUB_USERNAME || "john",
          per_page: 100,
        }
      );
      return {
        allEvents,
      };
    },
    getListRepositoryEvents: async (perPage = 100) => {
      const allEvents = [];
      const repos = await RepositoryAPI().getUserRepositories();
      for (const repo of repos) {
        const { data: events } = await client.request(
          "GET /repos/{owner}/{repo}/events",
          {
            owner: repo.owner.login,
            repo: repo.name,
            headers: {},
            per_page: perPage,
          }
        );
        allEvents.push(...events);
      }
      const orgs = await OrganizationAPI().getUserOrganizations();
      for (const org of orgs) {
        const orgRepos = await RepositoryAPI().getOrgRepositories(org.login);
        for (const orgRepo of orgRepos) {
          const { data: events, url } = await client.request(
            "GET /repos/{owner}/{repo}/events",
            {
              owner: org.login,
              repo: orgRepo.name,
              headers: {},
              per_page: perPage,
            }
          );
          allEvents.push(...events);
        }
      }
      return {
        repos,
        allEvents,
      };
    },
  };
};
export default EventAPI;
