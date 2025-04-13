// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import pt from './locales/pt/translation.json';
import ptProjects from './locales/pt/projects.json';
import enProjects from './locales/en/projects.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { 
        translation: en,
        projects: enProjects,  // Added projects translations for English
      },
      pt: { 
        translation: pt,
        projects: ptProjects,  // Added projects translations for Portuguese
      },
    },
    lng: 'pt', // default language
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
