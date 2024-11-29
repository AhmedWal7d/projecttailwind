import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import SidebarDashboard from './SidbarDashboard/SidbarDashboard';

export default function Dashboard() {
  // حالة التحكم في إظهار أو إخفاء الشريط الجانبي
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // دالة تبديل حالة الشريط الجانبي
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* شريط التنقل */}
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="flex flex-grow">
      
        {/* المحتوى الرئيسي */}
        <div className={`${isSidebarVisible ? 'w-[85%]' : 'w-full'} mt-4 p-4`}>
          <Outlet />
        </div>
        {/* الشريط الجانبي */}
        {isSidebarVisible && (
          <div className="w-[15%] bg-gray-100 border-r border-gray-300">
            <SidebarDashboard />
          </div>
        )}

      </div>

    </div>
  );
}
