import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AddProducts from "../pages/AddProducts/AddProducts";
import MyCart from "../pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import BrandProduct from "../pages/BrandProduct/BrandProduct";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import UpdateMyProduct from "../pages/UpdateMyProduct/UpdateMyProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/product/:brandName",
        element: <BrandProduct></BrandProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.brandName}`),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/product/:brandName/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.brandName}`),
      },
      {
        path: "/product/updateProduct/:brandName/:id",
        element: <UpdateMyProduct></UpdateMyProduct>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/product/updateProduct/${params.brandName}/${params.id}`
          ),
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
export default router;
