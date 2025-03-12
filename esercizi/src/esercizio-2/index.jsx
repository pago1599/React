import React from "react";
import { createRoot } from "react-dom/client";
import "../style.css";
import App from "./App";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
