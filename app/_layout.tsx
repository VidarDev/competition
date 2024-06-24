import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import '@/src/i18n'; // importer la configuration i18n
import { useTranslation } from 'react-i18next';

import { useColorScheme } from '@/hooks/useColorScheme';
import { UserProvider } from '@/src/context/UserContext';
import { ThemeProvider } from '@/src/context/ThemeContext';
import { LangProvider } from '@/src/context/LangContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { i18n } = useTranslation();

  AsyncStorage.clear();
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
      <ThemeProvider colorSchemeProvider={colorScheme}>
        <LangProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(aux)" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={{
                presentation: 'modal',
              }}
            />
            {/*<Stack.Screen name="(auth)" options={{ headerShown: false }} />*/}
            <Stack.Screen name="+not-found" />
          </Stack>
        </LangProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
