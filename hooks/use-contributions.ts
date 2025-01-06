import { fetcher } from "@/lib/fetcher";
import { ServiceContributions } from '@/lib/types';
import useSWR from "swr";

const useContributions = () => {
  return useSWR<ServiceContributions>("/api/contributions", fetcher);
};
export default useContributions;
