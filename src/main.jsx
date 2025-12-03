import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <div className="text-red-500 text-[60px]"> hallo</div> */}
    <RouterProvider router={router} />
  </StrictMode>
);
