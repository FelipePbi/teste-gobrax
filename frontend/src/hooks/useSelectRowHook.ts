import { useCallback, useContext } from "react";
import { SelectedRowContext } from "../contexts/SelectedRowContext";
import { GridCallbackDetails, GridRowSelectionModel } from "@mui/x-data-grid";

export const useSelectRowHook = () => {
  const context = useContext(SelectedRowContext);

  const handleSelectRow = useCallback(
    (rowSelectionModel: GridRowSelectionModel, details: GridCallbackDetails<any>) => {
      const selectedRow = details.api.getRow(rowSelectionModel[0]);

      if (selectedRow) {
        const driver = selectedRow.name;
        const vehicle = selectedRow.vehicle
          ? `${selectedRow.vehicle.brand} - ${selectedRow.vehicle.plate}`
          : "Nenhum vínculo";

        context.setSelectedRow(driver, vehicle);
      } else {
        context.setSelectedRow("Nenhum selecionado", "Nenhum selecionado");
      }
    },
    [context]
  );

  return {
    ...context,
    handleSelectRow,
  };
};
