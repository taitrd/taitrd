import { GITHUB_USERNAME } from "@/lib/constants/github.constant";
import octokitClient from "../octokit";
import RepositoryAPI from "./repositority";
import OrganizationAPI from "./organization";
const client = octokitClient();
const EventAPI = () => {
  return {
    /**
     * @deprecated
     * @returns
     */
    getEventsForAuthenticatedUser: async () => {
      const allEvents = await client.paginate(
        client.rest.activity.listEventsForAuthenticatedUser,
        {
          username: GITHUB_USERNAME || "john",
          per_page: 100,
        },
      );
      return {
        allEvents,
      };
    },
    /**
     * REST API - List events for the authenticated user
     * @link https://docs.github.com/en/rest/activity/events?apiVersion=2026-03-10#list-events-for-the-authenticated-user
     * @returns
     */
    getEventsForAuthenticatedUserByRequest: async () => {
      const { data: events } = await client.request(
        "GET /users/{username}/events",
        {
          username: GITHUB_USERNAME || "john",
          per_page: 100,
        },
      );
      return {
        allEvents: events,
      };
    },
    getListRepositoryEvents: async (page = 1, perPage = 100) => {
      const allEvents = [];
      const repos = await RepositoryAPI().getUserRepositories();
      for (const repo of repos) {
        const { data: events } = await client.request(
          "GET /repos/{owner}/{repo}/events",
          {
            owner: repo.owner.login,
            repo: repo.name,
            headers: {},
            page: page,
            per_page: perPage,
          },
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
              page: page,
              per_page: perPage,
            },
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
