import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SidebarDashboard() {
  const location = useLocation();

  return (
    <div className="bg-gray-100 min-h-[75vh] p-4">
      <Link
        to="slider"
        className={`block text-center py-2 px-4 rounded-md mb-2 ${
          location.pathname === "/Dashboard/slider"
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-800 hover:bg-gray-200"
        }`}
      >
        Slider
      </Link>


      <Link
        to="About"
        className={`block text-center py-2 px-4 rounded-md ${
          location.pathname === "/Dashboard/About"
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-800 hover:bg-gray-200"
        }`}
      >
        About
      </Link>
    </div>
  );
}
