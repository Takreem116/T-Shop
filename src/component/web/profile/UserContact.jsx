import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx'

function UserContact() {




    const{userData  , loading}=useContext(UserContext)


    // console.log(userData)

    if (loading){

        return <p> loading .... </p>
    }
  return (
<div >

<h2> User Contact </h2>
 
<p>{userData.email} </p>

<p> {userData.role}</p> 
</div>
   
  )
}

export default UserContact