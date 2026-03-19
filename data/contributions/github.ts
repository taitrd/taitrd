import { AWS_ENABLE_SYNC } from "../../lib/constants/aws";
import putContributions from "./put-contributions";

import { getGithubContributions } from "./get-contributions";
// import { getRepositoryEventData } from "./github/get-repository-events";
import { getEventData } from "./github/get-events";

export const collectGithubContributions = async () => {
  /**
   * TODO: change Event API when needed
   * Get mores event data with repo and events API
   */
  const eventData = await getEventData();
  let contributionsItem = await getGithubContributions();

  if (AWS_ENABLE_SYNC) {
    if (
      !contributionsItem ||
      (contributionsItem && ["open"].includes(contributionsItem.status))
    ) {
      console.info(
        "batching contributions",
        contributionsItem ? "open status" : "new status",
      );
      await putContributions(contributionsItem, eventData);
    }
  }
  return contributionsItem;
};
