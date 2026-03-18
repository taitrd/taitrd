import { Event } from "@/lib/types/github-api.type";

export const mergeOldEvents = (events: Event[], oldEvents: Event[]) => {
  const keepEventIds = events.map((i) => i.id) || [];
  const mergedEvents = oldEvents.reduce<Event[]>((prv, cur) => {
    const exists = prv.find((j) => j.id === cur.id);
    if (!exists && !keepEventIds.includes(cur.id)) {
      prv.push(cur);
      console.log(
        "added this event from old group of contribution",
        cur.created_at,
        cur.id,
      );
    }

    return prv;
  }, events);
  return mergedEvents;
};
