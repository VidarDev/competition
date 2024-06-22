import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface NameContextProps {
  name: string;
  setName: (name: string) => void;
}

const NameDefault: string = 'test';

const NameContext = createContext<NameContextProps | undefined>(undefined);

export const NameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setNameState] = useState<string>(NameDefault);

  useEffect(() => {
    const loadName = async () => {
      const storedName = await AsyncStorage.getItem('name');
      if (storedName) {
        setNameState(storedName);
      } else {
        setName(NameDefault);
      }
    };
    loadName();
  }, []);

  const setName = async (newName: string) => {
    setNameState(newName);
    await AsyncStorage.setItem('name', newName);
  };

  return <NameContext.Provider value={{ name, setName }}>{children}</NameContext.Provider>;
};

export const useName = () => {
  const context = React.useContext(NameContext);
  if (context === undefined) {
    throw new Error('useName must be used within a NameProvider');
  }
  return context;
};
