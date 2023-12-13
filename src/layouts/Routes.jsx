 
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
import Login from '../component/web/login/Login.jsx';
import SendCode from '../component/web/login/SendCode.jsx';
import ResetPass from '../component/web/login/ResetPass.jsx';
import CatigoriesDetails from '../component/web/catigories/CatigoriesDetails.jsx';
import Product from '../component/web/products/Product.jsx';
import ProtectedRoute from '../component/web/protectedRoute/ProtectedRoute.jsx';
import Cart from '../component/web/cart/Cart.jsx';
import Profile from '../component/web/profile/Profile.jsx';
import Order from '../component/web/order/Order.jsx';
import GetOrder from '../component/web/profile/GetOrder.jsx';
import UserInfo from '../component/web/profile/UserInfo.jsx';
import UserContact from '../component/web/profile/UserContact.jsx';
  
 
 
 export  const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout  />,
    children:[
        {
          path:'register',
          element:<Register />
        },
        {
          path:'login',
          element:<Login />
        },

        {
          path:'sendcode',
          element:<SendCode />
        },

        {
          path:'resetpass',
          element:<ResetPass />
        },
        {
          path:'home',
          element:<Home />
        },
        {
          path:'categories',
          element:<Catigories />
        },
        {

          path:'categories/product/:categoryId',
          element:<CatigoriesDetails />

        } ,


        {

          path:'products/:productId',
          element:<Product />

        } ,
        
        {

          path:'profile',
          element:
          <ProtectedRoute>
  <Profile />
          </ProtectedRoute>
        ,
          children :[
            {
              path:'info',
              element:<UserInfo/>
            }
            , {
              path:'contact' ,
              element:<UserContact />
            } ,
            {


              path:'getOrder' ,
              element: <GetOrder />
            }
          ]

        } ,


        {

          path:'cart',
          element:
          
          <ProtectedRoute>
          <Cart />


          </ProtectedRoute>

        }
        ,
        {


          path:'order' ,
          element: <Order />
        }, 
        {
          path:'*',
          element:<h2>page not found --- web</h2>
        }
    ]
  },
  {
      path:'/dashboard',
      element:<DashboardLayout />,
      children:[{
      path:'home',
      // element:<HomeDashboard />
    }
    ,{
      path:'categories',
      // element:<CategoriesDashboard />
    },
    {
      path:'*',
      element:<h2>page not found --- dashboard</h2>
    }
  ]

  }
]);