import React from "react";
import { Link } from "react-router";
import Profile1 from '../../assets/images/Profile1.jpeg';
import { MapPinIcon, ArrowLeft } from "lucide-react";

const SingleProfile = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 text-gray-800 font-sans">
      <div className="mb-4">
        <Link to="/profiles" className="flex items-center text-[#6D2323] hover:underline">
          <ArrowLeft className="mr-2" /> Back
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          
          <div className="md:w-1/3 bg-[#B6CBBD] p-6 flex flex-col justify-center items-center text-center">
            <img
              src={Profile1}
              alt="Profile"
              className="w-35 h-45 rounded-sm object-cover mb-4 border-1 border-[#6D2323]"
            />
            <h1 className="text-2xl font-bold text-[#6D2323]">MATTHEW DINKO</h1>
            <p className="text-sm text-white">ENGLISH TEACHER</p>

            <div className="mt-6 text-sm space-y-2">
              <div className="flex items-center justify-center gap-2">
                <MapPinIcon className="text-[#6D2323]" />
                <span className="text-white">Lapaz, Accra</span>
              </div>
              <Link
                to="/bookForm"
                className="mt-4 inline-block bg-[#6D2323] text-white px-4 py-2 rounded-sm hover:bg-gray-800 transition-all cursor-pointer"
              >
                Book
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-2/3 p-6">
            <section className="mb-6">
              <h2 className="text-lg font-bold border-b border-gray-300 pb-1 mb-2 text-[#6D2323]">
                PROFILE
              </h2>
              <p className="text-sm leading-relaxed">
                I am a teacher of English who is very passionate about my teaching career.I hold a bachelors's degree in English-Education, and have a certification in teaching English as second language.I have five years of teaching experience.I can teach students at all educational levels.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-bold border-b border-[#B6CBBD] pb-1 mb-2 text-[#6D2323]">
                KEY SKILLS
              </h2>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Has strong command in English.</li>
                <li>Deep understanding of teaching practices.</li>
                <li>Create supportive learning environment always.</li>
                <li>Excellent inter-relational skills</li>
                <li>Mentoring</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-bold border-b border-[#B6CBBD] pb-1 mb-2 text-[#6D2323]">
                TEACHING PHILOSOPY
              </h2>
              <p className="text-sm leading-relaxed">
                I believe every student is unique and has their learning style,interest and needs.Therefore,I always ensure lessons are designed to meet learning needs.Create a learning environment where students feel safe,supported,and empowered to take risk,learn from their mistakes,and develop a love for learning.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProfile;
