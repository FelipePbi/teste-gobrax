import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/Home";
import "./index.scss";
import { SelectedRowProvider } from "./contexts/SelectedRowContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SelectedRowProvider>
        <App />
      </SelectedRowProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
