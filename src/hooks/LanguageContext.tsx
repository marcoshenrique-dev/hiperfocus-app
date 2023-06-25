'use client'

import React, { createContext, useEffect, useState } from 'react';

type languageEnum = 'br' | 'en';
 
type LanguageContextType = {
  language: languageEnum;
  updateLanguage(): void;
};

export const languageContext = createContext({} as LanguageContextType);

export const LanguageProvider = ({ children }: any) => {
  const [language, setLanguage] = useState<languageEnum>('en');

  useEffect(() => {
    const localStorageResult = localStorage.getItem('@hiperfocus:language');
    if(localStorageResult === 'br' || localStorageResult === 'en') {
      setLanguage(localStorageResult);
    }
    
  }, []);

  function updateLanguage() {
    if(language === 'en') {
      localStorage.setItem('@hiperfocus:language', 'br');
      setLanguage('br');
    } else {
      localStorage.setItem('@hiperfocus:language', 'en');
      setLanguage('en');
    }
  }

  return (
    <languageContext.Provider value={{ language, updateLanguage }}>
      {children}
    </languageContext.Provider>
  );
};
