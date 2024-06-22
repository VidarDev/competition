import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useUser } from '@/src/context/UserContext';
import { useTheme } from '@/src/context/ThemeContext';
import { useLang } from '@/src/context/LangContext';
import { router } from 'expo-router';
import i18n from '@/src/i18n';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
  const { t } = useTranslation();

  const { user, isLoggedIn } = useUser();
  const { theme } = useTheme();
  const { lang, setLang } = useLang();

  return (
    <View style={[styles.container]}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{t('welcome-user')}</Text>

      <Text>User: {user}</Text>
      <Text>Is logged in: {isLoggedIn ? 'Yes' : 'No'}</Text>
      <Text>Theme: {theme}</Text>
      <Text>Lang: {lang}</Text>
      <Button title="Edit User" onPress={() => router.navigate('edit')} />
      <Button
        title="English"
        onPress={() => {
          i18n.changeLanguage('en');
          setLang('en');
        }}
      />
      <Button
        title="French"
        onPress={() => {
          i18n.changeLanguage('fr');
          setLang('fr');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
