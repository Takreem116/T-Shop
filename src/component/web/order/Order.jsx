import React, { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'
import { useQuery } from 'react-query'
import { useFormik } from 'formik'
import Input from '../../pages/Input.jsx'
import { UserContext } from '../context/User.jsx'
import { toast } from 'react-toastify'
import { ordertSchema } from '../validation/validate.js'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import style from './order.module.css'

function Order() {



    const initialValues = {
        couponName :"",
        address:"" ,


        phone:"",
    }

const navigate = useNavigate()

    const onSubmit =async (values) => {
        const token = localStorage.getItem("userToken")
        
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/order` , values,
         {headers : {Authorization :`Tariq__${token}` }})
        console .log ( data  )

        if (data.message== 'success'){
            toast.success(' order  Successfuly', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                })
        }
        navigate('/home')

        return data

    
    
    }
    const formik = useFormik( {
        initialValues ,
         onSubmit ,
         validationSchema :ordertSchema 
    }) ;
    

    let {setUserToken} = useContext(UserContext)

    const {GetCartContext}=useContext(CartContext)
    
    const getCart = async()=>{


        const res = await GetCartContext()
    
        // console.log (res)
        return res
    }

    const {data , isLoading } = useQuery('get_cart' , getCart)
// console.log(data)
if (isLoading){

    return <p> loading ........</p>
}
    







  



const inputs = [


    {

        type:'text' ,
        title:'Coupon Name' ,
        id :'couponName',
        name:'couponName' ,
        value:formik.values.couponName ,
    
    
    
    
    
    } ,
    {

        type:'text' ,
        title:'Address' ,
        id :'address',
        name:'address' ,
        value:formik.values.address ,
    
    
    
    
    
    } ,
{
    type:'text',
    title:'Phone' ,
    id :'phone',
    name:'phone' ,
    value:formik.values.phone ,




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
    <div className="cart">
    <div className="container">
        <h2 className={`pt-5 ${style.title}`}> Confirm Your Order</h2>
      <div className="row">
        <div className="cart-items">
          <div className="products" id="products">
            <div className={`item ${style.item_list}`}>
              <div className="product-info">
                <h2>Product</h2>
              </div>
              <div className="quantity">
                <h2>Quantity</h2>
              </div>
              <div className="price">
                <h2>Price</h2>
              </div>
              <div className="subtotal">
                <h2>Subtotal</h2>
              </div>
            </div>

{data.count?data.products.map((product)=>
    <div className="item" key={product.productId}>
              <div className="product-info">
                <img src={product.details.mainImage.secure_url} />
                <div className="product-details">
                  <h2 className={`${style.order_name}`}>{product.details.name}</h2>
                 
                </div>
              </div>
              <div className="quantity" >
             
                <span>{product.quantity}</span>
               
              </div>
              <div className="price">${product.details.price}</div>
              <div className="subtotal">${ (product.quantity) * (product.details.price)}</div>
            </div>
): (<h2> No Item Availiable Now </h2>)}
            

            
          </div>
          
        </div>

        <div className='customer-information'>
        <form onSubmit={formik.handleSubmit}  >
    

    {renderInputs}
    <button className={`my-4 ms-4 w-25 rounded-5 px-3 py-2 ${style.order_btn}`} type='submit' disabled={!formik.isValid} > Order Now ! </button>
     </form>
        </div>
       
      </div>
    </div>
  </div>  )
}

export default Order