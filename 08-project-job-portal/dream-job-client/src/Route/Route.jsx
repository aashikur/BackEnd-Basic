
import { createBrowserRouter } from "react-router";
import Home from "../components/pages/HomePage";
import RootPageLayout from "../layout/RootPageLayout";
import RegisterPage from "../components/pages/RegisterPage";
import LoginPage from "../components/pages/LoginPage";
import JobDetails from "../components/Home/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJob from "../components/Home/ApplyJob";
import ApplicationsPage from "../components/pages/ApplicationsPage";
import MyApplicationsPage from "../components/pages/MyApplicationsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPageLayout />,
    children: [

      {
        path: "/",
        element: <Home />
      },
      {
        path: "/register",
        element: <RegisterPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/applications",
        element: <ApplicationsPage />,
        loader: () => fetch('http://localhost:3000/applications')
      },
      {
        path: "/my-applications",
        element: <MyApplicationsPage />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          console.log(url)
          const email = url.searchParams.get("email");
          return fetch(`http://localhost:3000/my-applications?email=${email}`);
        }
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
        loader: (params) => fetch(`http://localhost:3000/jobs-details/${params.params.id}`)
      },
      {
        path: '/apply-job/:id',
        element: <PrivateRoute> <ApplyJob /> </PrivateRoute>
      }
    ],
  },
]);

export default router