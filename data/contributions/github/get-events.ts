import EventAPI from "@/lib/github-apis/event";
import { EventGroup } from "@/lib/types/github-api.type";
import { unstable_cache } from "next/cache";
import { eventsGroupingReducer } from "./events";

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
  ["github_list_events"],
  { revalidate: 3600 },
);
