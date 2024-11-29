/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // تفعيل وضع الداكن
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // تحديد المسارات للملفات
  ],
  theme: {
    extend: { 
      colors: {
        red: "#ff0011",
      },
    },
  },
  plugins: [],
};
