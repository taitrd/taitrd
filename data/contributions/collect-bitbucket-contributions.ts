import { Contributions } from "@/lib/types/contribution.type";
import { AWS_ENABLE_SYNC } from "../../lib/constants/aws";
import { getBitbucketContributions } from "./get-contributions";
import putContributions from "./put-contributions";

export const collectBitbucketContributions = async () => {
  const eventData = {
    allEvents: [],
    groupedEvents: [],
  };
  let contributionsItem = (await getBitbucketContributions(
    "bitbucket_",
  )) as Contributions;
  if (AWS_ENABLE_SYNC) {
    if (
      !contributionsItem ||
      (contributionsItem && ["open"].includes(contributionsItem.status))
    ) {
      console.info(
        "batching bitbucket contributions",
        contributionsItem ? "open status" : "new status",
      );

      await putContributions(contributionsItem, eventData, "bitbucket_");
    }
  }
  return contributionsItem;
};
