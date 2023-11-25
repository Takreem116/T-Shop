
import './App.css'

import {
  RouterProvider,
} from "react-router-dom";

import {router} from './layouts/Routes.jsx'



function App() {

  return (
    <>
    <RouterProvider router={router} />

    </>
  )
}

export default App
