import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx'

function Profile() {




const{userData}=useContext(UserContext)
console.log(userData)

  return (
    <div className='container justify-content-center mt-5 bg-danger-subtle
    w-50 rounded-5'>
    <h2 className='ps-5 pt-5'> Profile</h2>

<div className='user d-flex justify-content-around pt-3 '>
    <div className='user-info'>
    <p  className='fs-5 '> Name :    <span className='fs-5 '> {userData.userName}</span></p>
    <p  className='fs-5 '> Email :    <span className='fs-5 '> {userData.email}</span></p>
    <p className='fs-5 '> Role :    <span className='fs-5 '> {userData.role}</span></p>


    </div>

 
    <img className='bg-white my-5' src={userData.image.secure_url} alt='image'/>
</div>
</div>


  )
}

export default Profile