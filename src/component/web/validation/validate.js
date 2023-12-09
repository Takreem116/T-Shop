 import * as yup from 'yup'
 
 export const registerSchema = yup.object ({


    userName: yup.string().required("userNmae is Required").min(3 ,"must at least 3 char").max(30 , " max is 30 char"),
    email: yup.string().required("email  is Required").email() ,
    password :yup.string().required("Password is Required").min(3 ,"must at least 3 char").max(30 , " max is 30 char"),
 })


 export const loginSchema = yup.object ({


   email: yup.string().required("email  is Required").email() ,
   password :yup.string().required("Password is Required").min(3 ,"must at least 3 char").max(30 , " max is 30 char"),
})



export const resetSchema = yup.object ({


   email: yup.string().required("email  is Required").email() ,
   password :yup.string().required("Password is Required").min(3 ,"must at least 3 char").max(30 , " max is 30 char"),
   code:yup.string().required("code is required").length(4 , "must be 4 char"),
})


