import { createContext, useCallback, useMemo, useState } from "react";

import type * as T from "./types";

export const SelectedRowContext = createContext<T.SelectedRowContextProps>(
  {} as T.SelectedRowContextProps
);

export const SelectedRowProvider = ({ children }: T.ProviderProps) => {
  const [driver, setDriver] = useState<T.SelectedRowContextProps["driver"]>();
  const [vehicle, setVehicle] = useState<T.SelectedRowContextProps["vehicle"]>();

  const setSelectedRow = useCallback((driver: string, vehicle?: string) => {
    setDriver(driver);
    setVehicle(vehicle);
  }, []);

  const contextValue = useMemo(
    (): T.SelectedRowContextProps => ({
      driver,
      vehicle,
      setSelectedRow,
    }),
    [driver, setSelectedRow, vehicle]
  );

  return <SelectedRowContext.Provider value={contextValue}>{children}</SelectedRowContext.Provider>;
};
