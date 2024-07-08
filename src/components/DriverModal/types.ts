import type { Driver, Vehicle } from "../../types/global";

export type DriverModalProps = {
  openModal: boolean;
  driverLoading: boolean;
  onConfirmModal: (data: Omit<Driver, "id">) => void;
  onCloseModal: () => void;
  vehicleOptions?: Vehicle[];
};
