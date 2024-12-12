import EventAPI from "@/lib/github-apis/event";
import { EventGroup, EventType } from "@/lib/types/github-api.type";
import dayjs from "dayjs";
import { unstable_cache } from "next/cache";
const eventPayloads: { [key in EventType]?: (payload: any) => any } = {
  PullRequestEvent: ({
    action,
    changed_files,
    deletions,
    additions,
    commits,
    merged,
    pull_request,
  }: any) => ({
    action,
    changed_files,
    deletions,
    additions,
    commits,
    merged,
    pull_request: {
      id: pull_request.id,
      closed_at: pull_request.closed_at,
      merged_at: pull_request.merged_at,
      title: pull_request.title,
    },
  }),
  PushEvent: ({ push_id, size }: any) => ({
    push_id,
    size,
  }),
  CreateEvent: ({ ref, ref_type }: any) => ({
    ref,
    ref_type,
  }),
};
export const getEventData = unstable_cache(
  async () => {
    const { allEvents } = await EventAPI().getEventsForAuthenticatedUser();
    const groupedEvents = allEvents.reduce<EventGroup[]>((prv, cur) => {
      const date = dayjs(cur.created_at).format("YYYY-MM-DD");
      const itemIndex = prv.findIndex((i) => i.date === date);
      const handlePayloads =
        eventPayloads[cur.type as EventType] || (() => null);
      const newItem = {
        id: cur.id,
        type: cur.type,
        repo: { id: cur.repo.id },
        payload: handlePayloads(cur.payload),
        created_at: cur.created_at,
      };
      if (itemIndex > -1) {
        prv[itemIndex].events.push(newItem);
      } else {
        prv.push({ date: date, events: [newItem] });
      }

      return prv;
    }, []);
    // console.log("events", groupedEvents);
    return {
      allEvents,
      groupedEvents,
    };
  },
  ["github_list_events"],
  { revalidate: 3600 }
);
