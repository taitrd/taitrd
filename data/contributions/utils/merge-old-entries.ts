import {
  Contributions,
  PlatformContribution,
} from "@/lib/types/contribution.type";

/**
 * Merge old entries by following rules:
 * - Add more events in old date
 * - Add new date with new events
 *
 * @param platformContribution
 * @param oldContributes
 * @returns
 */
export const mergeOldEntries = (
  platformContribution: PlatformContribution,
  oldContributes: Contributions[],
) => {
  console.log(
    `Merging entries of ${platformContribution.taitrd} from ${oldContributes.length} items`,
  );
  const entriedEvents = platformContribution.entry_events;
  const eventDates = Object.keys(entriedEvents || {}).map((i) => i);
  const sorted = oldContributes?.sort((a, b) =>
    b.taitrd.localeCompare(a.taitrd),
  );
  const mergedEventEntries = sorted?.reduce((prv, cur) => {
    if (cur.contributions?.entry_events) {
      for (const event of cur.contributions?.entry_events) {
        const eventDate = eventDates.find((i) => i === event.date);
        if (!eventDate) {
          if (event.date) {
            prv[event.date] = { ...event };
            console.log(
              `added entry event group ${event.date} from record ${cur.taitrd}`,
            );
          }
        } else {
          prv[eventDate].events = prv[eventDate].events || [];
          prv[eventDate].events_count = prv[eventDate].events_count || 0;
          event.events?.forEach((i) => {
            const eventItem = prv[eventDate].events.find((j) => j.id === i.id);
            if (!eventItem) {
              prv[eventDate].events.push(i);
              console.log(
                `added entry event ${i.id} ${i.created_at} to group ${eventDate} from record ${cur.taitrd}`,
              );
            }
          });
        }
      }
    }
    return prv;
  }, entriedEvents);
  return Object.entries(mergedEventEntries || {})
    .map(([_d, e]) => e)
    .sort((a, b) => b.date.localeCompare(a.date));
};
