import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import style from './product.module.css'


function GetAllProducts() {

    let[isLoading , setLoadind] =useState(true)

    const [page , setPage] = useState(1)
    const[search , setValueSearch]=useState([])
    const [valuename , setValueName]=useState()
    
const [data ,setData]=useState([])
    const pageNum =[];

const getAllProduct = async()=>{
try{
  const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/products?page=${page}&sort=${valuename}&search=${search}`)

  setData(data)
}catch(error){
  console.log(error)
}finally{
  setLoadind(false)
}




}
console.log(data)




const getPage = (page)=>{
    setPage(page);
    console.log(page)
    getAllProduct()


}

const handelsort = (e)=>{
    // console.log(e.target.value)
     e.preventDefault();
    setValueName(e.target.value)
    getAllProduct()
}

const handelsearch =(e)=>{
    console.log(e.target.value)
    setValueSearch(e.target.value)

}

const seacrh= (e)=>{
    e.preventDefault();
    console.log('hiiii')

    getAllProduct()


}







if (data){
    const number = (data.total/data.page );
    // console.log (number)
    for( let i =1 ; i <=number ; i++){
        pageNum.push(i)
    }

    // console.log(pageNum)

}





useEffect(()=>{
    getAllProduct()
} ,[])

if(isLoading){
  return<p>loading ....</p>
}



  return (
    <div className='container'>





<h2 className={`  text-center pt-5 mt-5 ${style.titel}`}> All Products</h2>


<div className='sort d-flex justify-content-between py-4'>


    <div className='d-flex'>
    <p className='pe-3'> Sort By</p>
<select onChange={handelsort}>
<option>Default</option>
< option value="name" > Name</option>

    < option value="price" > price</option>
    < option value="-price" > -Price</option>
    < option value="discount" > Discount</option>

</select>
    </div>



<div className='search ps-3'>

<input className='rounded-pill py-2 px-3' type="text"  onChange={handelsearch} />
<button className={`ms-3 ${style.add_to_cart}`}  onClick={seacrh} >Search</button>

</div> 
</div> 



<div className='row'>
{data ? data.products.map ( (product)=>
        

        <div className={`col-md-4 ${style.product_details}`}  key={product._id}>




            <img className={`${style.Allproduct_img}`} src={product.mainImage.secure_url} />
            <h2 className={` pt-3  ${style.info}`} > {product.name}</h2>
            <h2 className={` pt-3  ${style.info}`} > <span>Price :</span>${product.price}</h2>






        </div>



        ) : <p> no product</p>} 


</div>

<div className='pag'>
<nav aria-label=" Page navigation example">
  <ul className="pagination ">


    { pageNum.map((num , index)=>

    <React.Fragment key={num}>
                <li className={`page-item ${num == index ?"active":""}`}><Link className="page-link" href="#"
                 onClick={()=>getPage(num)} >{num}</Link></li>


    </React.Fragment>

    )    
        }


    
    
  </ul>
</nav>
</div>


    </div>
  )
}

export default GetAllProducts