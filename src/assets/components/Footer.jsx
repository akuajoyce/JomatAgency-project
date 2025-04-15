import React from 'react'
import { FacebookIcon, InstagramIcon, LinkedinIcon} from 'lucide-react'
import { XIcon } from 'lucide-react'
import newLogo from '../images/newLogo.png'

const Footer = () => {
  return (
    <div>
         <section className=' px-6 py-12 bg-white'>
          <div className='max-w-7xl mx-auto grid grid-cols-3 gap-10 text-center md:text-left'>
          <div className=' flex flex-col items-center md:items-start space-y-4'>
            <img src={newLogo} alt="" className='h-20 w-30' />
            <div className='flex text-[rgb(109,35,35)] space-x-4 text-2xl cursor-pointer'>
            <div><FacebookIcon /></div>
            <div><XIcon /></div>
            <div><InstagramIcon /></div>
            <div><LinkedinIcon /></div>
            </div>
          </div>
          <div className='space-y-2'>
            <h1 className=' text-2xl text-[#B6CBBD] font-mono'>Our Services</h1>
            <p className=' font-mono '>Recruiting</p>
            <p className=' font-mono'>Coaching</p>
            <p className=' font-mono'>Training</p>
            <p className=' font-mono'>Pairing</p>
          </div>
          <div className='flex flex-col items-center md:items-start space-y-4'>
            <h1 className='text-2xl font-mono'>Newsletter</h1>
            <input type="text" placeholder='Enter a valid email' 
            className='bg-[#6D2323] text-white p-2 rounded-md font-mono w-full md:auto' />

            <div className='bg-blue-900 text-center text-white py-3 px-6 rounded-md     cursor-pointer font-mono'>
                <button>Submit</button>
            </div>
          </div>
          </div>
        </section> 
    </div>
  )
}

export default Footer