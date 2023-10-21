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
        loader: () =>
          fetch(
            "https://brand-shop-server-express-mongodb-mern-assignment-10.vercel.app/brands"
          ),
      },
      {
        path: "/product/:brandName",
        element: <BrandProduct></BrandProduct>,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-express-mongodb-mern-assignment-10.vercel.app/product/${params.brandName}`
          ),
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
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-express-mongodb-mern-assignment-10.vercel.app/product/${params.brandName}`
          ),
      },
      {
        path: "/product/updateProduct/:brandName/:id",
        element: (
          <PrivateRoute>
            <UpdateMyProduct></UpdateMyProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-express-mongodb-mern-assignment-10.vercel.app/product/updateProduct/${params.brandName}/${params.id}`
          ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            `https://brand-shop-server-express-mongodb-mern-assignment-10.vercel.app/myCart`
          ),
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
