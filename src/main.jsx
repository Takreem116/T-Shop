import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { QueryClient ,QueryClientProvider } from 'react-query'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './index.css'
import UserContextProvider from './component/web/context/User.jsx'


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
            <ToastContainer />
<UserContextProvider >
<QueryClientProvider client={queryClient} >
<App />






</QueryClientProvider>

</UserContextProvider>


 
  </React.StrictMode>,
)
