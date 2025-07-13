
import ReactDOM from "react-dom/client";
import './index.css'

import {
  RouterProvider,
} from "react-router";

import router from "./Route/Route";
import { AuthContext } from "./context/AuthContext";
import AuthProvider from "./context/AuthProvider";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(

  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>

);