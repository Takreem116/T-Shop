import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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


<div className='container justify-content-center mt-5 bg-danger-subtle
 w-50 rounded-5' >
<h2 className='ps-4 pt-5'> Send Code  </h2>
 <form   >
    <label className='py-4' > Email</label>
    <input className='form-control w-75' type='email' name='email' onChange={getEmail}  />
    <button className='my-4 ms-4 w-25 rounded-5 px-3 py-2' type='submit' onClick={sendcode}> send code </button>
     </form>



</div>


</>  

    )
}

export default SendCode