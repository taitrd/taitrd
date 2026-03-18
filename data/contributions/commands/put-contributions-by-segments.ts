import { PutCommand } from "@aws-sdk/lib-dynamodb";
import {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  DYNAMODB_TABLE_KEY,
  CONTRIBUTION_ACTIVITIES_TABLE_NAME as DYNAMODB_TABLE_NAME,
} from "../../../lib/constants/aws";

import { ContributionData } from "@/lib/types";
import dynamodbDocClient from "@/lib/dynamodb";
import dayjs from "dayjs";
import { ContributionPlatformID } from "./get-contributions-by-platform";

const dayJS = dayjs();

export const putContributionsBySegments = async (
  date: string,
  platform: ContributionPlatformID,
  data: ContributionData,
) => {
  const docClient = dynamodbDocClient(
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_REGION,
  );
  const payload: Record<string, any> = {
    [DYNAMODB_TABLE_KEY]: date,
    grouped_events: (data.groupedEvents || []).reduce(
      (p, c) => ({ ...p, [c.date]: c }),
      {},
    ),
    events: data.allEvents,
    events_count: data.allEvents.length,
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
