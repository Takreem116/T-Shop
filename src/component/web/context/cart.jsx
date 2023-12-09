import axios from "axios";
import { createContext } from "react";

import { toast } from 'react-toastify';


 export const CartContext = createContext(null)


 export default function CartContextProvider ({children}){

 const AddtoCartContext = async (productId)=>{


    try{

const token = localStorage.getItem("userToken")
const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/cart` , {productId} , {headers :{Authorization:`Tariq__${token}`}})
if (data.message== 'success'){
    toast.success(' Add To Cart Successfuly', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
}
return data 
    }
    catch(error){
        // console.log(error)
    }



}


const GetCartContext = async()=>{
try {
    const token = localStorage.getItem("userToken");
    const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/cart` , {headers:{Authorization:`Tariq__${token}`}})
    // console.log (data)
    return data
}
catch(error){
    console.log(error)
}

}


const removeitemContext =  async (productId)=>{
    try{
        const token = localStorage.getItem("userToken");
    
        const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/removeItem` , {productId} , {headers : {Authorization :`Tariq__${token}` }})
    
        if (data.message== 'success'){
            toast.success(' Deleted  Successfuly', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                })
        }
    
        return (data)


    
    
        
    }
    catch(error){
        console.log(error)
    }
   


}


return <CartContext.Provider value={{AddtoCartContext ,GetCartContext ,removeitemContext}}>
{children}

</CartContext.Provider>
 }