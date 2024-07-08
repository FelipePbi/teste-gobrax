import { useMemo } from "react";
import { useDriverHook } from "./useDriverHook";
import { useVehicleHook } from "./useVehicleHook";

export const useGridHook = () => {
  const { driversData, driversLoading } = useDriverHook();
  const { vehiclesData, vehiclesLoading } = useVehicleHook();

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
