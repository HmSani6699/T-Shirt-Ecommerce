import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home/Home";
import MainLayout from "../Layout/MainLayout/MainLayout";
import About from "../Pages/About/About";
import CardDetails from "../Pages/CardDetails/CardDetails";
import Product from "../Pages/Product/Product";

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
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/card/:id",
        element: <CardDetails />,
      },
    ],
  },
]);

export default router;
