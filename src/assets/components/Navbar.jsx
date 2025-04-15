import React from 'react'
import {SearchIcon } from 'lucide-react'
import newLogo from '../images/newLogo.png'
import { Link } from 'react-router'




const Navbar = () => {
  return (
    <div>
            <nav className='flex flex-wrap justify-around items-center bg-white font-sans h-20 border-b border-gray-200'>
            <div>
              <img src={newLogo} alt="" className='h-18 w-24' />
            </div>
            <div className='hidden md:flex flex-row rounded-full px-6  bg-[#B6CBBD] hover:bg-[#C9B194] py-2'>
                <input type="text" placeholder='Search' className=' px-4 py-2 w-48 md:w-64 lg:w-80 focus:outline-none' />
                <SearchIcon className='text-10 mt-2 text-white text-2xl rounded-full'/>
            </div>
            <div className='space-x-4 mt-4 md:mt-0'>
                <Link to='/Signup' className='bg-[#C9B194] rounded-lg px-6 py-4 text-white font-mono'>Sign Up</Link>
                <Link to='/Login' className='font-mono'>Sign In</Link>

            </div>
        </nav> 
    </div>
  )
}

export default Navbar