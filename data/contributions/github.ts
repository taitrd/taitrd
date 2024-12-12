import { AWS_ENABLE_SYNC } from "../../lib/constants/aws";
import getContributions from "./get-contributions";
import getRangeContributions from "./get-range-contributions";
import { getEventData } from "./github/events";
import putContributions from "./put-contributions";

export const getGithubContributions = async () => {
  const eventData = await getEventData();
  const contributionsItem = await getContributions();

  if (AWS_ENABLE_SYNC) {
    if (
      !contributionsItem ||
      (contributionsItem && ["open"].includes(contributionsItem.status))
    ) {
      console.log(
        "batching contributions",
        contributionsItem ? "open status" : "new status"
      );
      if (contributionsItem) {
        const keepEventDates =
          contributionsItem.contributions?.grouped_events?.map(
            (i: any) => i.date
          ) || [];
        const oldContributes = await getRangeContributions();
        const oldGroupedEvent = (oldContributes || []).reduce<any[]>(
          (prv, cur) => {
            for (const event of cur.contributions?.grouped_events) {
              if (!keepEventDates.includes(event.date)) {
                prv.push(event);
              }
            }
            return prv;
          },
          []
        );
        contributionsItem.contributions.old_grouped_events = oldGroupedEvent;
      }

      await putContributions(contributionsItem, eventData);
    }
  }
  // console.log(contributionsItem);
  // return eventData;
  return contributionsItem;
};
