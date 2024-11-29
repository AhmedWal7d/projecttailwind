import React, { useEffect, useState } from 'react';
import './App.css'; // تأكد من وجود التنسيقات اللازمة
import { RouterProvider } from 'react-router-dom';
import UserContextprovider from './Components/Context/Context';
import routers from './Components/Routes/routes';
import { Toaster } from 'react-hot-toast';
import { generateToken, messaging } from './firebase';
import { onMessage } from 'firebase/messaging';
import FirebaseContextProvider from './Components/Firbase/ContextFirbase';
import { createTheme, CssBaseline, ThemeProvider, Button } from '@mui/material';
import i18n from './i18n';

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || i18n.language || 'en');
  const [mymode, setMymode] = useState(() => localStorage.getItem('theme') || 'light');

  // تغيير اللغة
  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  // تبديل الوضع الداكن
  const toggleTheme = () => {
    setMymode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newMode);

      // إضافة وإزالة class `dark`
      if (newMode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      return newMode;
    });
  };

  // تطبيق الوضع عند التحميل
  useEffect(() => {
    if (mymode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [mymode]);

  // تطبيق اللغة عند التحميل
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  // إشعارات Firebase
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log('Message received: ', payload);
    });
  }, []);

  // إنشاء الثيم باستخدام Material-UI
  const darkTheme = createTheme({
    palette: {
      mode: mymode,
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <FirebaseContextProvider>
          <UserContextprovider>
            {/* شريط الرأس */}
      
            {/* محتوى التطبيق */}
            <RouterProvider router={routers} />
            <Toaster />
          </UserContextprovider>
        </FirebaseContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
