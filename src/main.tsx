import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/Home";
import "./index.scss";
import { SelectedRowProvider } from "./contexts/SelectedRowContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SelectedRowProvider>
      <App />
    </SelectedRowProvider>
  </React.StrictMode>
);
