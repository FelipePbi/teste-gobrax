import { useCallback, useContext } from "react";
import { SelectedRowContext } from "../contexts/SelectedRowContext";

export const useSelectRowHook = () => {
  const context = useContext(SelectedRowContext);

  const handleSelectRow = useCallback(
    (data) => {
      if (data) {
        const driver = data.driver;
        const vehicle = data.vehicle
          ? `${data.vehicle.brand} - ${data.vehicle.plate}`
          : "Nenhum vínculo";

        context.setSelectedRow({ driver, vehicle, id: data.id });
      } else {
        context.setSelectedRow({
          driver: "Nenhum selecionado",
          vehicle: "Nenhum selecionado",
        });
      }
    },
    [context]
  );

  return {
    ...context,
    handleSelectRow,
  };
};
