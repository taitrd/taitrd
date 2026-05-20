import { AWS_ENABLE_SYNC } from "../../lib/constants/aws";
import putContributions from "../contributions/put-contributions";
import { getGithubContributions } from "../contributions/get-contributions";
import { Contributions } from "@/lib/types/contribution.type";
import { getContrbutionData } from "../contributions/github/get-contributions";

export const collectGithubContributions = async () => {
  const contributionData = await getContrbutionData();

  console.table(
    contributionData.entryEvents.map((d) => `${d.date} (${d.events_count})`),
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
      await putContributions(contributionsItem, {
        groupedEvents: [],
        entryEvents: contributionData.entryEvents,
        allEvents: [],
      });
    }
  }
  return contributionsItem;
};
