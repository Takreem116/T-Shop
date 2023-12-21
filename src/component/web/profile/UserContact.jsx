import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx'
import style from './profile.module.css'

function UserContact() {




    const{userData  , loading}=useContext(UserContext)


    // console.log(userData)

    if (loading){

        return <p> loading .... </p>
    }
  return (
<div  className={`pt-5`} >

<h2 className={`${style.title}`}> User Contact </h2>
 
<h3 className={ ` ps-5 pt-3 ${style.username}`}><span className={ ` ps-2 pt-3 ${style.username}`}>Email:-</span> {userData.email} . </h3>

<h3 className={ ` ps-5 pt-3 ${style.username}`} ><span className={ ` ps-2 pt-3 ${style.username}`} >Role:-</span> {userData.role } .</h3> 
</div>
   
  )
}

export default UserContact