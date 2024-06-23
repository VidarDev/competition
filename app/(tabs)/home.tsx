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
    <>
      <View style={[styles.page]}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 16 }}>{t('Welcome')}</Text>

        <Text>
          {t('User')}: {user}
        </Text>
        <Text>
          {t('User logged in ?')}: {isLoggedIn ? t('Yes') : t('No')}
        </Text>
        <Text>
          {t('Theme')}: {theme}
        </Text>
        <Text>
          {t('Language')}: {lang}
        </Text>
        <View style={[{ flexDirection: 'row', gap: 8 }]}>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              i18n.changeLanguage('en');
              setLang('en');
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#2C2829' }}>EN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              i18n.changeLanguage('fr');
              setLang('fr');
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>FR</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.button]} onPress={() => router.navigate('modal')}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Modal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF6819' }]}
          onPress={() => router.navigate({ pathname: '404' })}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Error</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFEAD9',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2C2829',
  },
  button: {
    backgroundColor: '#fff',
    color: '#2C2829',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 16,
  },
});

export default HomeScreen;
