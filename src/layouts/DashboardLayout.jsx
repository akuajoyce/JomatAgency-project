import React from 'react'
import Sidebar from '../assets/components/Sidebar'
import { Outlet } from 'react-router'
import DashNavbar from '../assets/components/DashNavbar'

const DashboardLayout = () => {
  return (
       <div className='flex'>
        
            <Sidebar />
           <div className='flex-1'>
           <DashNavbar />
            <main className='p-4'>
            <Outlet />
            </main>
           </div>
        </div>
  )
}

export default DashboardLayout