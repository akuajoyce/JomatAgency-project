import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from 'lucide-react';
import newLogo from '../images/newLogo.png';

const Footer = () => {
  return (
    <footer className="bg-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
        
        
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img src={newLogo} alt="Logo" className="h-20 w-auto" />
          <div className="flex text-[rgb(109,35,35)] space-x-4 text-2xl cursor-pointer">
            <FacebookIcon />
            <XIcon />
            <InstagramIcon />
            <LinkedinIcon />
          </div>
        </div>

       
        <div className="space-y-2">
          <h1 className="text-2xl text-[#B6CBBD] font-mono">Our Services</h1>
          <p className="font-mono">Recruiting</p>
          <p className="font-mono">Coaching</p>
          <p className="font-mono">Training</p>
          <p className="font-mono">Pairing</p>
        </div>

        
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h1 className="text-2xl font-mono">Newsletter</h1>
          <input
            type="email"
            placeholder="Enter a valid email"
            className="bg-[#6D2323] text-white p-2 rounded-md font-mono w-full sm:w-2/3 md:w-full"
          />
          <button className="bg-blue-900 text-white py-3 px-6 rounded-md cursor-pointer font-mono w-full sm:w-2/3 md:w-auto">
            Submit
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
