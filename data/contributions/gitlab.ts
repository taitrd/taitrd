import { AWS_ENABLE_SYNC } from "../../lib/constants/aws";
import { getGitlabContributions } from "./get-contributions";
import putContributions from "./put-contributions";

export const collectGitlabContributions = async () => {
  const eventData = {
    allEvents: [],
    groupedEvents: [],
  };
  let contributionsItem = await getGitlabContributions("gitlab_");
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
