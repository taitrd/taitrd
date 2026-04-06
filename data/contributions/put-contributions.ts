import { PutCommand } from "@aws-sdk/lib-dynamodb";
import {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  DYNAMODB_TABLE_KEY,
  CONTRIBUTION_ACTIVITIES_TABLE_NAME as DYNAMODB_TABLE_NAME,
} from "../../lib/constants/aws";

import { ContributionData } from "@/lib/types";
import dynamodbDocClient from "@/lib/dynamodb";
import { getDateKeyValue } from "@/lib/dynamodb/key-values";
import dayjs from "dayjs";
import { Contributions } from "@/lib/types/contribution.type";
const dayJS = dayjs();
const putContributions = async (
  item: Contributions | null | undefined,
  data: ContributionData,
  keyParam: string = "",
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
      AWS_REGION,
    );
    if (!item) {
      const keyValue = getDateKeyValue();
      const newItem: { [key in string]: any } = {
        [DYNAMODB_TABLE_KEY]: keyParam + keyValue,
        contributions: {
          grouped_events: data.groupedEvents || [],
        },
        events: data.allEvents,
        events_count: data.allEvents?.length || 0,
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
      return newItem;
    } else {
      const groupedDates = item.contributions.grouped_events?.map(
        (i) => i.date,
      );
      const grouped_events = data.groupedEvents.reduce((p, c) => {
        if (!groupedDates.includes(c.date)) {
          p.push(c);
        }
        return p;
      }, item.contributions.grouped_events);
      const groupedIds = item.events?.map((i) => i.id);
      const events = data.allEvents.reduce((p, c) => {
        if (!groupedIds?.includes(c.id)) {
          p.push(c);
        }
        return p;
      }, item.events || []);
      const version = (item?.version || 0) + 1;
      const putCommand = new PutCommand({
        TableName: DYNAMODB_TABLE_NAME,
        Item: {
          ...item,
          contributions: { ...item.contributions, grouped_events },
          events: events,
          events_count: events.length,
          updated_at: dayJS.toISOString(),
          status: version >= 10 ? "closed" : "open",
          version: version,
        },
      });
      await docClient.send(putCommand, function (err) {
        if (err) console.log(err);
      });
      return item;
    }
  }
};
export default putContributions;
