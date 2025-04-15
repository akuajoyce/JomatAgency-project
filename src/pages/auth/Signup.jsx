import React from 'react'
import Navbar from '../../assets/components/Navbar'
import Footer from '../../assets/components/Footer'
import { Link } from 'react-router'

const Signup = () => {
  return (
    <div className='bg-[#B6CBBD] h-[100vh]'>
      <Navbar />
     <div className='bg-white h-[85vh] w-[60%] ml-70 mt-2 rounded-md'>

     <div className='p-5'>
      <h1 className='text-4xl font-bold'>Create An Account</h1>
      <p className='font-light'>Enter Your Details Below</p>
     </div>

     <form className=''>

      <div className='flex flex-row justify-end mb-1 mr-40'>
        <h3 className='text-blue-700 gap-2'>Already Have Account?</h3>
        <Link to='/Login' className='cursor-pointer'>
          Login
        </Link>
      </div>

     <div className='flex flex-row justify-center'>
       <div className=''>
        <input type='text' 
          placeholder='First Name'
          className='bg-[#B6CBBD] px-10 py-4 mr-2 rounded-sm' />
       </div>

        <div className=''>
        <input type='text' 
          placeholder='Last Name'
          className='bg-[#B6CBBD] px-10 py-4 rounded-sm' />
        </div>
      </div>
      
       <div className='flex justify-center'>
       <input type='password' 
         placeholder='Password'
         className='bg-[#B6CBBD] px-10 py-4 rounded-sm mr-2 mt-3' />

       <input type='password' 
         placeholder='Confirm Password' 
         className='bg-[#B6CBBD] px-10 py-4 rounded-sm mt-3' />
       </div>

        <div className='flex justify-center'>
          <input type='email' placeholder='Email mail@site.com' 
           className='bg-[#B6CBBD] px-43.5 py-4 rounded-sm mt-3'  />
        </div>

         <div className='flex justify-center bg-[#B6CBBD] px-10 py-4 rounded-sm mt-3 w-[65%] ml-35'>
         <select name="role">
          <option value="">Select Option</option>
          <option value="teacher">Teacher</option>
          <option value="parent/learner">Parent/Learner</option>
         </select>
         </div>


         <div className='flex justify-center bg-blue-900 px-10 py-4 rounded-sm mt-3 w-[65%] ml-35'>
         <button type='submit ' className='cursor-pointer text-white'>
           Sign Up
          </button>
         </div>
       
         
      </form>
    </div>
     <Footer />
    </div>
  )
}

export default Signup