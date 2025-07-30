import { getContributions } from "@/lib/actions/contribution";
import { ServiceContributions } from "@/lib/types";
import { useEffect, useState } from "react";

const useContributions = () => {
  const [data, setData] = useState<ServiceContributions>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchContributions = async () => {
    try {
      const {
        success,
        data: contributions,
        message,
      } = await getContributions();
      if (!success || !contributions) {
        throw new Error(message);
      }
      setData(contributions as ServiceContributions);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchContributions();
  }, []);
  return { data, isLoading };
};
export default useContributions;
