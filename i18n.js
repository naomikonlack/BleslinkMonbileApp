import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// i18next configuration
i18n
  .use(HttpBackend) // Load translations from external sources
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Default language
    supportedLngs: ['en', 'es', 'fr', 'de', 'zh'], // Supported languages
    backend: {
      // Translation files hosted externally or locally
      loadPath: '/locales/{{lng}}/translation.json', // e.g., /locales/en/translation.json
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
