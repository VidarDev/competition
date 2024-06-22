import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
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
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{t('Welcome')}</Text>

      <Text>User: {user}</Text>
      <Text>Is logged in: {isLoggedIn ? 'Yes' : 'No'}</Text>
      <Text>Theme: {theme}</Text>
      <Text>Lang: {lang}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => {
          i18n.changeLanguage('en');
          setLang('en');
        }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2C2829' }}>{t('Go Home')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => {
          i18n.changeLanguage('fr');
          setLang('fr');
        }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2C2829' }}>{t('Go Home')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => router.navigate('modal')}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2C2829' }}>{t('Go Home')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => router.navigate({ pathname: 'profil' })}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2C2829' }}>{t('Go Home')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEAD9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
