import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Entrance } from "./components/Entrance.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Entrance />
  </StrictMode>,
);

