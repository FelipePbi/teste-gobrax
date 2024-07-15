import type { ReactNode } from "react";

export type SelectedRowContextProps = {
  driver?: string;
  vehicle?: string;
  setSelectedRow: (driver: string, vehicle?: string) => void;
};

export type ProviderProps = {
  children: ReactNode;
};
