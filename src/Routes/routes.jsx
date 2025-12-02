import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home/Home";
import MainLayout from "../Layout/MainLayout/MainLayout";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
