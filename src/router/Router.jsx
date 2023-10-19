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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://192.168.1.5:5000/brands"),
      },
      {
        path: "/:brandName",
        element: <BrandProduct></BrandProduct>,
        loader: ({params}) => fetch(`http://192.168.1.5:5000/${params.brandName}`),
      }, 
      {
        path: "/:brandName/:id",
        element:  <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://192.168.1.5:5000/${params.brandName}`),
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
