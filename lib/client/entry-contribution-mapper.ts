import dayjs from "dayjs";
import { getContributionLevel, gitHubEventGroupMapping } from "./contributions";
import { Contributions } from "../types/contribution.type";

export const entryContributionsMapper = (
  selectedYear: number,
  startDate: Date,
  endDate: Date,
  dataContributions?: Contributions["contributions"],
) => {
  const entryEvents = dataContributions?.entry_events || [];
  const groupedEvents =
    dataContributions?.grouped_events
      ?.filter((i) => i.date.startsWith(String(selectedYear)))
      .map(gitHubEventGroupMapping) || [];
  const contributions = [];
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dayJsObj = dayjs(d);
    const dateStr = dayJsObj.format("YYYY-MM-DD");
    const entryContribution = entryEvents.find((i) => i.date === dateStr);
    if (entryContribution && entryContribution.events_count) {
      contributions.push({
        date: new Date(d),
        date_string: dateStr,
        count: entryContribution.events_count,
        level: getContributionLevel(entryContribution.events_count),
      });
    } else {
      const groupedContribution = groupedEvents.find(
        (i) => i.date_str === dateStr,
      );
      if (groupedContribution) {
        contributions.push(groupedContribution);
      } else {
        contributions.push({
          date: new Date(d),
          date_str: dateStr,
          count: 0,
          level: getContributionLevel(0),
        });
      }
    }
  }

  return contributions;
};
