import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import i18n from "../../../i18n";
import { Switch } from "@mui/material";

export default function Navbar({ toggleSidebar }) {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // تغيير اللغة
  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  // تغيير الثيم
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // تفعيل الثيم المحفوظ عند التحميل
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // التحكم في ظهور وإخفاء الـ Sidebar
  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev); // عكس الحالة
    toggleSidebar(); // استدعاء الدالة القادمة من المكون الأب
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* الشعار */}
        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-gray-100">
          Logo
        </Link>

        {/* القائمة */}
        <ul className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-100">
          <li>
            <Link to="/" className="hover:bg-rose-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/home" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-blue-500">
              Dashboard
            </Link>
          </li>
        </ul>

        {/* عناصر التحكم */}
        <div className="flex items-center space-x-4">
          {/* اختيار اللغة */}
          <select
            value={language}
            onChange={changeLanguage}
            className="p-2 mx-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-100"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>

       

          {/* زر القائمة الجانبية */}
          <button
            onClick={handleSidebarToggle}
            className="text-gray-800 dark:text-gray-100 focus:outline-none"
          >
            <i
              className={`fa-solid ${isSidebarOpen ? "fa-times" : "fa-bars"} text-2xl`}
            ></i>
          </button>
        </div>
      </div>

      {/* القائمة المخفية في الشاشات الصغيرة */}
      <div className={`md:hidden ${isSidebarOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center space-y-2 text-gray-800 dark:text-gray-100">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/home" className="hover:text-red-700 ">
              About
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-blue-500">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
