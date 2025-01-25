import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import ContextApi from "./utils/ContextApi/ContextApi.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextApi>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </ContextApi>
  </StrictMode>
);
