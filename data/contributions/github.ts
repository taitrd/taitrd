import { AWS_ENABLE_SYNC } from "../../lib/constants/aws";
import { getEventData } from "./github/events";
import putContributions from "./put-contributions";

import { getGithubContributions } from "./get-contributions";
import { getGithubRangeContributions } from "./get-range-contributions";
import { mergeGithubContributions } from "./merge-contributions";

export const collectGithubContributions = async () => {
  const eventData = await getEventData();
  let contributionsItem = await getGithubContributions();
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
        contributionsItem = await mergeGithubContributions(
          contributionsItem,
          oldContributes
        );
      }

      const putItem = await putContributions(contributionsItem, eventData);

      /** Merge new item */
      if (!contributionsItem && putItem) {
        contributionsItem = await mergeGithubContributions(
          putItem,
          oldContributes
        );
      }
    }
  }
  // console.log(contributionsItem);
  // return oldContributes;
  // return eventData;
  return contributionsItem;
};
