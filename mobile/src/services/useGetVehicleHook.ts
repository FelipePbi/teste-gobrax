import { sleep } from "../helpers/sleep";
import { API_URL } from "../helpers/urls";
import { Vehicle } from "../types/global";
import { useQuery } from "@tanstack/react-query";

export const useGetVehicleHook = () => {
  const {
    data: vehiclesData,
    isLoading: vehiclesLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ["vehicles"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}vehicles`);
      const data: Vehicle[] = (await response.json()) as Vehicle[];

      await sleep(800);
      return data;
    },
  });

  return {
    refetch,
    vehiclesData,
    vehiclesLoading: vehiclesLoading || isRefetching,
  };
};
