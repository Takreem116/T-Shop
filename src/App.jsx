import { RouterProvider} from "react-router-dom";
import CartContextProvider from "./component/web/context/cart.jsx";
import {router} from './layouts/Routes.jsx'
import { useContext, useEffect } from "react";
import { UserContext } from "./component/web/context/User.jsx";
export default function App() {




const {userToken , setUserToken}= useContext(UserContext)

useEffect(()=>{
if (localStorage.getItem("userToken") != null ){
  setUserToken(localStorage.getItem("userToken"))
}

} , [])

 
  return (


<CartContextProvider>
  <RouterProvider router={router} />


      
    </CartContextProvider>





  
  )
}
