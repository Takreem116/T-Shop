import React from 'react'
import Navbar from '../component/dashboard/navbar/Navbar.jsx'
import Footer from '../component/dashboard/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
function DashboardLayout() {
  return (
<>

<Navbar />

<Outlet />
<Footer />

 </>  )
}

export default DashboardLayout