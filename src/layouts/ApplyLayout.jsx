import React from 'react'
import { Outlet } from 'react-router'

const ApplyLayout = () => {
  return (
    <div className='p-6'>
        <Outlet />
    </div>
  )
}

export default ApplyLayout