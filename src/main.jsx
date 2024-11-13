import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';
import Root from './Components/Root.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import Orders from './Components/Orders.jsx';
import PrivetRoutes from './Routes/PrivetRoutes.jsx';
import Profile from './Components/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: 'login',
        element: <Login></Login>
      },

      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path:'orders',
        element: <PrivetRoutes>
          <Orders></Orders>
        </PrivetRoutes>
      },

      {
        path: 'profile',
        element: <PrivetRoutes> <Profile></Profile> </PrivetRoutes>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
