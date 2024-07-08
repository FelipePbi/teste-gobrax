import "./Grid.scss";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

function Grid() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.4, headerAlign: "center", align: "center" },
    { field: "name", headerName: "Nome", flex: 1 },
    { field: "document", headerName: "Documento", flex: 1 },
    {
      field: "hasVehicle",
      headerName: "Vínculo",
      flex: 1,
      valueGetter: (value) => (value ? "Sim" : "Não"),
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
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
    />
  );
}

export default Grid;
