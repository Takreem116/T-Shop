import React from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik'
import { loginSchema  } from '../validation/validate.js'
import { toast } from 'react-toastify';

import axios from 'axios'

function Login() {
const initialValues = {
    email:'' ,
    password:''
}



const onSubmit =async users => {

    console.log(users)

    const formData = new FormData() ;
    formData.append ("password" , users.password) ;
    formData.append ("email" , users.email) ;

    const{data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signin` , formData);
    console.log(data)
    if( data.message =='success'){
        toast.success('log in successfuly ', {
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


<div className='container justify-content-center mt-5 bg-danger-subtle
 w-50 rounded-5' >
<h2 className='ps-4 pt-5'> Log In </h2>
 <form onSubmit={formik.handleSubmit} >
    

    {renderInputs}
    <button className='my-4 ms-4 w-25 rounded-5 px-3 py-2' type='submit' disabled={!formik.isValid} > Log In </button>
     </form>

</div>


</>  )
}

export default Login