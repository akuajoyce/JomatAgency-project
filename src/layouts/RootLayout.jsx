import React from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Navbar'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <Footer />
        <main>
         <Outlet />
        </main>
    </div>
  )
}

export default RootLayout