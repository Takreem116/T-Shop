import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import { CgDetailsMore } from "react-icons/cg";
import { VscError } from "react-icons/vsc";
import Star from '../products/Star.jsx'

function CatigoriesDetails() {


    const {categoryId} = useParams();
    // console.log(categoryId)


    const getCategoriesDetails = async ()=> {


        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${categoryId}`)
        console.log(data)
        return (data.products)
    }


     const {data , isLoading} = useQuery('CategoriesDetails ' , getCategoriesDetails)

     if (isLoading){


        return <p> loading ....</p>
     }

  return (
<div className='products container'>

    <h2 className='titel text-center  my-5 pt-5'> Our Products</h2>
    <div className='row text=center'>
    {data.length ? data.map ((product)=>


<div className='col-md-4 product' key={product._id}>
    <img className='product-img' src={product.mainImage.secure_url} />
    <Star rating={product.avgRating
}/>

<p className='py-2 product-name'>{product.name} </p>
<Link className=' details_link rounded-2 pe-2' to={`/products/${product._id}`} >Details <CgDetailsMore />
</Link>


</div>
    
    
    )
    
    
    
    
    :<h2 className='not-found'><VscError />
    No Products Avaliable Now ... Will Add it's Soon  </h2>}
    </div>
    
  

    
    
    
    
     </div>  )
}

export default CatigoriesDetails