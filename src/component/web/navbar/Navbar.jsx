import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/cart.jsx'
import { useQuery } from 'react-query'
import { UserContext } from '../context/User.jsx'

function Navbar() {

// console.log(user)

const {GetCartContext}=useContext(CartContext)


const {userToken , setUserToken} = useContext(UserContext)
const getcount = async()=>{
  const res = await GetCartContext()
  return res
}
const {data , isLoading } = useQuery('get_cart' , getcount)
console.log(data)

const navigate = useNavigate()

const logOut =()=>{
localStorage.removeItem("userToken");
setUserToken(null)
navigate('/home')


}

if (isLoading){

  return <p> loading ........</p>
}

  return (

<>


<nav className="navbar navbar-expand-lg bg-danger-subtle">
      <div className="container">
      <a className="navbar-brand" href="#">T-shop</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
         
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>


          <li className="nav-item">
            <Link className="nav-link" to="/categories">Categories</Link>
          </li>


          <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>


        {userToken ?
        (

<li className="nav-item">
         <Link className="nav-link"  to ="/cart">Cart <span className='bg-danger'> {data.count ? data.count : 0}</span> </Link>
       </li>
        )
           : null
        }
   


       
     
       
       
       
        </ul>
        <ul className="navbar-nav">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Action
        </a>


       
      
      {userToken == null ?
          
  <>
  <ul className="dropdown-menu ">
     <li><Link className="dropdown-item" to="register">register</Link></li>
     <li><hr className="dropdown-divider" /></li>
     <li><Link className="dropdown-item" to="login">login</Link></li>
     
   </ul>
   </> 
 : (
     <>
     <ul className="dropdown-menu ">
             <li><Link className="dropdown-item" to="profile">Profile</Link></li>
             <li><hr className="dropdown-divider" /></li>
             <li><Link className="dropdown-item" onClick={logOut}>Log Out</Link></li>
           </ul> 
     </>
  

   )
      }



  

 
      


      

      
      

       


      </li>
        </ul>
     
      </div>
    </div>
  </nav>

</>
    )
}

export default Navbar