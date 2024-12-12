import {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  DYNAMODB_TABLE_KEY,
  DYNAMODB_TABLE_NAME,
} from "../../lib/constants/aws";
import dynamodbDocClient from "@/lib/dynamodb";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import dayjs from "dayjs";
import { unstable_cache } from "next/cache";
const getRangeContributions = unstable_cache(
  async () => {
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
      const startDate = dayjs().subtract(30, "days");
      const endDate = dayjs();

      const getCommand = new ScanCommand({
        TableName: DYNAMODB_TABLE_NAME,
        ExpressionAttributeNames: {
          "#created_at": "created_at",
        },
        FilterExpression: "#created_at BETWEEN :start_date AND :end_date",

        ExpressionAttributeValues: {
          ":start_date": startDate.toISOString(),
          ":end_date": endDate.toISOString(),
        },
      });
      const getResponse = await docClient.send(getCommand);
      const item = getResponse.Items;
      return item;
    }
    return null;
  },
  ["range_contributes"],
  { revalidate: 3600 }
);
export default getRangeContributions;
