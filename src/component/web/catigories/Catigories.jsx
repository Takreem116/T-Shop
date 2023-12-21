
import React, { useContext } from 'react'

import { useQuery } from 'react-query'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import one from './../img/slide-1.png'
import two from './../img/slide-1 (1).png'
// Import Swiper styles
import 'swiper/css'
import './catigories.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


function Catigories() {


    
    const getCatigories = async ()=>{

  const {data } = await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?limit=7`)
   return (data.categories)


}


const {data, isLoading} = useQuery('web_cat' , getCatigories);
// console.log(data)
   

if(isLoading){

  return <p> loading .....</p>
}
  
   
  return (



<div >





<header>
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active position-relative">
      <img src={one} className="d-block w-100" alt="..." />

      <div className='container'>
        <div className='header-content position-absolute '>
          <h1>Julia Store</h1>
          <p> A Unique Shopping Experience</p>

        </div>
 
      </div>
    </div>
    <div className="carousel-item position-relative">
    <img src={two} className="d-block w-100" alt="..." />

    <div className='container'>

    <div className='header-content2 position-absolute '>
          <h1>Julia Store</h1>
          <p> A Unique Shopping Experience</p>

        </div>

        </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


</header>

<div className='container mt-5'>

<h2 className= {`text-center pb-2  titel`}> Category Product</h2>
<p className='text-center pb-5 intro'> Lets Start Shopping from our Store </p>

  


<Swiper
      modules={[Navigation, Pagination ]}

      spaceBetween={10}
      slidesPerView={5.6}
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




   
  
  </div>





    )
}

export default Catigories