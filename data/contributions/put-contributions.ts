import { PutCommand } from "@aws-sdk/lib-dynamodb";
import {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  DYNAMODB_TABLE_KEY,
  DYNAMODB_TABLE_NAME,
} from "../../lib/constants/aws";

import { ContributionData } from "@/lib/types";
import dynamodbDocClient from "@/lib/dynamodb";
import { getDateKeyValue } from "@/lib/dynamodb/key-values";
import dayjs from "dayjs";
const dayJS = dayjs();
const putContributions = async (
  item: Record<string, any> | null | undefined,
  data: ContributionData
) => {
  if (
    AWS_ACCESS_KEY_ID &&
    AWS_SECRET_ACCESS_KEY &&
    AWS_REGION &&
    DYNAMODB_TABLE_NAME &&
    DYNAMODB_TABLE_KEY
  ) {
    const docClient = dynamodbDocClient(
      AWS_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY,
      AWS_REGION
    );

    if (!item) {
      const keyValue = getDateKeyValue();
      const newItem: { [key in string]: any } = {
        [DYNAMODB_TABLE_KEY]: keyValue,
        contributions: {
          grouped_events: data.groupedEvents,
        },
        events_count: data.allEvents.length,
        created_at: dayJS.toISOString(),
        status: "open",
      };
      const putCommand = new PutCommand({
        TableName: DYNAMODB_TABLE_NAME,
        Item: newItem,
      });
      await docClient.send(putCommand, function (err) {
        if (err) console.log(err);
      });
    } else {
      item.contributions.grouped_events = data.groupedEvents;
      const putCommand = new PutCommand({
        TableName: DYNAMODB_TABLE_NAME,
        Item: {
          ...item,
          events_count: data.allEvents.length,
          updated_at: dayJS.toISOString(),
          status: "closed",
          version: (item?.version || 0) + 1,
        },
      });
      await docClient.send(putCommand, function (err) {
        if (err) console.log(err);
      });
    }
  }
};
export default putContributions;
