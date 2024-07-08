import { useCallback, useState } from "react";

export const useDriverModalHook = () => {
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
    onCloseModal,
    onOpenModal,
    onConfirmModal,
  };
};
