import { useSelectRow } from "../../hooks/useSelectRow";
import "./SelectedRowInfo.scss";
import { Box } from "@mui/material";

function SelectedRowInfo() {
  const { driver, vehicle } = useSelectRow();

  return (
    <Box display="flex" justifyContent="flex-end">
      <Box className="selected-row-container">
        <p>Selecionado:</p>
        <p>
          <strong>Motorista:</strong> {driver}
        </p>
        <p>
          <strong>Veículo:</strong> {vehicle}
        </p>
      </Box>
    </Box>
  );
}

export default SelectedRowInfo;
