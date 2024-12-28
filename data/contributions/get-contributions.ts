import {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  DYNAMODB_TABLE_KEY,
  DYNAMODB_TABLE_NAME,
} from "../../lib/constants/aws";
import dynamodbDocClient from "@/lib/dynamodb";
import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { unstable_cache } from "next/cache";
import { CACHE_VERSION } from "@/lib/constants/cache";
import { getDateKeyValue } from "@/lib/dynamodb/key-values";
const keyValue = getDateKeyValue();
const getContributions = unstable_cache(
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
  },
  [CACHE_VERSION, "contributes", keyValue],
  { revalidate: 3600 }
);
export default getContributions;
