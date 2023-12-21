import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx'
import style from './profile.module.css'





function UserInfo() {
    const{userData  , loading}=useContext(UserContext)


    if (loading){

        return <p> loading .... </p>
    }
  return (
    <div className={`pt-5`}>

        <h2 className={`${style.title}`}> User Information </h2>

        <div className='d-flex pt-4 '>

        <img className={`${style.img}`} src={userData.image.secure_url} alt='user-image'/>
        <h3 className={ ` ps-5 pt-3 ${style.username}`}><span className={ ` pe-2 py-3 ${style.username}`}> UserName:-</span> {userData.userName} .</h3>


        </div>
    </div>
  )
}

export default UserInfo