import './index.css'
import {
  RouterProvider,
} from "react-router";
import ReactDOM from "react-dom/client";
import router from "./component/Route.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);