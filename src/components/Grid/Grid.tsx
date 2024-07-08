import { useSelectRowHook } from "../../hooks/useSelectRowHook";
import "./Grid.scss";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./constants";
import { useGridHook } from "../../hooks/useGridHook";

function Grid() {
  const { handleSelectRow } = useSelectRowHook();
  const { gridLoading, gridRowData } = useGridHook();

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
