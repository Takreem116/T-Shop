import React from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik'
import { registerSchema  } from '../validation/validate.js'
import { toast } from 'react-toastify';
import style from '../login/login.module.css'
import axios from 'axios'

function Register() {
const initialValues = {
    userName:'' ,
    email:'' ,
    password:''
    , image:''
}

const handelFieldChange = (event)=>{


    formik.setFieldValue('image' , event.target.files[0]);
}


const onSubmit =async users => {

    // console.log(users)

    const formData = new FormData() ;
    formData.append ("userName" , users.userName) ;
    formData.append ("password" , users.password) ;
    formData.append ("email" , users.email) ;
    formData.append ("image" , users.image) ;

    const{data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signup` , formData);
    // console.log(data)
    if( data.message =='success'){
        toast.success('account created successfuly , plz verify your email to log in', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }



} 




    const formik = useFormik( {
        initialValues ,
         onSubmit ,
          validationSchema :registerSchema , 
    }) ;


    // console.log(formik.values)


const inputs = [{
    type :'text' ,
    title:'User Name' ,
    id :'username',
    name:'userName' ,
    value:formik.values.userName ,
} ,
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

, {
    type:'file' ,
    title:' User Image' ,
    id :'image',
    name:'image' ,
    onChange:handelFieldChange,



}]




const renderInputs = inputs.map ( (input , index) =>

<Input type={input.type}
 title={input.title} 
 name={input.name}
  id={input.id}
   key={index} 
   value={input.value}
   onChange={ input.onChange || formik.handleChange}
    errors={formik.errors}
    touched={formik.touched}
    onBlur = {formik.onBlur}
    
    
    />
)

  return (
<> 


<div className='container justify-content-center my-5 pt-5
 w-50 ' >


    <div className={`${style.login}`}>
    <h2 className='login-text ps-4 pt-5 text-center'> Create Account </h2>
 <form onSubmit={formik.handleSubmit}  encType='multipart/form-data'>
    

    {renderInputs}
    <div className={`${style.btn}`}> 
    <button className={`${style.login_btn}`}  type='submit' disabled={!formik.isValid} > Register </button>
</div>
     </form>

    </div>


</div>


</>  )
}

export default Register