
import { createBrowserRouter } from "react-router";
import Home from "../components/pages/HomePage";
import RootPageLayout from "../layout/RootPageLayout";
import RegisterPage from "../components/pages/RegisterPage";
import LoginPage from "../components/pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPageLayout/>,
    children: [

      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/register",
        element: <RegisterPage/>
      },
      {
        path: "/login",
        element: <LoginPage/>
      }
    ],
  },
]);

export default router