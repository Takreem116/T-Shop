import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'

import { CartContext } from '../context/cart.jsx';
import style from './product.module.css'
import { UserContext } from '../context/User.jsx';
import { CiStar } from "react-icons/ci";
import Star from './Star.jsx';


function Product() {


    const {userToken}=useContext(UserContext)
const {productId} =useParams();
// console.log(productId)

const[comment , setReviwe]=useState([])
const [rating ,setRating]=useState()

const {AddtoCartContext}=useContext(CartContext)


const addtoCart = async (productId)=>{

const res = await AddtoCartContext(productId)
console.log(res)
}


const getProductDetails = async ()=>{


    const {data} = await axios.get ( `${import.meta.env.VITE_API_URL}/products/${productId}`)
    console.log (data)

return (data.product)
}



const getReview = (e)=>{
setReviwe (e.target.value)



}
const handelrating=(e)=>{
  setRating(e.target.value)
console.log(rating)
}
 const submitReview= async(e)=>{

  e.preventDefault();
    const{data} = await axios.post(`${import.meta.env.VITE_API_URL}/products/${productId}/review` ,{comment ,rating } , {headers :{Authorization:`Tariq__${userToken}`}})
console.log(data)

if(data.products.status == "pinding"){
  console.log('cant rating')
}

 }







const {data , isLoading}=useQuery("product-details" , getProductDetails)
if(isLoading){
    return <p> loading .....</p>
}

  return (
    <div className='container'>

      <h2 className={`text-center py-5 ${style.titel}`}> Product Details </h2>
<div className='row'>

<div className='col-lg-4 '>

    {data.subImages.map ((img  )=>

    <div className='images mt-3' key={data._id}>

<img  className={`${style.product_img}`} src={img.secure_url} alt='product img'/>
    </div>



    
    )}
</div>

<div className='col-lg-8 '>
<p className={`${style.info}`} > <span className={` pe-2 ${style.span}`}>Name:</span>{data.name}</p>
<p className={`${style.info}`}><span className={`pe-2 ${style.span}`}>Description:</span>{data.description}</p>
<p className={`${style.info}`}><span className={`pe-2 ${style.span}`}>Price:</span> ${data.price} </p>
<button className={`${style.add_to_cart}`} onClick={()=>addtoCart(data._id)}>Add to Cart</button>







<div className={` mt-5 py-3 rounded-3 ${style.reviews}`}>

<h2 className={`py-3 text-center ${style.review_titel} `}> Reviews</h2>

<div id="carouselExample" className="carousel slide">






  <div className="carousel-inner">
  <div className="carousel-item active">
<p className={`text-center ${style.active_item}`}> To know more this product please swipe to read all reviews from our customer .. </p>
        </div>

  {data.reviews.map((rev  )=>
    
    <div className={`carousel-item text-center`}  key={rev._id}>
    <img className={`${style.img}`} src={rev.createdBy.image.secure_url}    />
<h3 className={` pt-2 ${style.review_comment}`} >{rev.comment}</h3>



<Star rating={rev.rating}/>


<p  className={` pt-2 ${style.review_userName}`}>{rev.createdBy.userName}</p>   
 </div>
 
   )   }
  
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon rounded-3 bg-secondaary " aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


</div>



</div>



<div className={`py-3 ${style.add_reviwe}`}>

    <h2 className={`py-3 text-center ${style.review_titel} `}> Share With Us your opinion about this product </h2>
    <div className={`${style.add_comment}`}>
    <textarea className={`ms-3 ${style.text_area}`} onChange={getReview}></textarea>

    <p className={`text-center ${style.active_item}`} > How do you rate this product out of 5 ?</p>
<select onChange={handelrating}>
  <option value='1'>1</option>
  <option value='2'>2</option>
  <option value='3'>3</option>
  <option value='4'>4</option>
  <option value='5'>5</option>

</select>


    <button className={`mt-5 ${style.add_to_cart}`} onClick={submitReview}>Submit</button>
    </div>
   

</div>
</div>




</div>



    </div>
  )
}

export default Product