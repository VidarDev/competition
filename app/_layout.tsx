import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useContext, useEffect } from 'react';
import 'react-native-reanimated';

import { ConfigProvider, ConfigContext } from '@/src/context/ConfigContext';
import '@/src/i18n'; // importer la configuration i18n
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { config, setConfig } = useContext(ConfigContext);
  const { i18n } = useTranslation();

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
        setConfig({ ...config, language: savedLanguage });
      }
    };

    loadLanguage();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <ConfigProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/*<Stack.Screen name="(auth)" options={{ headerShown: false }} />*/}
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </ConfigProvider>
  );
}
