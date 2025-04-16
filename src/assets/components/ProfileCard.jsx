// ProfileCard.jsx
import React from 'react';
import Profile from '../../assets/images/Profile.jpg'
import { Link } from 'react-router';


const ProfileCard = ({ name, title, location, imageUrl}) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-4xl mx-auto my-8  cursor-pointer">
      
      <div className="w-full md:w-2/3 p-6 text-center md:text-left">
        <h2 className="text-red-700 text-xl md:text-2xl font-bold uppercase mb-1">{name}</h2>
        <p className="text-gray-700 font-semibold mb-4">{title}</p>
        <p className="text-gray-600">
         {location}
        </p>

        <Link to={`/profiles/${name}`}>
          <button className="bg-[#6D2323] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer hover:scale-90 mt-1">
            View Details
          </button>
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
