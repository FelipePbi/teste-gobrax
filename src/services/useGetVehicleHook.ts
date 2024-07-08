import { sleep } from "../components/helpers/sleep";
import { Vehicle } from "../types/global";
import { useQuery } from "@tanstack/react-query";

export const useGetVehicleHook = () => {
  const { data: vehiclesData, isLoading: vehiclesLoading } = useQuery({
    queryKey: ["vehicles"],
    queryFn: async () => {
      const response = await fetch(`${process.env.API_URL}vehicles`);
      const data: Vehicle[] = (await response.json()) as Vehicle[];

      await sleep(800);
      return data;
    },
  });

  return {
    vehiclesData,
    vehiclesLoading,
  };
};
