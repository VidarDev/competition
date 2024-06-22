import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ marginLeft: 8, backgroundColor: '#fff', padding: 6, borderRadius: 10 }}>
              <Ionicons name="compass" size={32} color={'#2C2829'} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container]}>
        <Text>{t('Welcome')}</Text>
        <View style={[styles.container]}>
          <TouchableOpacity
            onPress={() => router.navigate({ pathname: 'profil' })}
            style={{ marginLeft: 8, backgroundColor: '#fff', padding: 6, borderRadius: 10 }}>
            <Ionicons name="compass" size={32} color={'#2C2829'} />
            <Text>{t('Home')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
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
