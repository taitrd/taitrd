import dayjs from "dayjs";
export const getDateKeyValue = (): string => {
  const dayJS = dayjs();
  const keyValue = "contributions_" + dayJS.format("YYYYMMDD");
  return keyValue;
};
