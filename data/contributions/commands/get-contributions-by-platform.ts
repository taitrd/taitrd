import {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  DYNAMODB_TABLE_KEY,
  CONTRIBUTIONS_TABLE_NAME as DYNAMODB_TABLE_NAME,
} from "../../../lib/constants/aws";
import dynamodbDocClient from "@/lib/dynamodb";
import { PlatformContribution } from "@/lib/types/contribution.type";
import { GetCommand } from "@aws-sdk/lib-dynamodb";
export type ContributionPlatformID = "github" | "gitlab" | "bitbucket";
export const getContributionsByPlatformCommand = async (
  platform: ContributionPlatformID,
  options?: { status?: PlatformContribution["status"] },
) => {
  const { status } = options || {};
  try {
    const docClient = dynamodbDocClient(
      AWS_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY,
      AWS_REGION,
    );

    const findKey = { [DYNAMODB_TABLE_KEY]: platform };
    const getCommand = new GetCommand({
      TableName: DYNAMODB_TABLE_NAME,
      Key: findKey,
    });
    const getResponse = await docClient.send(getCommand);
    const item = getResponse.Item as PlatformContribution;
    if (status && item.status !== status) {
      console.error(`${platform} item was ${status}`);
      return null;
    }

    return item;
  } catch (error) {
    console.error(error);
    return null;
  }
};
