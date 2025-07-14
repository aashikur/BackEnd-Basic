
import { createBrowserRouter } from "react-router";
import Home from "../components/pages/HomePage";
import RootPageLayout from "../layout/RootPageLayout";
import RegisterPage from "../components/pages/RegisterPage";
import LoginPage from "../components/pages/LoginPage";
import JobDetails from "../components/Home/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJob from "../components/Home/ApplyJob";

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
      },
      {
        path: "/job-details/:id",
        element: <JobDetails/>,
        loader: (params) => fetch(`http://localhost:3000/jobs-details/${params.params.id}`)
      },
      {
        path: '/apply-job/:id',
        element: <PrivateRoute> <ApplyJob/> </PrivateRoute>
      }
    ],
  },
]);

export default router