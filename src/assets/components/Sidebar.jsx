import React from 'react'
import { Link } from 'react-router'
import {
  HomeIcon, CalendarDaysIcon, MessageCircleHeartIcon,
  UserIcon, LockIcon, DollarSignIcon, ClockIcon, ListOrderedIcon
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

        <Link to="/schedule" onClick={toggleSidebar} className="flex items-center gap-4 ml-6 text-[#6D2323]">
          <ListOrderedIcon /> <p>Schedule</p>
        </Link>

        <Link to="/earnings" onClick={toggleSidebar} className="flex items-center gap-4 ml-6 text-[#6D2323]">
          <DollarSignIcon /> <p>Earnings</p>
        </Link>

        <Link to="/availability" onClick={toggleSidebar} className="flex items-center gap-4 ml-6 text-[#6D2323]">
          <ClockIcon /> <p>Availability</p>
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
