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
import Bokingclass from '../Pages/Dashboad/Bokingclass/Bokingclass';
import Addclass from '../Pages/Dashboad/Instractor/Addclass/Addclass';
import Inastractorclass from '../Pages/Dashboad/Instractor/Inastractorclass/Inastractorclass';
import Eroorpage from '../Pages/Eroorpage/Eroorpage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <Eroorpage></Eroorpage>,
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
    path: "dashboad",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "allusers",
        element: <Allusers></Allusers>,
      },
      {
        path: "allclass",
        element: <AllClasss></AllClasss>
      },
      {
        path: "mycart",
        element: <Studentcart></Studentcart>
      },
      {
        path: "Bokingclass",
        element: <Bokingclass></Bokingclass>
      },
      {
        path: "Addclass",
        element: <Addclass></Addclass>
      },
      {
        path: "myaddclass",
        element: <Inastractorclass></Inastractorclass>
      },
      
     
    ],
  },

]);

export default router;
/*
 {
        path: "payment",
        element: <Payment></Payment>
      },
      */