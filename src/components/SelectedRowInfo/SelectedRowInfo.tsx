import "./SelectedRowInfo.scss";
import { Box } from "@mui/material";

function SelectedRowInfo() {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Box className="selected-row-container">
        <p>Selecionado:</p>
        <p>
          <strong>Motorista:</strong> Guga
        </p>
        <p>
          <strong>Veículo:</strong> DAF - ABC-1234
        </p>
      </Box>
    </Box>
  );
}

export default SelectedRowInfo;
