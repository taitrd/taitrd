import { AWS_ENABLE_SYNC } from "../../lib/constants/aws";
import putContributions from "../contributions/put-contributions";

import { getGithubContributions } from "../contributions/get-contributions";
import { Contributions } from "@/lib/types/contribution.type";
import { getEventData } from "../contributions/github/get-events";

export const collectGithubContributions = async () => {
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
        contributionsItem?.taitrd,
        contributionsItem?.events_count,
      );
      await putContributions(contributionsItem, eventData);
    }
  }
  return contributionsItem;
};
