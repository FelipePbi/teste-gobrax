import { useCallback, useEffect, useState } from "react";
import { useCreateVehicleHook } from "../services/useCreateVehicleHook";

export const useVehicleModalHook = () => {
  const { createVehicleMutation, isSuccess, vehiclesLoading } = useCreateVehicleHook();
  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setOpenModal(false);
    }
  }, [isSuccess]);

  return {
    openModal,
    vehiclesLoading,
    onCloseModal,
    onOpenModal,
    onConfirmModal: createVehicleMutation,
  };
};
