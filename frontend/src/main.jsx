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
import { UserPage } from './components/user/UserPage.jsx';
import { OfferPage } from './components/offer/OfferPage.jsx';
import { BookPage } from './components/book/BookPage.jsx';
import { Book } from './components/book/Book.jsx';
import { BookRequest } from './components/book/BookRequest.jsx';

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
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/book/:bookId/offer",
    element: <OfferPage />,
  },
  {
    path: "/book",
    element: <BookPage />,
  },
  {
    path: "/book/:bookId",
    element: <Book />,
  },
  {
    path: "/book/request",
    element: <BookRequest />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
