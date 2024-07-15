import { useSelectRowHook } from "../../hooks/useSelectRowHook";
import "./Grid.scss";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./constants";
import { useGridHook } from "../../hooks/useGridHook";
import { Box, Typography } from "@mui/material";
import { CoPresent } from "@mui/icons-material";

function Grid() {
  const { handleSelectRow } = useSelectRowHook();
  const { gridLoading, gridRowData } = useGridHook();

  if (!gridRowData?.length && !gridLoading) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        paddingTop={18}
      >
        <CoPresent fontSize="large" />
        <Typography variant="h5" component="h1" align="center" marginTop={3}>
          Nenhum motorista adicionado!
        </Typography>
      </Box>
    );
  }

  return (
    <DataGrid
      rows={gridRowData}
      columns={columns}
      checkboxSelection
      disableMultipleRowSelection
      hideFooterSelectedRowCount
      disableColumnSorting
      disableColumnMenu
      disableColumnResize
      disableColumnFilter
      hideFooter
      onRowSelectionModelChange={handleSelectRow}
      loading={gridLoading}
    />
  );
}

export default Grid;
