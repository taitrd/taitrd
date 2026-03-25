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
    getEventsForAuthenticatedUser: async (page = 1, perPage = 100) => {
      const allEvents = await client.paginate(
        client.rest.activity.listEventsForAuthenticatedUser,
        {
          username: GITHUB_USERNAME || "john",
          page: page,
          per_page: perPage,
        },
      );
      console.log(
        `Fetched events for authenticated user ${allEvents.length} total events. ${page}/${perPage}`,
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
    getEventsForAuthenticatedUserByRequest: async (page = 1, perPage = 100) => {
      const { data: events } = await client.request(
        "GET /users/{username}/events",
        {
          username: GITHUB_USERNAME || "john",
          page: page,
          per_page: perPage,
          headers: {
            authorization: `Bearer ${process.env.GIT_TOKEN}`,
            "X-GitHub-Api-Version": "2026-03-10",
          },
        },
      );
      console.log(
        `Fetched events for authenticated user by REST request ${events.length} total events.`,
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
    getEventsByRepos: async (
      repos: { user: string; repo: string }[],
      page = 1,
      perPage = 100,
    ) => {
      const allEvents = [];
      for (const repo of repos) {
        const { data: events } = await client.request(
          "GET /repos/{owner}/{repo}/events",
          {
            owner: repo.user,
            repo: repo.repo,
            headers: {},
            page: page,
            per_page: perPage,
          },
        );
        allEvents.push(...events);
      }
      console.log(
        `Fetched events by all repos ${allEvents.length} total events.`,
      );
      return {
        allEvents,
      };
    },
  };
};
export default EventAPI;
