import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'; // If using with React
import enTranslation from './locales/en/translation.json';
import arTranslation from './locales/ar/translation.json';

// Read the language stored in localStorage or use the default language 'en'
const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next) // If using with React
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      }
    },
    lng: savedLanguage, // Set the initial language based on localStorage
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // To avoid XSS issues in translations
    }
  });

// Function to update the body direction
const updateBodyDirection = (language) => {
  const direction = language === 'ar' ? 'rtl' : 'ltr';
  document.body.setAttribute('dir', direction);
};

// Initial direction setup
updateBodyDirection(savedLanguage);

// Listen for language changes
i18n.on('languageChanged', (lng) => {
  updateBodyDirection(lng);
  localStorage.setItem('language', lng); // Save the language change to localStorage
});

export default i18n;
