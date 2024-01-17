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
import { Searching } from './components/search/Search.jsx';
import { FetchDataBooks } from './components/data/data.jsx';
import BookDetails from './components/book/BookDetails.jsx';

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
  {path:"/search",
   element: <Searching />
  },
  {path:"/data",
   element: <FetchDataBooks />  
  },
  {path:"/book/:bookId",
  element: <BookDetails />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
