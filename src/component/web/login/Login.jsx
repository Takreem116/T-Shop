import React, { useContext } from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik'
import { loginSchema  } from '../validation/validate.js'
import { toast } from 'react-toastify';

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/User.jsx';
import style from './login.module.css'
function Login() {



    let {setUserToken} = useContext(UserContext)
const initialValues = {
    email:'' ,
    password:''
}

const navigate = useNavigate();


const onSubmit =async users => {

    // console.log(users)



    const{data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signin` , users);
    // console.log(data)
    if( data.message =='success'){
    localStorage.setItem("userToken" , data.token) ;
    setUserToken(data.token)

    toast.success(' Log in Successfuly', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
    navigate('/')



} }




    const formik = useFormik( {
        initialValues ,
         onSubmit ,
          validationSchema :loginSchema , 
    }) ;


    // console.log(formik.values)


const inputs = [
{
    type:'email',
    title:'Email' ,
    id :'email',
    name:'email' ,
    value:formik.values.email ,




},{

    type:'password' ,
    title:'Password' ,
    id :'password',
    name:'password' ,
    value:formik.values.password ,





}
]




const renderInputs = inputs.map ( (input , index) =>

<Input type={input.type}
 title={input.title} 
 name={input.name}
  id={input.id}
   key={index} 
   value={input.value}
   onChange={  formik.handleChange}
    errors={formik.errors}
    touched={formik.touched}
    onBlur = {formik.onBlur}
    
    
    />
)

  return (
<> 


<div  className=' container justify-content-center my-5 pt-5
 w-50 ' >

    <div  className={`${style.login}`}>
    <h2 className='login-text ps-4 pt-5 text-center'> Log in to your account
  </h2>
 <form  onSubmit={formik.handleSubmit}  >
    

    {renderInputs}
    <div className= {`${style.btn}`}>
    <button className={`${style.login_btn}`} type='submit' disabled={!formik.isValid} > Login </button>

    </div>
     </form>


     <Link className={`${style.forgot}`} to="/sendcode"> Forgot Password .. ?</Link>

    </div>

</div>


</>  )
}

export default Login