import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/Context';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { createTheme, CssBaseline, ThemeProvider, Switch, FormControlLabel, FormGroup } from '@mui/material';

export default function Navbar() {

  const location = useLocation();

  const { t } = useTranslation();
  const x = useContext(UserContext); 
  const [language, setLanguage] = useState(i18n.language || 'en');
  const [mymode, setMymode] = useState(() => localStorage.getItem('theme') || 'light');
  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  const toggleTheme = () => {
    setMymode(prevMode => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newMode);
      return newMode;
    });
  };

  const darkTheme = createTheme({
    palette: {
      mode: mymode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    
  

    <nav className="bg-white dark:bg-black shadow-md">
  <div className="container mx-auto px-4 py-2 flex items-center justify-between">
    {/* اللغة (يسار) */}
    <div className="flex items-center">
      <select
        value={language}
        onChange={changeLanguage}
        className="border border-gray-300 rounded px-2 py-1 focus:outline-none"
      >
        <option value="en">English</option>
        <option value="ar">العربية</option>
      </select>
    </div>

    {/* الروابط (وسط) */}
    <div className="hidden md:flex space-x-4">
      <Link
        to="/"
        className={`${
          location.pathname === "/"
            ? "text-blue-500 font-semibold"
            : "text-gray-600 hover:text-gray-800"
        }`}
      >
        Home
      </Link>
      <Link
        to="/home"
        className={`${
          location.pathname === "/home"
            ? "text-blue-500 font-semibold"
            : "text-gray-600 hover:text-gray-800"
        }`}
      >
        {t("home")}
      </Link>
    </div>

    {/* البحث (يمين) */}
    <div className="flex items-center space-x-2">
      <input
        type="search"
        placeholder="Search"
        className="border border-gray-300 rounded px-2 py-1 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-green-500 text-white rounded px-3 py-1 hover:bg-green-600 focus:outline-none"
      >
        Search
      </button>
    </div>
  </div>
</nav>

    </ThemeProvider>
  );
}
