import React, { useState } from 'react';
import Navbar from '../../assets/components/Navbar';
import Footer from '../../assets/components/Footer';
import { Link, useNavigate } from 'react-router'; 
import { ArrowLeft } from 'lucide-react';
import { apiLogin } from '../../sevices/authServices'; 

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiLogin({ email, password });
      const { token, role, teacherId } = res.data;

      localStorage.setItem("accessToken", token);
      alert("Login successful!");

      if (role === 'teacher') {
        localStorage.setItem("teacherId", teacherId);
        navigate(`/teacher/${teacherId}`);
      } else if (role === 'learner') {
        navigate('/profiles');
      } else {
        navigate('/');
      }
    } catch (err) {
      alert("Login failed. Please check your credentials.");
      console.error(err);
    }
  };

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

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center text-sm sm:text-base">
              <p className="text-[#6D2323] sm:mr-2">Don't Have an Account?</p>
              <Link to="/Signup" className="text-[#6D2323] hover:underline">Sign Up</Link>
            </div>

            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Email mail@site.com"
                className="bg-[#B6CBBD] w-full px-4 py-3 rounded-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-center">
              <input
                type="password"
                placeholder="Password"
                className="bg-[#B6CBBD] w-full px-4 py-3 rounded-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
