import { AWS_ENABLE_SYNC } from "../../lib/constants/aws";
import { getGitlabContributions } from "./get-contributions";
import { getGitlabRangeContributions } from "./get-range-contributions";
import { mergeGitlabContributions } from "./merge-contributions";
import putContributions from "./put-contributions";
import { getDateKeyValue } from "@/lib/dynamodb/key-values";
const keyValue = getDateKeyValue();

export const collectGitlabContributions = async () => {
  const eventData = {
    allEvents: [],
    groupedEvents: [],
  };
  let contributionsItem = await getGitlabContributions("gitlab_");
  const oldContributes = await getGitlabRangeContributions(
    "gitlab_contributions"
  );
  if (AWS_ENABLE_SYNC) {
    if (
      !contributionsItem ||
      (contributionsItem && ["open"].includes(contributionsItem.status))
    ) {
      console.info(
        "batching gitlab contributions",
        contributionsItem ? "open status" : "new status"
      );
      if (contributionsItem) {
        contributionsItem = await mergeGitlabContributions(
          contributionsItem,
          oldContributes
        );
      }

      const putItem = await putContributions(
        contributionsItem,
        eventData,
        "gitlab_"
      );

      /** Merge new item */
      if (!contributionsItem && putItem) {
        contributionsItem = await mergeGitlabContributions(
          putItem,
          oldContributes
        );
      }
    }
  }
  return contributionsItem;
};
