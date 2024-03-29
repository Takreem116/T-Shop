import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/User.jsx'
import axios from 'axios'
import { useQuery } from 'react-query'
import style from './profile.module.css'

function GetOrder() {




    const getOrder =async()=>{

        const token = localStorage.getItem("userToken")
        const{data}=await axios.get(`${import.meta.env.VITE_API_URL}/order` , {headers : {Authorization : `Tariq__${token}`}})


        console.log(data.orders)

        return data.orders    
      
      }


    const {data , isLoading } = useQuery('get_cart' , getOrder)
    
if(isLoading){
  return <p> loading .....</p>
}

  return (
<div className='container pt-5'>




  <h2 className={`${style.title}`}> Order Information</h2> 

<table className={`table ${style.table_font}`}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Address</th>
      <th scope="col">phone Number</th>
      <th scope="col">final Price</th>
      <th scope="col">payment Type</th>
      <th scope="col">Status</th>

      


      
    </tr>
  </thead>

  {data.length ?data.map((order , index )=>


  <tbody key={order._id}>

<tr >
  <th scope="row">{index}</th>
  <td>{order.address}</td>
  <td>{order.phoneNumber}</td>
  <td>{order.finalPrice}</td>
  <td>{order.paymentType}</td>
  <td>{order.status}</td>


</tr>


</tbody>


) : <p> no order</p>} 

</table>


{/* {data.length ?data.map((order , index )=>

<div className='order-info' key={order._id}>
  <h3> Order {index} </h3>
<span className='d-flex'> Address : <p> {order.address}</p> </span>

<span className='d-flex'> Final Price : <p> {order.finalPrice}</p></span>

<span className='d-flex'> Phone : <p> {order.phoneNumber}</p></span>



</div>

) : <p> no order</p>} */}

</div> 


)
}

export default GetOrder