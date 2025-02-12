import { AWS_ENABLE_SYNC } from "../../lib/constants/aws";
import { getBitbucketContributions } from "./get-contributions";
import { getBitbucketRangeContributions } from "./get-range-contributions";
import { mergeBitbucketContributions } from "./merge-contributions";
import putContributions from "./put-contributions";

export const collectBitbucketContributions = async () => {
  const eventData = {
    allEvents: [],
    groupedEvents: [],
  };
  let contributionsItem = await getBitbucketContributions("bitbucket_");
  const oldContributes = await getBitbucketRangeContributions(
    "bitbucket_contributions"
  );
  if (AWS_ENABLE_SYNC) {
    if (
      !contributionsItem ||
      (contributionsItem && ["open"].includes(contributionsItem.status))
    ) {
      console.info(
        "batching bitbucket contributions",
        contributionsItem ? "open status" : "new status"
      );
      if (contributionsItem) {
        contributionsItem = await mergeBitbucketContributions(
          contributionsItem,
          oldContributes
        );
      }

      const putItem = await putContributions(
        contributionsItem,
        eventData,
        "bitbucket_"
      );

      /** Merge new item */
      if (!contributionsItem && putItem) {
        contributionsItem = await mergeBitbucketContributions(
          putItem,
          oldContributes
        );
      }
    }
  }
  return contributionsItem;
};
