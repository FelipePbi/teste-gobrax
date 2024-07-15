import { useQuery } from "@tanstack/react-query";
import { Driver } from "../types/global";
import { sleep } from "../helpers/sleep";
import { API_URL } from "../helpers/urls";

export const useGetDriverHook = () => {
  const {
    data: driversData,
    isLoading: driversLoading,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["drivers"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}drivers`);
      const data: Driver[] = (await response.json()) as Driver[];

      await sleep(500);
      return data;
    },
    staleTime: 1000 * 60,
  });

  return {
    refetch,
    driversData,
    driversLoading: isRefetching || driversLoading,
  };
};
