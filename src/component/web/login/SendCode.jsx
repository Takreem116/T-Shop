import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import style from './login.module.css'

function SendCode() {

let [ email , setEmail] = useState()

const navigate = useNavigate()

const getEmail =(e)=>{

    
setEmail (e.target.value) 
}


const sendcode =async (e)=>{

    e.preventDefault();


    const{data} = await axios.patch(`${import.meta.env.VITE_API_URL}/auth/sendcode` ,{email})
    navigate('/resetpass')

    // console.log(data)





}


  return (



<> 


<div className='container justify-content-center my-5 pt-5 
 w-50 rounded-5' >

<div  className={`${style.login}`}>
<h2 className='ps-4 pt-5 login-text text-center'> Send Code  </h2>
 <form   className=' px-5'>
    <label className='py-4' > Email</label>
    <input className='form-control w-75' type='email' name='email' onChange={getEmail}  />
    
    <div className= {`${style.btn}`}>
    <button className={`${style.login_btn}`} type='submit' onClick={sendcode}> send code </button>

      </div>

     </form>
</div>




</div>


</>  

    )
}

export default SendCode