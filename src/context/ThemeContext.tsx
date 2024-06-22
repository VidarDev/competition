import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeDefault: string = 'default';

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{
  children: ReactNode;
  colorScheme: string | null | undefined;
}> = ({ children, colorScheme }) => {
  const [theme, setThemeState] = useState<string>(ThemeDefault + '.' + colorScheme);
  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      if (storedTheme) {
        setThemeState(storedTheme + '.' + colorScheme);
      } else {
        setTheme(ThemeDefault);
        setThemeState(ThemeDefault + '.' + colorScheme);
      }
    };
    loadTheme();
  }, []);

  const setTheme = async (newTheme: string) => {
    setThemeState(newTheme + '.' + colorScheme);
    await AsyncStorage.setItem('theme', newTheme);
  };

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
