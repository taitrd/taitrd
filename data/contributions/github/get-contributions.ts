import EventAPI from "@/lib/github-apis/event";
import { EventGroup } from "@/lib/types/github-api.type";

/**
 * New API for get contribution data
 */
export const getContrbutionData = async () => {
  const response = await EventAPI().getContributionsCollection();
  const calendar = response.user.contributionsCollection.contributionCalendar;

  const entryEvents: EventGroup[] = [];
  calendar.weeks.forEach((week: any) => {
    week.contributionDays.forEach((day: any) => {
      if (day.contributionCount > 0) {
        entryEvents.push({
          date: day.date,
          events: [],
          events_count: day.contributionCount,
        });
      }
    });
  });

  console.log("events", entryEvents.length);
  return {
    entryEvents,
  };
};
