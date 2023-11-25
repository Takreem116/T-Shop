 import * as yup from 'yup'
 
 export const registerSchema = yup.object ({


    userName: yup.string().required("userNmae is Required").min(3 ,"must at least 3 char").max(30 , " max is 30 char"),
    email: yup.string().required("email  is Required").email() ,
    password :yup.string().required("Password is Required").min(3 ,"must at least 3 char").max(30 , " max is 30 char"),
 })