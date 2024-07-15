import type { Vehicle } from "../../types/global";

export type VehicleModalProps = {
  openModal: boolean;
  vehiclesLoading: boolean;
  onConfirmModal: (data: Omit<Vehicle, "id">) => void;
  onCloseModal: () => void;
};
