import React from 'react';
import Navbar from '../../assets/components/Navbar';
import Footer from '../../assets/components/Footer';
import { Link, useNavigate, useSubmit } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';



const Login = () => {
  // const navigate = useNavigate();
  // const [role , setRole] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (role === 'teacher') {
  //     navigate('/teacher');
  //   }  else if (role === 'parent-student') {
  //     navigate('/profiles')
  //   }
  // };
  return (
    <div className="bg-[#B6CBBD] min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex justify-center items-center flex-grow px-4 mt-4">
        <div className="bg-white w-full max-w-xl rounded-md p-6 shadow-md">
          
         
          <div className='mb-4'>
            <Link to='/' className='flex items-center text-[#6D2323] hover:underline'>
              <ArrowLeft className='mr-2' /> Back
            </Link>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#6D2323]">Login</h1>
            <p className="font-light">Welcome</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center text-sm sm:text-base">
              <p className="text-[#6D2323] sm:mr-2">Don't Have an Account?</p>
              <Link to="/Signup" className="text-[#6D2323] hover:underline">Sign Up</Link>
            </div>

            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Email mail@site.com"
                className="bg-[#B6CBBD] w-full px-4 py-3 rounded-sm"
              />
            </div>

            <div className="flex justify-center">
              <input
                type="password"
                placeholder="Password"
                className="bg-[#B6CBBD] w-full px-4 py-3 rounded-sm"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#6D2323] text-white w-full py-3 rounded-sm hover:bg-[#6D2323] transition"
              >
                Login
              </button>
            </div>
          </form>

          <Link to='/reset' className="text-right mt-4 text-sm text-[#6D2323] hover:underline cursor-pointer">
            Forgot Password?
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
