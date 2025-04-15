import React from 'react'
import Team2 from '../../assets/images/Team2.jpg'
import Team1 from '../../assets/images/Team1.jpg'
import Profile from '../../assets/images/Profile.jpg'

export const Overview = () => {
  return (
    <div>
        
        <section className='w-full h-[20vh] bg-white text-black rounded-sm '>
         
          <div className='flex gap-x-20'>
           <div className='mt-6 ml-2'>
            <h1 className='text-[30px]'>Matthew Dinko</h1>
            <p>English Teacher | Dansoman Branch</p>
            </div>

           <div className='mt-9 text-green-400 bg-gray-100 px-2 py-1 h-10 w-15 rounded-sm'>
            <p>Active</p>
           </div>

           <div className=' ml-100 mt-6'>
            <h3 className='ml-4 text-[#6D2323] font-bold'>Full Team</h3>
            <div className='flex mt-2'>
             <img src={Team2} alt="" className='w-10 h-10 text-wrap rounded-full' />
             <img src={Team1} alt="" className='w-10 h-10 text-wrap rounded-full' />
             <img src={Profile} alt="" className='w-10 h-10 text-wrap rounded-full' />
            </div>
           </div>
          </div>
        </section>

        <section className='h-[30vh] flex flex-row justify-between bg-gray-100 text-[13px] rounded-sm'>
          <div className='p-4 '>
            <img src={Profile} alt="" className='w-40 h-40 rounded-lg' />
          </div>

         <div className='p-4'>
         <div className='mb-3'>
            <h5 className='font-extralight'>FULL NAME</h5>
            <p className='font-bold'>Matthew Dinko</p>
          </div>

          <div className='mb-3'>
            <h5 className='font-extralight'>EMAIL</h5>
            <p className='font-bold'>matdinko@gmail.com</p>
          </div>

          <div>
            <h5 className='font-extralight'>PHONE NUMBER</h5>
            <p className='font-bold'> +233548493670</p>
          </div>
        </div>

         <div className='p-4'>
         <div className='mb-3'> 
            <h5 className='font-extralight'>JOINING DATE</h5>
            <p className='font-bold'>March 27,2025</p>
          </div>

          <div className='mb-3'>
            <h5 className='font-extralight'>ROLE</h5>
            <p className='font-bold'>Teacher of Enghish Language</p>
          </div>

          <div>
            <h5 className='font-extralight'>CONTRACT</h5>
            <p className='font-bold'>Two Years</p>
          </div>
        </div>

         
        <div className='p-4'>
         <div className='mb-3'>
            <h5 className='font-extralight'>COUNTRY</h5>
            <p className='font-bold'>Ghana</p>
          </div>

          <div className=''>
            <h5 className='font-extralight'>ADDRESS</h5>
            <p className='font-bold'>Maa Kelewele Street</p>
            <p className='font-bold'>Lapaz,Accra</p>
          </div>
         </div>
        </section>

        <section className='h-[30vh] bg-[#6D2323] mt-3 rounded-sm'>
          <div className='flex justify-around items-center space-x-6 text-white bg-[#6D2323] w-100 ml-10 h-10 rounded-lg border-b'>
            <p className='mt-2'>Schedule</p>
            <p className='mt-1 bg-gray-400 px-3 py-1 rounded-sm'>Summary</p>
          </div>

          <div className='flex justify-around'>

           <div className='mt-6 bg-white px-4 py-2 text-gray-500 rounded-lg font-normal text-[13px]'>
            <p>Learner 1 : Susan Okyere</p>
            <p>Location : Ist Stop</p>
            <p>Date : April 30,2025</p>
            <p>Time : 10 AM</p>
           </div>

          <div className='mt-6 bg-white px-4 py-2  text-gray-500 rounded-lg font-normal text-[13px]'>
            <p>Learner 2 : James Omega</p>
            <p>Location : Lapaz</p>
            <p>Date : April 30,2025</p>
            <p>Time : 4 PM</p>
          </div>

           </div>

          
        </section>
    </div>
  )
}
export default Overview
