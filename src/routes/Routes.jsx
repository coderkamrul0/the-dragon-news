import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  createBrowserRouter
} from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Home/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      }
    ]
  },
    {
      path: "category",
      element: <Main></Main>,
      children: [
        {
          path: ':id',
          element: <Category/>,
          loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        },
        
      ]
    },
    {
      path: '/news',
      element: <NewsLayout/>,
      children: [
        {
          path: ':id',
          element: <PrivateRoutes><News/></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ]);
  export default router