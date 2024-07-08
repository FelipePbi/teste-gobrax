import { useMemo } from "react";

import { useGetDriverHook } from "../services/useGetDriverHook";
import { useGetVehicleHook } from "../services/useGetVehicleHook";

export const useGridHook = () => {
  const { driversData, driversLoading } = useGetDriverHook();
  const { vehiclesData, vehiclesLoading } = useGetVehicleHook();

  const gridRowData = useMemo(() => {
    return driversData?.map((driver) => {
      return {
        ...driver,
        vehicle: vehiclesData?.find((vehicle) => vehicle.id == driver.vehicleId),
      };
    });
  }, [driversData, vehiclesData]);

  return {
    gridRowData,
    gridLoading: driversLoading || vehiclesLoading,
  };
};
