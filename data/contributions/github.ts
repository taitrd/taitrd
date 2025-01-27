import { AWS_ENABLE_SYNC } from "../../lib/constants/aws";
import { getEventData } from "./github/events";
import putContributions from "./put-contributions";
import { getDateKeyValue } from "@/lib/dynamodb/key-values";
import { getGithubContributions } from './get-contributions';
import { getGithubRangeContributions } from './get-range-contributions';
import { getGithubEntryContributions } from './get-entry-contributions';
const keyValue = getDateKeyValue();

export const collectGithubContributions = async () => {
  const eventData = await getEventData();
  const contributionsItem = await getGithubContributions();
  const oldContributes = await getGithubRangeContributions();
  if (AWS_ENABLE_SYNC) {
    if (
      !contributionsItem ||
      (contributionsItem && ["open"].includes(contributionsItem.status))
    ) {
      console.info(
        "batching contributions",
        contributionsItem ? "open status" : "new status"
      );
      if (contributionsItem) {
        const keepEventDates =
          contributionsItem.contributions?.grouped_events?.map(
            (i: any) => i.date
          ) || [];
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
                console.log("added this event from old group of contribution", cur.taitrd, event.date);
              }
            }
          } else {
            if (cur.contributions?.grouped_events) {
              for (const event of cur.contributions?.grouped_events) {
                const exists = prv.find((j) => j.date === event.date);
                if (!exists && !keepEventDates.includes(event.date)) {
                  prv.push(event);
                  console.log("added this event from new group of contribution", cur.taitrd, event.date);
                }
              }
            }
          }
          return prv;
        }, []);
        contributionsItem.contributions.old_grouped_events = oldGroupedEvent;
        const entryContributions = await getGithubEntryContributions();
        contributionsItem.contributions.entry_events =
          entryContributions?.contributions?.entry_events || [];
      }

      return await putContributions(contributionsItem, eventData, 'github_');
    }
  }
  // console.log(contributionsItem);
  // return oldContributes;
  // return eventData;
  return contributionsItem;
};
