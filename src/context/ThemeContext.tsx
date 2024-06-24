import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Themes } from '@/constants/Themes';

interface ThemeContextProps {
  theme: string;
  colorScheme: string;
  setTheme: (theme: string) => void;
  setColorScheme: (colorScheme: string) => void;
  themeColor: any;
}

const ThemeDefault: string = 'default';
const ColorSchemeDefault: string = 'light';

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{
  children: ReactNode;
  colorSchemeProvider: string | null | undefined;
}> = ({ children, colorSchemeProvider }) => {
  const [theme, setThemeState] = useState<string>(ThemeDefault);
  const [colorScheme, setColorSchemeState] = useState<string>(
    colorSchemeProvider || ColorSchemeDefault,
  );
  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      const storedColorScheme = await AsyncStorage.getItem('colorScheme');
      if (storedTheme) {
        setThemeState(storedTheme);
      } else {
        setTheme(ThemeDefault);
      }
      if (storedColorScheme) {
        setColorSchemeState(storedColorScheme);
      } else {
        setColorScheme(ColorSchemeDefault);
      }
    };
    loadTheme();
  }, []);

  const setTheme = async (newTheme: string) => {
    setThemeState(newTheme);
    await AsyncStorage.setItem('theme', newTheme);
  };

  const setColorScheme = async (newColorScheme: string) => {
    setColorSchemeState(newColorScheme);
    await AsyncStorage.setItem('colorScheme', newColorScheme);
  };

  // @ts-ignore
  const themeColor = Themes[theme][colorScheme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colorScheme, setColorScheme, themeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
