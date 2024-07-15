import React, { createContext, useCallback, useMemo, useState } from "react";

import type * as T from "./types";

export const SelectedRowContext = createContext<T.SelectedRowContextProps>(
  {} as T.SelectedRowContextProps
);

export const SelectedRowProvider = ({ children }: T.ProviderProps) => {
  const [selectedRow, setSelectedRow] =
    useState<Omit<T.SelectedRowContextProps, "setSelectedRow">>();

  const contextValue = useMemo(
    (): T.SelectedRowContextProps => ({
      ...selectedRow,
      setSelectedRow,
    }),
    [setSelectedRow, selectedRow]
  );

  return <SelectedRowContext.Provider value={contextValue}>{children}</SelectedRowContext.Provider>;
};
