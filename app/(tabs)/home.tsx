import { Image, Text, StyleSheet, View, Button } from 'react-native';
import i18n from '@/src/i18n';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ConfigContext } from '@/src/context/ConfigContext';

export default function HomeScreen() {
  const { t } = useTranslation();
  const { config, setConfig } = useContext(ConfigContext);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{t('welcome-user')}</Text>
      <Button title="Change language to French" onPress={() => i18n.changeLanguage('fr')} />
      <Button title="Change language to ENGLISH" onPress={() => i18n.changeLanguage('en')} />
      <StatusBar style="auto" />
      <Link asChild href={'/'}>
        <Text style={{ color: 'black' }}>Example Screen</Text>
      </Link>
      <Text style={{ marginTop: 100, fontSize: 24, fontWeight: 'bold' }}>
        {JSON.stringify(config)}
      </Text>
      <Text>Current Theme: {config.theme}</Text>
      <Text>Current Language: {config.language}</Text>
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
