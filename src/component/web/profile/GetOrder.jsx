import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/User.jsx'
import axios from 'axios'
import { useQuery } from 'react-query'

function GetOrder() {




    const getOrder =async()=>{

        const token = localStorage.getItem("userToken")
        const{data}=await axios.get(`${import.meta.env.VITE_API_URL}/order` , {headers : {Authorization : `Tariq__${token}`}})


        // console.log(data.orders)

        return data.orders    
      
      }


    const {data , isLoading } = useQuery('get_cart' , getOrder)

    // console.log(data)

if(isLoading){
  return <p> loading .....</p>
}

  return (
<div className='container'>

  <h2> Order Information</h2> 


  {console.log(data.orders)}
{data.length ?data.map((order , index )=>

<div className='order-info' key={order._id}>
  <h3> Order {index} </h3>
<span className='d-flex'> Address : <p> {order.address}</p> </span>

<span className='d-flex'> Final Price : <p> {order.finalPrice}</p></span>

<span className='d-flex'> Phone : <p> {order.phoneNumber}</p></span>



</div>

) : <p> no order</p>}

</div> 


)
}

export default GetOrder