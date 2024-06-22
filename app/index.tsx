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
