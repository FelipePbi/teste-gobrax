import { useQuery, useIsFetching } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { Driver } from "../types/global";

export const useDriverHook = () => {
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

  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const onConfirmModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  return {
    openModal,
    driversData,
    driversLoading,
    onCloseModal,
    onOpenModal,
    onConfirmModal,
  };
};
