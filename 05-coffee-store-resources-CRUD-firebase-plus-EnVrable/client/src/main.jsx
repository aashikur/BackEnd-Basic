import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layout/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import ViewCoffee from './components/ViewCoffee.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import UsersTable from './components/UsersTable.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('https://server-gvym4v9vy-ashikur-rahamans-projects-c6a6d28d.vercel.app/coffees'),
      },
      {
        path: "/addcoffee",
        Component: AddCoffee,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },{
        path: "/users",
        Component: UsersTable,
        loader: () => fetch('https://server-gvym4v9vy-ashikur-rahamans-projects-c6a6d28d.vercel.app/users'),
      },
      {
        path: "viewcoffee/:id",
        Component: ViewCoffee,
        loader: ({ params }) => fetch(`https://server-gvym4v9vy-ashikur-rahamans-projects-c6a6d28d.vercel.app/coffees/${params.id}`)
      },
      {
        path: "/updatecoffee/:id",
        Component: UpdateCoffee,
        loader: ({ params }) => fetch(`https://server-gvym4v9vy-ashikur-rahamans-projects-c6a6d28d.vercel.app/coffees/${params.id}`)
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
