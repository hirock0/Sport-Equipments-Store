import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import App from "../App";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Add_Products from "../Pages/Add_Products/Add_Products";
import All_Equipments from "../Pages/All_Equipments/All_Equipments";
import My_Equipments from "../Pages/My_Equipments/My_Equipments";
import Profile from "../Pages/Profile/Profile";
import Product_Details from "../Pages/Product_Details/Product_Details";
import EditProduct from "../Pages/EditProduct/EditProduct";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import OurProducts from "../Pages/OurProducts/OurProducts";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/all_sports_equipments",
          element: <All_Equipments />,
        },
        {
          path: "/add_products",
          element: (
            <PrivateRoutes>
              <Add_Products />
            </PrivateRoutes>
          ),
        },
        {
          path: "/my_equipments",
          element: (
            <PrivateRoutes>
              <My_Equipments />
            </PrivateRoutes>
          ),
        },
        {
          path: "/products/details/:Id",
          element: (
            <PrivateRoutes>
              <Product_Details />
            </PrivateRoutes>
          ),
        },
        {
          path: "/product/edit/:Id",
          element: (
            <PrivateRoutes>
              <EditProduct />
            </PrivateRoutes>
          ),
        },
        {
          path: "/user/profile",
          element: (
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          ),
        },
        {
          path: "/profile/update",
          element: (
            <PrivateRoutes>
              <UpdateProfile />
            </PrivateRoutes>
          ),
        },
        {
          path: "/products",
          element: <OurProducts />,
        },
        // public_routes
        {
          path: "/user/login",
          element: (
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          ),
        },
        {
          path: "/user/register",
          element: (
            <PublicRoutes>
              <Register />
            </PublicRoutes>
          ),
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
