import React from 'react'
import { useFormik } from 'formik'
import Input from '../../pages/Input.jsx';
import { resetSchema  } from '../validation/validate.js'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function ResetPass() {


const navigate = useNavigate()

    const initialValues = {
        email:'' ,
        password:'',
        code:''
    }
    


    const onSubmit = async ({email , password,code}) =>{
const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/auth/forgotPassword` , {email, password,  code})
navigate('/login')
console.log(data)
    }

    const formik = useFormik( {
        initialValues ,
        onSubmit,
        validationSchema :resetSchema , 

        
    }) ;

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
        ,{
        
            type:'text' ,
            title:'Code' ,
            id :'code',
            name:'code' ,
            value:formik.values.code ,
        
        
        
        
        
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
<h2 className='ps-4 pt-5'> Reset Password </h2>
 <form onSubmit={formik.handleSubmit}  >
    

    {renderInputs}
    <button className='my-4 ms-4 w-25 rounded-5 px-3 py-2' type='submit' disabled={!formik.isValid} > Reset </button>
     </form>



</div>


</>  )
}

export default ResetPass