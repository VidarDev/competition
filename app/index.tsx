import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { Button, StyleSheet, Text, View } from 'react-native';
import i18n from '@/src/i18n';
import { Link } from 'expo-router';
import React from 'react';

export default function App() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{t('welcome-user')}</Text>
      <Button title="Change language to French" onPress={() => i18n.changeLanguage('fr')} />
      <Button title="Change language to ENGLISH" onPress={() => i18n.changeLanguage('en')} />
      <StatusBar style="auto" />
      <Link
        asChild
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        href={'/home'}>
        <Text style={{ color: 'black' }}>Example Screen</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
