import { useCallback, useMemo } from "react";

import { useGetDriverHook } from "../services/useGetDriverHook";
import { useGetVehicleHook } from "../services/useGetVehicleHook";

export const useGridHook = () => {
  const { driversData, driversLoading, refetch: refetchDriver } = useGetDriverHook();
  const { vehiclesData, vehiclesLoading, refetch: refetchVehicle } = useGetVehicleHook();

  const gridRowData = useMemo(() => {
    return driversData?.map((driver) => {
      return {
        ...driver,
        vehicle: vehiclesData?.find((vehicle) => vehicle.id == driver.vehicleId),
      };
    });
  }, [driversData, vehiclesData]);

  const refetch = useCallback(() => {
    refetchDriver();
    refetchVehicle();
  }, [refetchDriver, refetchVehicle]);

  return {
    gridRowData,
    gridLoading: driversLoading || vehiclesLoading,
    refetch,
  };
};
