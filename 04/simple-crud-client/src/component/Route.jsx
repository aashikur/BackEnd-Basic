import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from "../App";
import MainLayout from "./MainLayout"
import UserDetails from "./UserDetails"
import UpdateUser from "./UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path:'users/:id',
        loader: ({params}) =>  fetch(`http://localhost:3000/users/${params.id}`),
        element: <UserDetails />
      },
      {
        path: 'userUpdate/:id',
        loader: ({params}) => fetch(`http://localhost:3000/users/${params.id}`),
        Component: UpdateUser
      }
    ],
  },
]);

export default router