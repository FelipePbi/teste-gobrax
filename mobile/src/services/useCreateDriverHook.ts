import { useCallback } from "react";
import { Driver } from "../types/global";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sleep } from "../helpers/sleep";
import { API_URL } from "../helpers/urls";

export const useCreateDriverHook = () => {
  const queryClient = useQueryClient();
  const {
    mutate,
    isPending: driverLoading,
    isSuccess,
  } = useMutation({
    mutationKey: ["create-driver"],
    mutationFn: async (data: Omit<Driver, "id">) => {
      await fetch(`${API_URL}drivers`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      await sleep(1500);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["drivers"],
      });
    },
  });

  const createDriverMutation = useCallback(
    (data: Omit<Driver, "id">) => {
      mutate(data);
    },
    [mutate]
  );

  return {
    isSuccess,
    driverLoading,
    createDriverMutation,
  };
};
