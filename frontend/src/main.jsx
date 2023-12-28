import React from 'react'
import ReactDOM from 'react-dom/client'
import {HomePage} from './components/home/HomePage.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from './components/login/LoginPage.jsx';
import { RegisterPage } from './components/register/RegisterPage.jsx';
import { AdminPage } from './components/admin/AdminPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
