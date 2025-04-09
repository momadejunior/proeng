// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Sobre Nós": "About Us",
      "Nossos Serviços": "Our Services",
      "Portfolio": "Portfolio",
      "Contactos": "Contact",
      "Ano": "Year",
    "Cliente": "Client",
    "Localização": "Location",
    "Engenharia": "Engineering"

    }
  },
  pt: {
    translation: {
      "Sobre Nós": "Sobre Nós",
      "Nossos Serviços": "Nossos Serviços",
      "Portfolio": "Portfólio",
      "Contactos": "Contactos",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // default language
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
