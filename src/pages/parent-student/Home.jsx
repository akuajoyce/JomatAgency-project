import React from 'react'
import Hero from '../../assets/images/Hero.jpg'
import Navbar from '../../assets/components/Navbar'
import Footer from '../../assets/components/Footer'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
              <Navbar />
        <section className='h-screen flex flex-row justify-evenly items-start bg-[#B6CBBD]'>
            <div className=' h-[60vh] overflow-hidden mt-25'>
              <img src={Hero} alt="" className='w-full h-full rounded-lg cursor-pointer hover:scale-125' />
            </div>
            {/* second div to contain the text about what the agency do */}
            <div className='mt-20'>
             <div className='bg-white mt-6 text-black px-6 py-4 rounded-sm font-mono'>
             <p className='text-2xl text-amber-800'>Jomat Private Tutor Recruitment Agency</p>
              <Link to='/Signup' className='text-6xl leading-tight'>Start</Link>
              <p className='text-amber-800 leading-normal'>Your Private Tutor Search Or Teaching Career Here</p>
             </div>
            <div className='bg-[#6D2323] mt-8 text-white px-6 py-4 rounded-sm font-mono'>
            <p className='leading-relaxed'><br/>Bridging the gap between unemployed teachers <br/> and students with low academic performance.</p>
            <p>A platform for graduate teachers to practice their<br/> hard-earn skills by offering  quality one-on-one <br/>lessons to you or your child at an affordable rate. </p>
            </div>
            </div>
           
        </section>

        <Footer />  
    </div>
  )
}

export default Home