import EventAPI from "@/lib/github-apis/event";
import { EventGroup } from "@/lib/types/github-api.type";
import { unstable_cache } from "next/cache";
import { eventsGroupingReducer } from "./get-events-legacy";
import { CacheTag } from "@/lib/enums/cach-tag";
import { getRepositories } from "./get-repositories";
export const getRepositoryEventData = unstable_cache(
  async () => {
    const { repoParams } = await getRepositories();
    console.table(repoParams);
    const { allEvents } = await EventAPI().getEventsByRepos(repoParams, 1, 5);
    const groupedEvents = allEvents.reduce<EventGroup[]>(
      eventsGroupingReducer,
      [],
    );
    return {
      allEvents,
      groupedEvents,
    };
  },
  ["github_list_events", "all_repos"],
  { revalidate: 3600, tags: [CacheTag.Github] },
);
