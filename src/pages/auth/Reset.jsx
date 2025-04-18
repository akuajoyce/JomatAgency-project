import React from 'react';
import Navbar from '../../assets/components/Navbar';
import Footer from '../../assets/components/Footer';

const Reset = () => {
  return (
    <div className="flex flex-col  bg-[#B6CBBD]">
      <Navbar />
      
      <div className="flex-grow flex justify-center items-start py-20 px-4">
        <form className="bg-white p-8 rounded-lg w-full max-w-md shadow-md">
          <h2 className="text-xl font-bold text-[#6D2323] mb-6 text-center">Reset Password</h2>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email (e.g. mail@site.com)"
              className="w-full border border-[#6D2323] rounded-md px-4 py-2 text-[#6D2323] focus:outline-none focus:ring-2 focus:ring-[#6D2323]"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="New Password"
              className="w-full border border-[#6D2323] rounded-md px-4 py-2 text-[#6D2323] focus:outline-none focus:ring-2 focus:ring-[#6D2323]"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-[#6D2323] rounded-md px-4 py-2 text-[#6D2323] focus:outline-none focus:ring-2 focus:ring-[#6D2323]"
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
