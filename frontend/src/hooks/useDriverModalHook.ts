import { useCallback, useEffect, useState } from "react";
import { useCreateDriverHook } from "../services/useCreateDriverHook";

export const useDriverModalHook = () => {
  const { isSuccess, driverLoading, createDriverMutation } = useCreateDriverHook();
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
    driverLoading,
    onCloseModal,
    onOpenModal,
    onConfirmModal: createDriverMutation,
  };
};
