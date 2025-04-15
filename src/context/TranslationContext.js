import { createContext, useContext, useState, useEffect } from "react";
import pt from "../locales/pt/translation.json";
import en from "../locales/en/translation.json";

const TranslationContext = createContext();

const translations = {
  pt,
  en,
};

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) setLanguage(savedLang);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const t = translations[language];

  return (
    <TranslationContext.Provider value={{ t, language, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
