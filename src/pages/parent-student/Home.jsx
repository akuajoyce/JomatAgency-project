import React from 'react';
import Hero from '../../assets/images/Hero.jpg';
import Navbar from '../../assets/components/Navbar';
import Footer from '../../assets/components/Footer';
import { Link } from 'react-router'; 

const Home = () => {
  return (
    <div>
      
      <Navbar />

      <section className="min-h-screen px-4 py-12 bg-[#B6CBBD] flex flex-col lg:flex-row justify-center items-center gap-10">
        
        
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[60vh] overflow-hidden">
          <img
            src={Hero}
            alt="Hero"
            className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-95 transition duration-300"
          />
        </div>

        
        <div className="w-full lg:w-1/2 space-y-6">
          
          <div className="bg-white text-black px-6 py-4 rounded-sm font-mono text-center lg:text-left">
            <p className="text-xl md:text-2xl text-amber-800">Jomat Private Tutor Recruitment Agency</p>
            <Link to="/Signup" className="block text-4xl md:text-5xl font-bold leading-tight my-2">
              Start
            </Link>
            <p className="text-amber-800 text-base md:text-lg">Your Private Tutor Search Or Teaching Career Here</p>
          </div>

          
          <div className="bg-[#6D2323] text-white px-6 py-4 rounded-sm font-mono text-center lg:text-left">
            <p className="leading-relaxed mb-2">
              Bridging the gap between unemployed teachers and students with low academic performance.
            </p>
            <p>
              A platform for graduate teachers to practice their hard-earned skills by offering quality
              one-on-one lessons to you or your child at an affordable rate.
            </p>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default Home;
