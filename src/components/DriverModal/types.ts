import type { Vehicle } from "../../types/global";

export type DriverModalProps = {
  openModal: boolean;
  onConfirmModal: () => void;
  onCloseModal: () => void;
  vehicleOptions?: Vehicle[];
};
