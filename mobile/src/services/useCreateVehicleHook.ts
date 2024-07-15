import { useCallback } from "react";
import { Vehicle } from "../types/global";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sleep } from "../helpers/sleep";
import { API_URL } from "../helpers/urls";

export const useCreateVehicleHook = () => {
  const queryClient = useQueryClient();
  const {
    mutate,
    isPending: vehiclesLoading,
    isSuccess,
  } = useMutation({
    mutationKey: ["create-vehicle"],
    mutationFn: async (data: Omit<Vehicle, "id">) => {
      await fetch(`${API_URL}vehicles`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      await sleep(1500);
    },
    onSuccess: () => {
      console.log("ssss");
      queryClient.invalidateQueries({
        queryKey: ["vehicles"],
      });
    },
  });

  const createVehicleMutation = useCallback(
    (data: Omit<Vehicle, "id">) => {
      mutate(data);
    },
    [mutate]
  );

  return {
    isSuccess,
    vehiclesLoading,
    createVehicleMutation,
  };
};
