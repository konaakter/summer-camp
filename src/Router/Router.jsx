import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Dashboard from '../Layout/Dashboard';
import Allusers from '../Pages/Dashboad/Allusers/Allusers';
import AllClasss from '../Pages/Dashboad/AllClasss/AllClasss';
import ApproveClass from '../Pages/ApproveClass/ApproveClass';
import Studentcart from '../Pages/Dashboad/Studentcart/Studentcart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/approveclass",
        element: <ApproveClass></ApproveClass>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sinup",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboad",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboad/allusers",
        element: <Allusers></Allusers>,
      },
      {
        path: "/dashboad/allclass",
        element: <AllClasss></AllClasss>
      },
      {
        path: "/dashboad/mycart",
        element: <Studentcart></Studentcart>
      },
    ],
  },

]);

export default router;