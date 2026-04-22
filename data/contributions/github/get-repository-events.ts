import EventAPI from "@/lib/github-apis/event";
import { EventGroup } from "@/lib/types/github-api.type";
import { eventsGroupingReducer } from "./get-events-legacy";
import { getRepositories } from "./get-repositories";
export const getRepositoryEventData = async () => {
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
};
