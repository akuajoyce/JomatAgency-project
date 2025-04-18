import React from 'react'
import { Link } from 'react-router'
import {
  HomeIcon, GraduationCapIcon, BookIcon,
  CalendarDaysIcon, FolderIcon, MessageCircleHeartIcon,
  UserIcon, LockIcon
} from 'lucide-react'
import newLogo from '../images/newLogo.png'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`w-full md:w-64 md:h-screen bg-[#B6CBBD] text-white p-6 space-y-8 transition-all duration-300 ${
        isOpen ? 'block' : 'hidden'
      } md:block`}
    >
      <img
        src={newLogo}
        alt="logo"
        className="h-20 w-20 mx-auto rounded-sm hover:scale-105 cursor-pointer"
      />
      <h2 className="text-center text-[#6D2323] font-bold">Teacher Panel</h2>

      <nav className="space-y-4">
        <Link to="/" onClick={toggleSidebar} className="flex items-center gap-4 ml-6 text-[#6D2323]">
          <HomeIcon /> <p>Dashboard</p>
        </Link>

        <Link to="/my students" onClick={toggleSidebar} className="flex items-center gap-4 ml-6 text-[#6D2323]">
          <GraduationCapIcon /> <p>My Students</p>
        </Link>

        <Link to="/lesson plan" onClick={toggleSidebar} className="flex items-center gap-4 ml-6 text-[#6D2323]">
          <BookIcon /> <p>Lesson Plan</p>
        </Link>

        <Link to="/bookings" onClick={toggleSidebar} className="flex items-center gap-4 ml-6 text-[#6D2323]">
          <CalendarDaysIcon /> <p>Bookings</p>
        </Link>

        <Link to="/resources" onClick={toggleSidebar} className="flex items-center gap-4 ml-6 text-[#6D2323]">
          <FolderIcon /> <p>Resources</p>
        </Link>

        <Link to="/messages" onClick={toggleSidebar} className="flex items-center gap-4 ml-6 text-[#6D2323]">
          <MessageCircleHeartIcon /> <p>Messages</p>
        </Link>

        <Link to="/profile" onClick={toggleSidebar} className="flex items-center gap-4 ml-6 text-[#6D2323]">
          <UserIcon /> <p>Profile</p>
        </Link>

        <Link to="/" onClick={toggleSidebar} className="flex items-center gap-4 ml-6 text-[#6D2323]">
          <LockIcon /> <p>Logout</p>
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar
