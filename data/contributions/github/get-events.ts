import EventAPI from "@/lib/github-apis/event";
import { EventGroup } from "@/lib/types/github-api.type";
import { unstable_cache } from "next/cache";
import { eventsGroupingReducer } from "./get-events-legacy";
import { CacheTag } from "@/lib/enums/cach-tag";

/**
 * New API for get event data
 */
export const getEventData = unstable_cache(
  async () => {
    const { allEvents } =
      await EventAPI().getEventsForAuthenticatedUserByRequest();
    const groupedEvents = allEvents.reduce<EventGroup[]>(
      eventsGroupingReducer,
      [],
    );
    // console.log("events", groupedEvents);
    return {
      allEvents,
      groupedEvents,
    };
  },
  ["github_list_events", "authenticated", "rest_api_request"],
  { revalidate: 60, tags: [CacheTag.Github] },
);
