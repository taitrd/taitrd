import { GITLAB_API_BASE_URL, GITLAB_TOKEN } from "@/lib/constants/gitlab.constant";
import { GitlabEvent } from "@/lib/types/gitlab-api.type";

const EventAPI = () => {
  return {
    /**
     * REST API - List events for the authenticated user (self, via personal access token)
     * @link https://docs.gitlab.com/ee/api/events.html#get-user-contribution-events
     */
    getEventsForAuthenticatedUserByRequest: async (
      page = 1,
      perPage = 100,
    ) => {
      if (!GITLAB_TOKEN) {
        console.info("GITLAB_TOKEN is not set, skipping GitLab events fetch");
        return { allEvents: [] as GitlabEvent[] };
      }

      const url = new URL(`${GITLAB_API_BASE_URL}/events`);
      url.searchParams.set("page", String(page));
      url.searchParams.set("per_page", String(perPage));

      const response = await fetch(url, {
        headers: { "PRIVATE-TOKEN": GITLAB_TOKEN },
        next: { revalidate: 3600 },
      });

      if (!response.ok) {
        console.error(
          `Failed to fetch GitLab events: ${response.status} ${response.statusText}`,
        );
        return { allEvents: [] as GitlabEvent[] };
      }

      const events = (await response.json()) as GitlabEvent[];
      console.log(
        `Fetched events for authenticated user by REST request ${events.length} total events.`,
      );
      return { allEvents: events };
    },
  };
};

export default EventAPI;
