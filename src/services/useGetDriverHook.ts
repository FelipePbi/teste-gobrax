import { useQuery, useIsFetching } from "@tanstack/react-query";
import { Driver } from "../types/global";

export const useGetDriverHook = () => {
  const isVehicleLoading = useIsFetching({ queryKey: ["vehicles"] });
  const { data: driversData, isLoading: driversLoading } = useQuery({
    queryKey: ["drivers"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/drivers");
      const data: Driver[] = (await response.json()) as Driver[];

      return data;
    },
    enabled: !!isVehicleLoading,
  });

  return {
    driversData,
    driversLoading,
  };
};
