import { useCallback, useState } from "react";
import { Vehicle } from "../types/global";
import { useQuery } from "@tanstack/react-query";

export const useVehicleHook = () => {
  const { data: vehiclesData, isLoading: vehiclesLoading } = useQuery({
    queryKey: ["vehicles"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/vehicles");
      const data: Vehicle[] = (await response.json()) as Vehicle[];

      return data;
    },
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
    vehiclesData,
    vehiclesLoading,
    onCloseModal,
    onOpenModal,
    onConfirmModal,
  };
};
