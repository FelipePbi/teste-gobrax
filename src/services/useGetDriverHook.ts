import { useQuery } from "@tanstack/react-query";
import { Driver } from "../types/global";
import { sleep } from "../components/helpers/sleep";

export const useGetDriverHook = () => {
  const { data: driversData, isLoading: driversLoading } = useQuery({
    queryKey: ["drivers"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/drivers");
      const data: Driver[] = (await response.json()) as Driver[];

      await sleep(500);
      return data;
    },
    staleTime: 1000 * 60,
  });

  return {
    driversData,
    driversLoading,
  };
};
