import React from 'react'
import Navbar from '../../assets/components/Navbar'
import Footer from '../../assets/components/Footer'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className='bg-[#B6CBBD] h-[100vh]'>
       <Navbar />
       <div className='bg-white h-[85vh] w-[60%] ml-70 mt-2 rounded-md'>
        <div className='p-5'>
         <h1 className='text-2xl font-bold'>Login</h1>
         <p className='font-light'>Welcome</p>
        </div>
       <form className='mt-10'>
         <div className='flex flex-row justify-end mb-1 mr-40'>
          <h3 className='gap-2 text-blue-800'>Don't Have an Account?</h3>
          <Link to='/Signup' type='submit'>
           Sign Up
          </Link>
         </div>

         <div className='flex justify-center'>
          <input type="email"
           placeholder='Email mail@site.com'
           className='bg-[#B6CBBD] px-10 py-4 rounded-sm mr-2 mt-3 w-[65%]'/>
         </div>

         <div className='flex justify-center'>
          <input type="password" 
          placeholder='Password'
          className='bg-[#B6CBBD] px-10 py-4 rounded-sm mr-2 mt-3 w-[65%]' />
         </div>

         <div className='flex justify-center  bg-blue-900 px-10 py-4 rounded-sm mt-3 w-[65%] ml-35 '>
         <button type='submit' className='text-white' >
          Login
         </button>
         </div>
        </form>

        <p className='flex justify-end mr-40'>Forgot Password?</p>

       </div>

       <Footer />
    </div>
  )
}

export default Login