import React from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';


const ProfileCard = ({ id, name, title, location, imageUrl }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-4xl mx-auto my-8 cursor-pointer">

      <div className="w-full md:w-2/3 p-6 text-center md:text-left mt-4 md:mt-0">
        
        {/* 🔙 Back Nav Icon before the name */}
        <div className="mb-2">
          <Link to="/" className="flex items-center text-[#6D2323] hover:underline w-fit">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Link>
        </div>

        <h2 className="text-red-700 text-xl md:text-2xl font-bold uppercase mb-1">{name}</h2>
        <p className="text-gray-700 font-semibold mb-4">{title}</p>
        <p className="text-gray-600 mb-2">{location}</p>

        <Link
          to={`/profile/${id}`}
          className="bg-[#6D2323] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer hover:scale-90 mt-1 inline-block"
        >
          View Details
        </Link>
      </div>

      <div className="w-full md:w-1/3 bg-[#6D2323] flex items-center justify-center p-6">
        <div className="rounded-full border-4 border-white overflow-hidden w-32 h-32 md:w-40 md:h-40 hover:scale-95 transition">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
