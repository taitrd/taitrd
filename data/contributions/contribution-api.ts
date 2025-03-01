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
import { getDateKeyValue } from "@/lib/dynamodb/key-values";
import { GetCommand } from "@aws-sdk/lib-dynamodb";
const keyValue = getDateKeyValue();
export const getCommand = async (keyParam: string = "") => {
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

    const findKey = { [DYNAMODB_TABLE_KEY]: keyParam + keyValue };
    const getCommand = new GetCommand({
      TableName: DYNAMODB_TABLE_NAME,
      Key: findKey,
    });
    const getResponse = await docClient.send(getCommand);
    const item = getResponse.Item;
    return item;
  }
  return null;
};
export const scanCommand = async (keySearch: string = "contributions_") => {
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
      FilterExpression:
        "#created_at BETWEEN :start_date AND :end_date AND begins_with(taitrd, :key)",

      ExpressionAttributeValues: {
        ":start_date": startDate.toISOString(),
        ":end_date": endDate.toISOString(),
        ":key": keySearch,
      },
    });
    const getResponse = await docClient.send(getCommand);
    const item = getResponse.Items;
    return item;
  }
  return null;
};
export const getCommandWithEntry = async (keyParam: string = "") => {
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
    const keyValue = keyParam + "contributions_entry";
    const findKey = { [DYNAMODB_TABLE_KEY]: keyValue };
    const getCommand = new GetCommand({
      TableName: DYNAMODB_TABLE_NAME,
      Key: findKey,
    });
    const getResponse = await docClient.send(getCommand);
    const item = getResponse.Item;
    return item;
  }
  return null;
};
