import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-2xl bg-slate-800">Hello world!</div>,
    errorElement:<ErrorPage></ErrorPage>
  },
]);
export default router;
