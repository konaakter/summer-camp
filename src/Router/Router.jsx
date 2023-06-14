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
import Allinstractor from '../Pages/Allinstractor/Allinstractor';
import Paymenthistory from '../Pages/Dashboad/Paymenthistory/Paymenthistory';
import Privaterouter from './Privaterouter';
import AdminRouter from './AdminRouter';
import InstractorRouter from './InstractorRouter';


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
        path: "/ser",
        element: <Allinstractor></Allinstractor>,
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
    element: <Privaterouter><Dashboard></Dashboard></Privaterouter> ,
    children: [
      {
        path: "allusers",
        element: <AdminRouter><Allusers></Allusers></AdminRouter>,
      },
      {
        path: "allclass",
        element: <AdminRouter><AllClasss></AllClasss></AdminRouter> 
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
        element: <InstractorRouter><Addclass></Addclass></InstractorRouter>
      },
      {
        path: "myaddclass",
        element: <InstractorRouter><Inastractorclass></Inastractorclass></InstractorRouter>
      },
      {
        path: "history",
        element: <Paymenthistory></Paymenthistory>
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