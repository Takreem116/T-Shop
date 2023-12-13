import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx'
import style from './profile.module.css'
import { Link, Outlet } from 'react-router-dom'

function Profile() {




const{userData , loading}=useContext(UserContext)
// console.log(userData)



if (loading){

  return <p> loading .... </p>
}
  return (
   
<aside className={`${style.profile}`}>
  <div className={`${style.profileLinks}`}>



<nav>
<Link to='info' >User Information </Link>

<Link to='contact'> Contact</Link>
<Link  to='getOrder'> Order</Link>
</nav>

  </div>

<div className={`${style.userData}`}>
  <Outlet/>

</div>






</aside>


  )
}

export default Profile