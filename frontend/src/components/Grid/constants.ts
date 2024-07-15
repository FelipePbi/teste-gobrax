import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 0.4, headerAlign: "center", align: "center" },
  { field: "name", headerName: "Nome", flex: 1 },
  { field: "document", headerName: "Documento", flex: 1 },
  {
    field: "vehicle",
    headerName: "Vínculo",
    flex: 1,
    valueGetter: (value) => (value ? "Sim" : "Não"),
  },
];
