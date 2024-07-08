import { useSelectRowHook } from "../../hooks/useSelectRowHook";
import { useGetDriverHook } from "../../services/useGetDriverHook";
import "./SelectedRowInfo.scss";
import { Box } from "@mui/material";

function SelectedRowInfo() {
  const { driver, vehicle } = useSelectRowHook();
  const { driversData, driversLoading } = useGetDriverHook();

  if (!driversData?.length && !driversLoading) {
    return null;
  }

  return (
    <Box display="flex" justifyContent="flex-end">
      <Box className="selected-row-container">
        <p>Selecionado:</p>
        <p>
          <strong>Motorista:</strong> {driver || "Nenhum selecionado!"}
        </p>
        <p>
          <strong>Veículo:</strong> {vehicle || "Nenhum selecionado!"}
        </p>
      </Box>
    </Box>
  );
}

export default SelectedRowInfo;
