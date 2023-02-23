import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BillContextProvider } from "./store/BillContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BillContextProvider>
    <App />
  </BillContextProvider>
);
