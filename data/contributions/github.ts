import { AWS_ENABLE_SYNC } from "../../lib/constants/aws";
import putContributions from "./put-contributions";

import { getGithubContributions } from "./get-contributions";
import { getEventData } from "./github/events";
// import { getRepositoryEventData as getEventData } from "./github/get-repository-events";
import { Contributions } from "@/lib/types/contribution.type";
// import { getEventData } from "./github/get-events";

export const collectGithubContributions = async () => {
  /**
   * TODO: change Event API when needed
   * Get mores event data with repo and events API
   */
  const eventData = await getEventData();

  console.table(
    eventData.groupedEvents.map((d) => `${d.date} (${d.events.length})`),
  );

  let contributionsItem = (await getGithubContributions()) as Contributions;

  if (AWS_ENABLE_SYNC) {
    if (
      !contributionsItem ||
      (contributionsItem && ["open"].includes(contributionsItem.status))
    ) {
      console.info(
        "batching contributions",
        contributionsItem ? "open status" : "new status",
        contributionsItem.taitrd,
        contributionsItem.events_count,
      );
      await putContributions(contributionsItem, eventData);
    }
  }
  return contributionsItem;
};
