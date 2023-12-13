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
        <h2 className='pt-5'> Confirm Your Order</h2>
      <div className="row">
        <div className="cart-items">
          <div className="products" id="products">
            <div className="item">
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
                  <h2>{product.details.name}</h2>
                  <span>Color:black</span>
                  <a href="#" onClick={()=>removeItem(product.productId)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={25}
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 5.79289C5.68342 5.40237 6.31658 5.40237 6.70711 5.79289L12 11.0858L17.2929 5.79289C17.6834 5.40237 18.3166 5.40237 18.7071 5.79289C19.0976 6.18342 19.0976 6.81658 18.7071 7.20711L13.4142 12.5L18.7071 17.7929C19.0976 18.1834 19.0976 18.8166 18.7071 19.2071C18.3166 19.5976 17.6834 19.5976 17.2929 19.2071L12 13.9142L6.70711 19.2071C6.31658 19.5976 5.68342 19.5976 5.29289 19.2071C4.90237 18.8166 4.90237 18.1834 5.29289 17.7929L10.5858 12.5L5.29289 7.20711C4.90237 6.81658 4.90237 6.18342 5.29289 5.79289Z"
                        fill="#6C7275"
                      />
                    </svg>
                    remove
                  </a>
                </div>
              </div>
              <div className="quantity" >
                <button className='dec'  onClick={()=>decreaseQun(product.productId)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={17}
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M3.22852 8.5H12.5618"
                      stroke="#121212"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <span>{product.quantity}</span>
                <button className='inc' onClick={()=>increaseQun(product.productId)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={17}
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.37565 3.83333C8.37565 3.62622 8.20776 3.45833 8.00065 3.45833C7.79354 3.45833 7.62565 3.62622 7.62565 3.83333V8.125H3.33398C3.12688 8.125 2.95898 8.29289 2.95898 8.5C2.95898 8.7071 3.12688 8.875 3.33398 8.875H7.62565V13.1667C7.62565 13.3738 7.79354 13.5417 8.00065 13.5417C8.20776 13.5417 8.37565 13.3738 8.37565 13.1667V8.875H12.6673C12.8744 8.875 13.0423 8.7071 13.0423 8.5C13.0423 8.29289 12.8744 8.125 12.6673 8.125H8.37565V3.83333Z"
                      fill="#121212"
                    />
                  </svg>
                </button>
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
    <button className='my-4 ms-4 w-25 rounded-5 px-3 py-2' type='submit' disabled={!formik.isValid} > Order Now ! </button>
     </form>
        </div>
       
      </div>
    </div>
  </div>  )
}

export default Order