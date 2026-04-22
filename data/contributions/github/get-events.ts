import EventAPI from "@/lib/github-apis/event";
import { EventGroup } from "@/lib/types/github-api.type";
import { eventsGroupingReducer } from "./get-events-legacy";

/**
 * New API for get event data
 */
export const getEventData = async () => {
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
};
