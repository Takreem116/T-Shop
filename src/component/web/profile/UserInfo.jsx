import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx'





function UserInfo() {
    const{userData  , loading}=useContext(UserContext)


    if (loading){

        return <p> loading .... </p>
    }
  return (
    <div>

        <h2> User Information </h2>

        <h3>{userData.userName} </h3>
        <img  src={userData.image.secure_url} alt='user-image'/>
    </div>
  )
}

export default UserInfo