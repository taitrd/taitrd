import EventAPI from "@/lib/github-apis/event";
import { EventGroup } from "@/lib/types/github-api.type";
import { unstable_cache } from "next/cache";
import { eventsGroupingReducer } from "./events";
import { CacheTag } from "@/lib/enums/cach-tag";
export const getRepositoryEventData = unstable_cache(
  async () => {
    const { allEvents } = await EventAPI().getListRepositoryEvents(1);
    const groupedEvents = allEvents.reduce<EventGroup[]>(
      eventsGroupingReducer,
      [],
    );
    return {
      allEvents,
      groupedEvents,
    };
  },
  ["github_list_events"],
  { revalidate: 3600, tags: [CacheTag.Github] },
);
