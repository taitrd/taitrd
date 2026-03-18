import { PutCommand } from "@aws-sdk/lib-dynamodb";
import {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  DYNAMODB_TABLE_KEY,
  CONTRIBUTIONS_TABLE_NAME as DYNAMODB_TABLE_NAME,
} from "../../../lib/constants/aws";

import { ContributionData } from "@/lib/types";
import dynamodbDocClient from "@/lib/dynamodb";
import dayjs from "dayjs";
import { ContributionPlatformID } from "./get-contributions-by-platform";

const dayJS = dayjs();

export const putContributionsByPlatform = async (
  platform: ContributionPlatformID,
  data: ContributionData,
) => {
  const docClient = dynamodbDocClient(
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_REGION,
  );
  const payload: Record<string, any> = {
    [DYNAMODB_TABLE_KEY]: platform,
    grouped_events: (data.groupedEvents || []).reduce(
      (p, c) => ({ ...p, [c.date]: c }),
      {},
    ),
    events_count: (data.groupedEvents || []).reduce(
      (p, c) => p + (c.events_count || c.events?.length || 0),
      0,
    ),
    status: "closed",
    version: 1,
    updated_at: dayJS.toISOString(),
  };
  const putCommand = new PutCommand({
    TableName: DYNAMODB_TABLE_NAME,
    Item: payload,
  });
  await docClient.send(putCommand, function (err) {
    if (err) console.log(err);
  });
};
