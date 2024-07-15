import type { ReactNode } from "react";

export type SelectedRowContextProps = {
  driver?: string;
  vehicle?: string;
  id?: string;
  setSelectedRow: React.Dispatch<
    React.SetStateAction<Omit<SelectedRowContextProps, "setSelectedRow"> | undefined>
  >;
};

export type ProviderProps = {
  children: ReactNode;
};
