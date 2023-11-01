import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PointContextProvider } from "./contexts/pointContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PointContextProvider>
      <App />
    </PointContextProvider>
  </React.StrictMode>
);
