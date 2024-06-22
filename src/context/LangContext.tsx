import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '@/src/i18n';

interface LangContextProps {
  lang: string;
  setLang: (lang: string) => void;
}

const LangDefault: string = 'fr';

const LangContext = createContext<LangContextProps | undefined>(undefined);

export const LangProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<string>(LangDefault);

  useEffect(() => {
    const loadLang = async () => {
      const storedLang = await AsyncStorage.getItem('lang');
      if (storedLang) {
        setLangState(storedLang);
        i18n.changeLanguage(storedLang);
      } else {
        setLang(LangDefault);
        i18n.changeLanguage(LangDefault);
      }
    };
    loadLang();
  }, []);

  const setLang = async (newLang: string) => {
    setLangState(newLang);
    await AsyncStorage.setItem('lang', newLang);
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const context = React.useContext(LangContext);
  if (context === undefined) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
};
