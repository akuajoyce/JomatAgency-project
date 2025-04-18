import React from 'react';
import Navbar from '../../assets/components/Navbar';
import Footer from '../../assets/components/Footer';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

const Signup = () => {
  return (
    <div className='bg-[#B6CBBD] flex flex-col'>
      <Navbar />
      <div className='bg-white w-full max-w-4xl mx-auto mt-4 p-6 rounded-md shadow-md flex-1'>

        {/* Back Navigation */}
        <div className='mb-4'>
          <Link to='/' className='flex items-center text-[#6D2323] hover:underline'>
            <ArrowLeft className='mr-2' /> Back
          </Link>
        </div>

        <div className='text-center mb-6'>
          <h1 className='text-3xl sm:text-4xl font-bold text-[#6D2323]'>Create An Account</h1>
          <p className='font-light'>Enter Your Details Below</p>
        </div>

        <form className='space-y-4'>

          <div className='flex justify-end text-sm sm:text-base gap-2 pr-6'>
            <span className='text-[#6D2323]'>Already Have Account?</span>
            <Link to='/Login' className='text-[#6D2323] underline cursor-pointer'>
              Login
            </Link>
          </div>

          <div className='flex flex-col sm:flex-row justify-center gap-4 px-4'>
            <input
              type='text'
              placeholder='First Name'
              className='bg-[#B6CBBD] px-6 py-3 rounded-sm w-full sm:w-1/2'
            />
            <input
              type='text'
              placeholder='Last Name'
              className='bg-[#B6CBBD] px-6 py-3 rounded-sm w-full sm:w-1/2'
            />
          </div>

          <div className='flex flex-col sm:flex-row justify-center gap-4 px-4'>
            <input
              type='password'
              placeholder='Password'
              className='bg-[#B6CBBD] px-6 py-3 rounded-sm w-full sm:w-1/2'
            />
            <input
              type='password'
              placeholder='Confirm Password'
              className='bg-[#B6CBBD] px-6 py-3 rounded-sm w-full sm:w-1/2'
            />
          </div>

          <div className='flex justify-center px-4'>
            <input
              type='email'
              placeholder='Email mail@site.com'
              className='bg-[#B6CBBD] px-6 py-3 rounded-sm w-full sm:w-2/3'
            />
          </div>

          <div className='flex justify-center px-4'>
            <select
              name='role'
              className='bg-[#B6CBBD] px-6 py-3 rounded-sm w-full sm:w-2/3 mt-2'
            >
              <option value=''>Select Option</option>
              <option value='teacher'>Teacher</option>
              <option value='parent/learner'>Parent/Learner</option>
            </select>
          </div>

          <div className='flex justify-center px-4'>
            <button
              type='submit'
              className='bg-[#6D2323] text-white px-6 py-3 rounded-sm w-full sm:w-2/3 mt-4'
            >
              Sign Up
            </button>
          </div>

        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
