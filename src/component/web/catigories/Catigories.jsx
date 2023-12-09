
import React, { useContext } from 'react'

import { useQuery } from 'react-query'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css'
import './catigories.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { CartContext } from '../context/cart.jsx';


function Catigories() {


    
    const getCatigories = async ()=>{

  const {data } = await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?limit=7`)
   return (data.categories)


}


const {data, isLoading} = useQuery('web_cat' , getCatigories);
console.log(data)
   

if(isLoading){

  return <p> loading .....</p>
}
  
   
  return (



<div className='container mt-5'>


<Swiper
      modules={[Navigation, Pagination]}

      spaceBetween={50}
      slidesPerView={3.3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >


{data.length ? data.map((catigory)=>

<SwiperSlide key={catigory._id}>

  <Link to={`/categories/product/${catigory._id}`}>
  <img src={catigory.image.secure_url} />

  </Link>

</SwiperSlide>


): <h2> not found</h2>}






    
      
    </Swiper>



   
  
  </div>





    )
}

export default Catigories