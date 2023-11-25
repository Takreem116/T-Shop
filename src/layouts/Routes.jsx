 
 import Home from '../component/web/home/Home.jsx'
 import Catigories from '../component/web/catigories/Catigories.jsx'
 import DashboardHome from '../component/dashboard/home/Home.jsx'
 
 import DashboardCatigories from '../component/dashboard/catigories/Catigories.jsx'
 import Layout from './Layout.jsx';
 import DashboardLayout from './DashboardLayout.jsx';
 import {
    createBrowserRouter,
  } from "react-router-dom";
import Register from '../component/web/register/Register.jsx';
  
 
 
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children : [{
        path:'home' ,
        element :<Home />
      } ,

      {
        path:'register' ,
        element :<Register /> ,
      } ,
    {
      path:'catigories' ,
      element:<Catigories /> ,
    }]
    },
  
    {
  
      path:'/dashboard' ,
      element :<DashboardLayout /> ,
      children :[{
        path:'home' ,
        element :<DashboardHome />
      } , 
    {
  
      path:'catigories' ,
      element :<DashboardCatigories /> 
    }]
    }
  ]);