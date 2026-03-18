import {
  Contributions,
  PlatformContribution,
} from "@/lib/types/contribution.type";

/**
 * Merge old groups by following rules:
 * - Add more events in old date
 * - Add new date with new events
 *
 * @param platformContribution
 * @param oldContributes
 * @returns
 */
export const mergeOldGroups = (
  platformContribution: PlatformContribution,
  oldContributes: Contributions[],
) => {
  console.log(`Merging groups of ${platformContribution.taitrd}`);
  const groupedEvents = platformContribution.grouped_events;
  const eventDates = Object.keys(groupedEvents).map((i) => i);
  const sorted = oldContributes?.sort((a, b) =>
    b.taitrd.localeCompare(a.taitrd),
  );
  const mergedEventGroups = sorted?.reduce((prv, cur) => {
    if (cur.contributions?.old_grouped_events) {
      for (const event of cur.contributions?.old_grouped_events) {
        const eventDate = eventDates.find((i) => i === event.date);
        if (!eventDate) {
          prv[event.date] = { ...event, events_count: event.events.length };
          console.log(
            `added old event group ${event.date} from record ${cur.taitrd}`,
          );
        } else {
          event.events?.forEach((i) => {
            const eventItem = prv[eventDate].events.find((j) => j.id === i.id);
            if (!eventItem) {
              prv[eventDate].events.push(i);
              console.log(
                `added old event ${i.id} ${i.created_at} to group ${eventDate} from record ${cur.taitrd}`,
              );
            }
          });
        }
      }
    }
    if (cur.contributions?.grouped_events) {
      for (const event of cur.contributions?.grouped_events) {
        const eventDate = eventDates.find((i) => i === event.date);
        if (!eventDate) {
          prv[event.date] = { ...event, events_count: event.events.length };
          console.log(
            `added new event group ${event.date} from record ${cur.taitrd}`,
          );
        } else {
          event.events?.forEach((i) => {
            const eventItem = prv[eventDate].events.find((j) => j.id === i.id);
            if (!eventItem) {
              prv[eventDate].events.push(i);
              console.log(
                `added new event ${i.id} ${i.created_at} to group ${eventDate} from record ${cur.taitrd}`,
              );
            }
          });
        }
      }
    }
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
  }, groupedEvents);
  return Object.entries(mergedEventGroups)
    .map(([_d, e]) => e)
    .sort((a, b) => b.date.localeCompare(a.date));
};
