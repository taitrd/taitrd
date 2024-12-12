import { fetcher } from "@/lib/fetcher";
import { Contributions } from "@/lib/types";
import useSWR from "swr";

const useContributions = () => {
  return useSWR<Contributions>("/api/contributions", fetcher);
};
export default useContributions;
