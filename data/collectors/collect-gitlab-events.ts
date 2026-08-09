import { Contributions } from "@/lib/types/contribution.type";
import { AWS_ENABLE_SYNC } from "../../lib/constants/aws";
import { getGitlabContributions } from "../contributions/get-contributions";
import putContributions from "../contributions/put-contributions";
import { getEventData } from "../contributions/gitlab/get-events";

export const collectGitlabContributions = async () => {
  const eventData = await getEventData();

  console.table(
    eventData.groupedEvents.map((d) => `${d.date} (${d.events.length})`),
  );

  let contributionsItem = (await getGitlabContributions(
    "gitlab_",
  )) as Contributions;
  if (AWS_ENABLE_SYNC) {
    if (
      !contributionsItem ||
      (contributionsItem && ["open"].includes(contributionsItem.status))
    ) {
      console.info(
        "batching gitlab contributions",
        contributionsItem ? "open status" : "new status",
      );

      await putContributions(contributionsItem, eventData, "gitlab_");
    }
  }
  return contributionsItem;
};
