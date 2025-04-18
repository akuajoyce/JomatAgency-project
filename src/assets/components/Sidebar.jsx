import React from 'react'
import { Link } from 'react-router'
import { BookIcon, CalendarDaysIcon, FolderIcon, HomeIcon, LockIcon, MessageCircleHeartIcon, UserIcon } from 'lucide-react'
import { GraduationCapIcon } from 'lucide-react'
import newLogo from '../images/newLogo.png'

const Sidebar = () => {
  return (
    <div>
     <aside className='w-64 bg-[#B6CBBD] text-white h-screen p-6 space-y-8 '>
        <img src={newLogo} alt="" className='h-30 w-30 ml-6 rounded-sm hover:scale-105 cursor-pointer'/>
        <h2 className='ml-6 text-[#6D2323] font-bold'>Teacher Panel</h2>
        <nav>
            <Link to='/' className='flex mb-4 gap-5 ml-6 text-[#6D2323]'>
             <HomeIcon className='text-[#6D2323]' />
             <p>Dashboard</p>
            </Link>

            <Link to='/my students' className='flex mb-4 gap-5 ml-6 text-[#6D2323]'>
             <GraduationCapIcon className='text-[#6D2323]' />
             <p>My Students</p>
            </Link>

            <Link to='/lesson plan' className='flex mb-4 gap-5 ml-6 text-[#6D2323]'>
             <BookIcon className='text-[#6D2323]' />
             <p>Lesson Plan</p>
            </Link>

            <Link to='/bookings' className='flex mb-4 gap-5 ml-6 text-[#6D2323]'>
             <CalendarDaysIcon className='text-[#6D2323]'/>
             <p>Bookings</p>
            </Link>

            <Link to='/resources' className='flex mb-4 gap-5 ml-6 text-[#6D2323]'>
             <FolderIcon className='text-[#6D2323]'/>
             <p>Resources</p>
            </Link>

            <Link to='/messages' className='flex mb-6 gap-5 ml-6 text-[#6D2323]'>
             <MessageCircleHeartIcon className='text-[#6D2323]' />
             <p>Messages</p>
            </Link>

            <Link to='/profile' className='flex mb-4 gap-5 ml-6 text-[#6D2323]'>
             <UserIcon className='text-[#6D2323]'/>
             <p>Profile</p>
            </Link>
            
            <Link to='/' className='flex gap-5 ml-6 text-[#6D2323]'>
             <LockIcon className='text-[#6D2323]'/>
             <p>Logout</p>
            </Link>
        </nav>
    </aside>
    </div>
  )
}

export default Sidebar