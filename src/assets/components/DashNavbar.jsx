import { BellIcon, SearchIcon} from "lucide-react";
import React from "react";
import Profile from "../../assets/images/Profile.jpg";

const DashNavbar = () => {
  return (
    <div className="w-full">
      
      <nav className=' w-full flex items-center justify-between border-b border-gray-300 h-20 '>

      <div className=' flex items-center space-x-4 bg-[#B6CBBD] ml-10 px-6 rounded-full'>
        <input type=''
        placeholder='Search for what you need ...' className='px-25 py-4 text-white' />
        <SearchIcon className='text-[#6D2323]'/>
      </div>

      <div className=' flex items-center mr-10 gap-4'>
        <BellIcon className='text-[#6D2323] border-2 border-gray-300 rounded-full' />
       <div className='flex items-center border-1 border-gray-500 rounded-full px-10 py-1 space-x-1 bg-gray-400'>
       <img src={Profile} alt="" className='w-10 h-10 rounded-full border-2 border-[#6D2323] text-wrap' />
       <p className='font-light text-white'>Matt Dink</p>
       </div>
      </div>
      </nav>
    </div>
  );
};

export default DashNavbar;
