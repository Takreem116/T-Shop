import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx'
import style from './profile.module.css'
import { Link, Outlet } from 'react-router-dom'
import { FaInfoCircle } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { MdBorderColor } from "react-icons/md";


function Profile() {




const{userData , loading}=useContext(UserContext)
console.log(userData)



if (loading){

  return <p> loading .... </p>
}
  return (
   
<aside className={`${style.profile}`}>
  <div className={`${style.profileLinks}`}>



<nav className={`${style.links}`}>
<Link to='info' > <FaInfoCircle /> User Information </Link>

<Link to='contact'> <IoIosContact /> Contact</Link>
<Link  to='getOrder'> <MdBorderColor /> Order</Link>
</nav>

  </div>

<div className={`${style.userData}`}>
  <Outlet/>

</div>






</aside>


  )
}

export default Profile