import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Profile1 from '../../assets/images/Profile1.jpeg';
import { Link } from 'react-router';

export const Overview = () => {
  return (
    <div className="space-y-4">

      {/* Back Nav Icon */}
      <div>
        <Link to='/' className="flex items-center text-[#6D2323] hover:underline">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
      </div>

      {/* Profile Header */}
      <section className="w-full bg-white text-black rounded-sm p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h1 className="text-[24px] sm:text-[30px] font-bold">Matthew Dinko</h1>
            <p>English Teacher | Dansoman Branch</p>
          </div>

          <div className="text-[#B6CBBD] bg-[#6D2323] px-4 py-1 rounded-sm w-fit">
            <p>Active</p>
          </div>
        </div>
      </section>

      {/* Profile Info */}
      <section className="bg-[#B6CBBD] text-[13px] rounded-sm p-4 flex flex-col lg:flex-row gap-2">
        
        {/* Image */}
        <div className="flex justify-center">
          <img src={Profile1} alt="" className="w-30 h-20 sm:w-40 sm:h-30 rounded-lg" />
        </div>

        {/* Info Column 1 */}
        <div className="flex-1 space-y-2">
          <div>
            <h5 className="font-extralight">FULL NAME</h5>
            <p className="font-bold">Matthew Dinko</p>
          </div>
          <div>
            <h5 className="font-extralight">EMAIL</h5>
            <p className="font-bold">matdinko@gmail.com</p>
          </div>
          <div>
            <h5 className="font-extralight">PHONE NUMBER</h5>
            <p className="font-bold">+233548493670</p>
          </div>
        </div>

        {/* Info Column 2 */}
        <div className="flex-1 space-y-2">
          <div>
            <h5 className="font-extralight">JOINING DATE</h5>
            <p className="font-bold">March 27, 2025</p>
          </div>
          <div>
            <h5 className="font-extralight">SPECIALIZATION</h5>
            <p className="font-bold">Teacher of English Language</p>
          </div>
          <div>
            <h5 className="font-extralight">CONTRACT</h5>
            <p className="font-bold">Two Years</p>
          </div>
        </div>

        {/* Info Column 3 - Location */}
        <div className="flex-1 space-y-2">
          <div>
            <h5 className="font-extralight">LOCATION</h5>
            <p className="font-bold">Lapaz</p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-[#6D2323] rounded-sm p-4 text-white">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 border-b border-[#B6CBBD] pb-1">
          <p className="">Upcoming Lessons</p>
          <p className="bg-[#B6CBBD] text-[#6D2323] px-3 py-1 rounded-sm">Summary</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-around text-gray-700">
          <div className="bg-white px-4 py-3 rounded-lg text-[13px] w-full md:w-1/2">
            <p><span className="font-semibold">Learner:</span> Susan Okyere</p>
            <p><span className="font-semibold">Location:</span> 1st Stop</p>
            <p><span className="font-semibold">Date:</span> April 30, 2025</p>
            <p><span className="font-semibold">Time:</span> 10 AM</p>
          </div>

          <div className="bg-white px-4 py-3 rounded-lg text-[13px] w-full md:w-1/2">
            <p><span className="font-semibold">Learner:</span> James Omega</p>
            <p><span className="font-semibold">Location:</span> Lapaz</p>
            <p><span className="font-semibold">Date:</span> April 30, 2025</p>
            <p><span className="font-semibold">Time:</span> 4 PM</p>
          </div>
        </div>
      </section>

      {/* Payment Summary */}
      <section className="bg-white rounded-sm p-4 text-[#6D2323]">
        <h3 className="text-lg font-bold mb-2">Payment Summary</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="bg-[#B6CBBD] p-3 rounded-md text-white">
            <p>Total Lessons This Month</p>
            <p className="text-lg font-bold">12</p>
          </div>
          <div className="bg-[#B6CBBD] p-3 rounded-md text-white">
            <p>Total Earnings</p>
            <p className="text-lg font-bold">GHS 1,200</p>
          </div>
          <div className="bg-[#B6CBBD] p-3 rounded-md text-white">
            <p>Commission Deducted</p>
            <p className="text-lg font-bold">GHS 240</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Overview;
