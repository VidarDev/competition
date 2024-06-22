import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useContext, useEffect } from 'react';
import 'react-native-reanimated';

import '@/src/i18n'; // importer la configuration i18n
import { useTranslation } from 'react-i18next';

import { useColorScheme } from '@/hooks/useColorScheme';
import { UserProvider } from '@/src/context/UserContext';
import { ThemeProvider } from '@/src/context/ThemeContext';
import { LangProvider } from '@/src/context/LangContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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

  if (!loaded) {
    return null;
  }

  return (
    <UserProvider>
      <ThemeProvider colorScheme={colorScheme}>
        <LangProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            {/*<Stack.Screen name="(auth)" options={{ headerShown: false }} />*/}
            <Stack.Screen name="+not-found" />
          </Stack>
        </LangProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
