import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import MainLayout from './component/layout/MainLayout.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import PageError from './pages/PageError.jsx';
import HomePage from './pages/HomePage.jsx';
import AddCoffee from './pages/AddCoffee.jsx';
import CoffeeCardDetails from './component/CoffeeCardDetails.jsx';
import CoffeeCardEdit from './component/CoffeeCardEdit.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <PageError/>,
    children: [
    {
      index: true,
      Component: HomePage,
      loader: () => fetch('http://localhost:3000/addcoffee')
    },
    {
      path:'/add-coffee',
      Component: AddCoffee
    },
    {
      path:'/coffee/:id',
      Component: CoffeeCardDetails,
      loader: ({params}) => fetch(`http://localhost:3000/addcoffee/${params.id}`)
    },
    {
      path: 'coffee-card-edit/:id',
      Component: CoffeeCardEdit,
      loader: ({params}) => fetch(`http://localhost:3000/addcoffee/${params.id}`)
    }
  
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
