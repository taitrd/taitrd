import {} from "@/lib/constants/aws";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
const dynamodbDocClient = (
  accessKeyId: string,
  secret: string,
  region: string
) => {
  const dbClient = new DynamoDBClient({
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secret,
    },
    region: region,
  });
  return DynamoDBDocumentClient.from(dbClient, {
    marshallOptions: {
      removeUndefinedValues: true,
    }
  });
};
export default dynamodbDocClient;
