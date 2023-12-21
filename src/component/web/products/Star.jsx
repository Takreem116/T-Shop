import React from 'react'
import { CiStar } from "react-icons/ci";
import style from './product.module.css'

function Star({rating}) {

    const ratingNum = []

    for(let i =0 ; i< rating ; i++){
        ratingNum.push(i)
    }






  return (
    <div>

        {ratingNum.map((index)=>
        
        <CiStar className={`${style.star}`} key={index}/>



        
        )}
    </div>
  )
}

export default Star