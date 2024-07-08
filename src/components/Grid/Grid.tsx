import { useSelectRow } from "../../hooks/useSelectRow";
import "./Grid.scss";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./constants";

function Grid() {
  const { handleSelectRow } = useSelectRow();

  const rows = [
    { id: 1, name: "Snow", document: "Jon", vehicle: { brand: "Ford", plate: "ACX-1231" } },
    { id: 2, name: "Lannister", document: "Cersei", vehicle: null },
    { id: 3, name: "Lannister", document: "Jaime", vehicle: { brand: "Ford", plate: "ACX-1231" } },
    { id: 4, name: "Stark", document: "Arya", vehicle: null },
    { id: 5, name: "Targaryen", document: "Daenerys", vehicle: null },
    { id: 7, name: "Clifford", document: "Ferrara", vehicle: { brand: "Ford", plate: "ACX-1231" } },
    { id: 8, name: "Frances", document: "Rossini", vehicle: null },
    { id: 9, name: "Roxie", document: "Harvey", vehicle: { brand: "Ford", plate: "ACX-1231" } },
  ];

  return (
    <DataGrid
      rows={rows}
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
    />
  );
}

export default Grid;
