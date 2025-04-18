import React, { useState } from 'react';
import Sidebar from '../assets/components/Sidebar';
import { Outlet } from 'react-router';
import DashNavbar from '../assets/components/DashNavbar';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      <button
        className="md:hidden p-4 text-white bg-[#6D2323]"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      
      <div className="flex-1">
        <DashNavbar />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
