import axios from 'axios';
import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'

import { CartContext } from '../context/cart.jsx';


function Product() {


    
const {productId} =useParams();
// console.log(productId)


const {AddtoCartContext}=useContext(CartContext)


const addtoCart = async (productId)=>{

const res = await AddtoCartContext(productId)
console.log(res)
}


const getProductDetails = async ()=>{


    const {data} = await axios.get ( `${import.meta.env.VITE_API_URL}/products/${productId}`)
    // console.log (data)

return (data.product)
}


const {data , isLoading}=useQuery("product-details" , getProductDetails)
if(isLoading){
    return <p> loading .....</p>
}

  return (
    <div className='container'>
<div className='row'>

<div className='col-lg-4 '>

    {data.subImages.map ((img  )=>

    <div className='images mt-3' key={data._id}>

<img  src={img.secure_url} alt='product img'/>
    </div>



    
    )}
</div>

<div className='col-lg-8 '>
<h2>{data.name}</h2>
<p>{data.price}</p>
<button className='btn btn-outline-info' onClick={()=>addtoCart(data._id)}>Add to Cart</button>


</div>

</div>



    </div>
  )
}

export default Product