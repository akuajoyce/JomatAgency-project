import React, { useState } from 'react';
import Navbar from '../../assets/components/Navbar';
import Footer from '../../assets/components/Footer';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { apiResetPassword } from '../../sevices/authServices'; 

const Reset = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await apiResetPassword({ email, password, confirmPassword }); 
      alert("Password reset successful!");
    } catch (error) {
      console.error("Password reset failed:", error);
      alert("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="flex flex-col bg-[#B6CBBD]">
      <Navbar />

      <div className="flex-grow flex justify-center items-start py-20 px-4">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg w-full max-w-md shadow-md">
          <div className='mb-4'>
            <Link to='/login' className='flex items-center text-[#6D2323] hover:underline w-fit'>
              <ArrowLeft className='mr-2' /> Back
            </Link>
          </div>

          <h2 className="text-xl font-bold text-[#6D2323] mb-6 text-center">Reset Password</h2>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email (e.g. mail@site.com)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#6D2323] rounded-md px-4 py-2 text-[#6D2323] focus:outline-none focus:ring-2 focus:ring-[#6D2323]"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-[#6D2323] rounded-md px-4 py-2 text-[#6D2323] focus:outline-none focus:ring-2 focus:ring-[#6D2323]"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-[#6D2323] rounded-md px-4 py-2 text-[#6D2323] focus:outline-none focus:ring-2 focus:ring-[#6D2323]"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#6D2323] hover:bg-red-800 text-white px-6 py-2 rounded-md transition duration-300"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Reset;
