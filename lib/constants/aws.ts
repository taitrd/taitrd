export const AWS_ENABLE_SYNC = process.env.AWS_ENABLE_SYNC;
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || "";
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || "";
export const AWS_REGION = process.env.AWS_REGION || "ap-southeast-1";
export const DYNAMODB_TABLE_KEY =
  process.env.AWS_DYNAMODB_TABLE_KEY || "taitrd";
export const CONTRIBUTION_ACTIVITIES_TABLE_NAME =
  process.env.AWS_DYNAMODB_CONTRIBUTION_ACTIVITIES_TABLE_NAME || "";
export const CONTRIBUTIONS_TABLE_NAME =
  process.env.AWS_DYNAMODB_CONTRIBUTIONS_TABLE_NAME || "";
