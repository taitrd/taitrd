import {
  getBitbucketEntryContributions,
  getGithubEntryContributions,
  getGitlabEntryContributions,
} from "./get-entry-contributions";
import { getDateKeyValue } from "@/lib/dynamodb/key-values";
const keyValue = getDateKeyValue();
const mergeOldGroups = (
  contributionsItem: Record<string, any>,
  oldContributes: Record<string, any>[] | null | undefined
) => {
  const keepEventDates =
    contributionsItem.contributions?.grouped_events?.map((i: any) => i.date) ||
    [];
  const sorted = (oldContributes || []).sort((a, b) =>
    b.taitrd.localeCompare(a.taitrd)
  );
  const oldGroupedEvent = sorted.reduce<any[]>((prv, cur) => {
    // Ignore today record
    if (cur.taitrd === keyValue) {
      return prv;
    }
    if (cur.contributions?.old_grouped_events) {
      for (const event of cur.contributions?.old_grouped_events) {
        const exists = prv.find((j) => j.date === event.date);
        if (!exists && !keepEventDates.includes(event.date)) {
          prv.push(event);
          console.log(
            "added this event from old group of contribution",
            cur.taitrd,
            event.date
          );
        }
      }
    }
    if (cur.contributions?.grouped_events) {
      for (const event of cur.contributions?.grouped_events) {
        const exists = prv.find((j) => j.date === event.date);
        if (!exists && !keepEventDates.includes(event.date)) {
          prv.push(event);
          console.log(
            "added this event from new group of contribution",
            cur.taitrd,
            event.date
          );
        }
      }
    }
    return prv;
  }, []);
  return oldGroupedEvent;
};
export const mergeGithubContributions = async (
  contributionsItem: Record<string, any>,
  oldContributes: Record<string, any>[] | null | undefined
) => {
  const oldGroupedEvents = mergeOldGroups(contributionsItem, oldContributes);
  contributionsItem.contributions.old_grouped_events = oldGroupedEvents;
  const entryContributions = await getGithubEntryContributions();
  contributionsItem.contributions.entry_events =
    entryContributions?.contributions?.entry_events || [];

  return contributionsItem;
};

export const mergeGitlabContributions = async (
  contributionsItem: Record<string, any>,
  oldContributes: Record<string, any>[] | null | undefined
) => {
  const oldGroupedEvents = mergeOldGroups(contributionsItem, oldContributes);
  contributionsItem.contributions.old_grouped_events = oldGroupedEvents;
  const entryContributions = await getGitlabEntryContributions("gitlab_");
  contributionsItem.contributions.entry_events =
    entryContributions?.contributions?.entry_events || [];

  return contributionsItem;
};

export const mergeBitbucketContributions = async (
  contributionsItem: Record<string, any>,
  oldContributes: Record<string, any>[] | null | undefined
) => {
  const oldGroupedEvents = mergeOldGroups(contributionsItem, oldContributes);
  contributionsItem.contributions.old_grouped_events = oldGroupedEvents;
  const entryContributions = await getBitbucketEntryContributions("bitbucket_");
  contributionsItem.contributions.entry_events =
    entryContributions?.contributions?.entry_events || [];

  return contributionsItem;
};
