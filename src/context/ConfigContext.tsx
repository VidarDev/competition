// src/context/ConfigContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Config {
  theme: string;
  language: string;
  achievements: string[];
}

interface ConfigContextType {
  config: Config;
  setConfig: (config: Config) => void;
}

const defaultConfig: Config = {
  theme: 'default.dark',
  language: 'en',
  achievements: [],
};

export const ConfigContext = createContext<ConfigContextType>({
  config: defaultConfig,
  setConfig: () => {},
});

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<Config>(defaultConfig);

  useEffect(() => {
    const loadConfig = async () => {
      console.log('Loading config');
      try {
        const savedConfig = await AsyncStorage.getItem('appConfig');
        if (savedConfig) {
          setConfig(JSON.parse(savedConfig));
        }
      } catch (error) {
        console.error('Failed to load config', error);
      }
    };

    loadConfig();
  }, []);

  useEffect(() => {
    const saveConfig = async () => {
      try {
        await AsyncStorage.setItem('appConfig', JSON.stringify(config));
      } catch (error) {
        console.error('Failed to save config', error);
      }
    };

    saveConfig();
  }, [config]);

  return <ConfigContext.Provider value={{ config, setConfig }}>{children}</ConfigContext.Provider>;
};
