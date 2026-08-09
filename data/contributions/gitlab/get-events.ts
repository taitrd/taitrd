import GitlabEventAPI from "@/lib/gitlab-apis/event";
import { Event, EventGroup } from "@/lib/types/github-api.type";
import { GitlabEvent } from "@/lib/types/gitlab-api.type";
import dayjs from "dayjs";

const eventsGroupingReducer = (prv: EventGroup[], cur: GitlabEvent) => {
  const date = dayjs(cur.created_at).format("YYYY-MM-DD");
  const itemIndex = prv.findIndex((i) => i.date === date);
  const newItem = {
    id: `gitlab_${cur.id}`,
    type: cur.action_name,
    repo: { id: cur.project_id },
    payload: {
      target_type: cur.target_type,
      target_title: cur.target_title,
      push_data: cur.push_data,
    },
    created_at: cur.created_at,
  };
  if (itemIndex > -1) {
    prv[itemIndex].events.push(newItem);
  } else {
    prv.push({ date: date, events: [newItem] });
  }

  return prv;
};

/**
 * New API for get event data
 */
export const getEventData = async () => {
  const { allEvents } =
    await GitlabEventAPI().getEventsForAuthenticatedUserByRequest();
  const groupedEvents = allEvents.reduce<EventGroup[]>(
    eventsGroupingReducer,
    [],
  );
  return {
    allEvents: allEvents as unknown as Event[],
    groupedEvents,
  };
};
