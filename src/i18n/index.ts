import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as resources from './resources';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {},
    ),
  },
  lng: 'en',
  fallbackLng: 'en',
});

// Sauvegarder la langue sélectionnée dans AsyncStorage
i18n.on('languageChanged', (lng) => {
  AsyncStorage.setItem('language', lng);
});

export default i18n;
