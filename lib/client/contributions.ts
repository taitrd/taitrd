import dayjs from "dayjs";
import { SkillData } from "../types";
import { EventGroup, EventType } from "../types/github-api.type";
import { Contributions } from "../types/contribution.type";

export function getContributionLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 4) return 2;
  if (count <= 6) return 3;
  return 4;
}

export function generateContributions(
  maxCount: number,
  startDate: Date,
  endDate: Date
): SkillData["contributions"] {
  const contributions = [];

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const count = Math.floor(Math.random() * (maxCount / 365));
    contributions.push({
      date: new Date(d),
      count,
      level: getContributionLevel(count),
    });
  }

  return contributions;
}

export const gitHubEventGroupMapping = (i: EventGroup) => {
  const createBranchCount = i.events.filter(
    (j) => j.type === EventType.CreateEvent && j.payload?.ref_type === "branch"
  ).length;
  const createRepoCount = i.events.filter(
    (j) =>
      j.type === EventType.CreateEvent && j.payload?.ref_type === "repository"
  ).length;
  const prCount = i.events.filter(
    (j) =>
      j.type === EventType.PullRequestEvent &&
      j.payload?.action === "closed" &&
      j.payload?.pull_request?.merged_at
  ).length;
  const cmCount = i.events.filter((j) => j.type === EventType.PushEvent).length;
  const createCount = createRepoCount || createBranchCount;
  const totalCount = createCount + prCount || cmCount || 0;
  return {
    count: totalCount,
    date_str: i.date,
    date: dayjs(i.date).toDate(),
    level: getContributionLevel(totalCount),
  };
};

export const gitHubContributionsMapping = (
  selectedYear: number,
  startDate: Date,
  endDate: Date,
  github_contributions?: Contributions
) => {
  const dataContributions =
    github_contributions?.contributions?.grouped_events
      ?.filter((i) => i.date.startsWith(String(selectedYear)))
      .map(gitHubEventGroupMapping) || [];
  const oldDataContributions =
    github_contributions?.contributions?.old_grouped_events
      ?.filter((i) => i.date.startsWith(String(selectedYear)))
      .map(gitHubEventGroupMapping) || [];

  const entryContributions =
    github_contributions?.contributions?.entry_events || [];

  const contributions = [];
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dayJsObj = dayjs(d);
    const dateStr = dayJsObj.format("YYYY-MM-DD");
    const dataContribution = dataContributions.find(
      (i) => i.date_str === dateStr
    );
    if (dataContribution) {
      contributions.push(dataContribution);
    } else {
      const oldDataContribution = oldDataContributions.find(
        (i) => i.date_str === dateStr
      );
      if (oldDataContribution) {
        contributions.push(oldDataContribution);
      } else {
        const entryContribution = entryContributions.find(
          (i) => i.date === dateStr
        );
        if (entryContribution && entryContribution.events_count) {
          contributions.push({
            date: new Date(d),
            date_str: dateStr,
            count: entryContribution.events_count,
            level: getContributionLevel(entryContribution.events_count),
          });
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
  }

  return contributions;
};

export const entryContributionsMapping = (
  selectedYear: number,
  startDate: Date,
  endDate: Date,
  gitlab_contributions?: Contributions
) => {
  const entryContributions =
    gitlab_contributions?.contributions?.entry_events || [];

  const contributions = [];
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dayJsObj = dayjs(d);
    const dateStr = dayJsObj.format("YYYY-MM-DD");
    const entryContribution = entryContributions.find(
      (i) => i.date === dateStr
    );
    if (entryContribution && entryContribution.events_count) {
      contributions.push({
        date: new Date(d),
        date_string: dateStr,
        count: entryContribution.events_count,
        level: getContributionLevel(entryContribution.events_count),
      });
    } else {
      contributions.push({
        date: new Date(d),
        date_str: dateStr,
        count: 0,
        level: getContributionLevel(0),
      });
    }
  }

  return contributions;
};
